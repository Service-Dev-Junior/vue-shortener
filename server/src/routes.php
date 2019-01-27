<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->post('/shorten', function (Request $request, Response $response, array $args) {
    try {
        $client   = new \GuzzleHttp\Client();
        $_response = $client->request('GET', 'https://api-ssl.bitly.com/v3/shorten', [
            'query'  => [
                'longUrl'      => 'https://frend.tistory.com/12?category=711253',
                'access_token' => 'b65287033f465626a66db5fd87984d8ca17a36d0',
            ],
            'verify' => false,
        ]);

        if ($_response->getStatusCode() == 200) {
            $body     = $_response->getBody();
            $arr_body = json_decode($body);
            return $response->withJson(['data' => $arr_body->data->url]);
        }
    } catch (Exception $e) {
        $this->logger->info($e->getMessage());
    }
});
