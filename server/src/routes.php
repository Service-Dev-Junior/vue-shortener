<?php

use Slim\Http\Request;
use Slim\Http\Response;

// URL 변환 및 저장
$app->post('/shortener', function (Request $request, Response $response, array $args) {
    try {
        $_params = $request->getParsedBody();
        $_longUrl = $_params['url'];
        if (empty($_longUrl)) {
            throw new Exception('요청값이 올바르지 않습니다.');
        }

        if (!preg_match('/^(http(s)?:\/\/)/', $_longUrl)) {
            $_longUrl = "http://{$_longUrl}";
        }

        $_client   = new \GuzzleHttp\Client();
        $_response = $_client->request(
            'GET',
            'https://api-ssl.bitly.com/v3/shorten', [
                'query'  => [
                    'longUrl'      => $_longUrl,
                    'access_token' => BITLY_ACCESS_TOKEN,
                ],
                'verify' => false,
            ]
        );

        if ($_response->getStatusCode() !== SUCCESS_CODE) {
            throw new Exception('통신 실패');
        }

        $_body     = $_response->getBody();
        $_arr_body = json_decode($_body);

        if ((int)$_arr_body->status_code !== SUCCESS_CODE) {
            throw new Exception("[{$_arr_body->status_code}]{$_arr_body->status_txt}");
        }

        return $response->withJson([
                'code' => $_arr_body->status_code,
                'message' => $_arr_body->status_txt,
                'data'    => [
                    'longUrl'  => $_longUrl,
                    'shortUrl' => $_arr_body->data->url,
                ],
            ]
        );

    } catch (Exception $e) {
        $this->logger->error($e->getMessage());
        return $response->withJson([
                'code' => $_arr_body->status_code,
                'message' => $_arr_body->status_txt,
            ]
        );
    }
}
);
