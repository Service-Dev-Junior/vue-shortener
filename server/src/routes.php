<?php

use Slim\Http\Request;
use Slim\Http\Response;

// 저장된 리스트 모두 조회
$app->get('/shorteners', function (Request $request, Response $response, array $args) {

});

// URL 변환 및 저장
$app->post('/shortener', function (Request $request, Response $response, array $args) {
    try {
        $client    = new \GuzzleHttp\Client();
        $_response = $client->request('GET', 'https://api-ssl.bitly.com/v3/shorten', [
            'query'  => [
                'longUrl'      => 'https://frend.tistory.com/12?category=711253',
                'access_token' => BITLY_ACCESS_TOKEN,
            ],
            'verify' => false,
        ]);

        if ($_response->getStatusCode() == 200) {
            $body     = $_response->getBody();
            $arr_body = json_decode($body);

            return $response->withJson([
                'data' => [
                    'short' => $arr_body->data->url
                ]
            ]);
        }
    } catch (Exception $e) {
        $this->logger->info($e->getMessage());
    }
});

// 삭제
$app->delete('/shortener/{}', function (Request $request, Response $response, array $args) {

});
