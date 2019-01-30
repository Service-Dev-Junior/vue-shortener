<?php

use Slim\Http\Request;
use Slim\Http\Response;

// 저장된 리스트 모두 조회
$app->get('/shorteners', function (Request $request, Response $response, array $args) {
    try {
        $_sth = $this->db->prepare("SELECT * FROM shortener ORDER BY id DESC");
        $_sth->execute();
        $_results = $_sth->fetchAll();

        return $response->withJson([
                'result' => RESPONSE_SUCCESS,
                'data'   => [
                    'list' => $_results
                ],
            ]
        );

    } catch (Exception $e) {
        $this->logger->error($e->getMessage());
        return $response->withJson([
                'result'  => RESPONSE_FAIL,
                'message' => '리스트 조회에 실패하였습니다.',
            ]
        );
    }
}
);

// URL 변환 및 저장
$app->post('/shortener', function (Request $request, Response $response, array $args) {
    try {
        $_title   = $request->getParsedBodyParam('title');
        $_longUrl = $request->getParsedBodyParam('longUrl');

        if (empty($_title) || empty($_longUrl)) {
            throw new Exception('요청값이 올바르지 않습니다.');
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
            throw new Exception("[{$_arr_body['status_code']}]{$_arr_body['status_txt']}");
        }

        return $response->withJson([
                'result'  => RESPONSE_SUCCESS,
                'message' => '정상적으로 등록되었습니다.',
                'data'    => [
                    'longUrl'  => $_arr_body->data->long_url,
                    'shortUrl' => $_arr_body->data->url,
                ],
            ]
        );

    } catch (Exception $e) {
        $this->logger->error($e->getMessage());
        return $response->withJson([
                'result'  => RESPONSE_FAIL,
                'message' => $e->getMessage(),
            ]
        );
    }
}
);

// 삭제
$app->delete('/shortener/[{id}]', function (Request $request, Response $response, array $args) {
    try {
        $sth = $this->db->prepare("DELETE FROM shortener WHERE id=:id");
        $sth->bindParam("id", $args['id']);
        $sth->execute();

        if ($sth->rowCount() === 0) {
            throw new Exception('NOT_EXIST_ID');
        }

        return $response->withJson([
                'result'  => RESPONSE_SUCCESS,
                'message' => '정상적으로 삭제되었습니다.',
                'data'    => [
                    'id' => $args['id']
                ]
            ]
        );
    } catch (Exception $e) {
        $this->logger->error($e->getMessage());
        return $response->withJson([
                'result'  => RESPONSE_FAIL,
                'message' => '존재하지 않는 ID입니다.',
            ]
        );
    }
}
);
