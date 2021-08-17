
<?php

    include '/var/www/html/api/DBHelper.php';

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods:POST, GET');  
    header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");
    header('Access-Control-Allow-Credentials: True');

    echo get_config();


    function get_config() {
        // return $_GET['web_id'];
        if (isset($_GET['web_id'])) {
            $web_id = $_GET['web_id'];
            $web_push = DBHelper::connection('rheacache_db0');
            $query_config = "SELECT title_exclude, model, use_meta, website_type, recommend_type, z_open, z_close, z_item, iframe_url, css_url FROM sliding_config WHERE web_id='$web_id'";
            $sliding_config = DBHelper::select($web_push, $query_config)[0]; // only get one
            if (empty($sliding_config)) {
                $code = '403';
                $message = 'without matched web_id';
                $result = array(
                    'code'    => $code,
                    'message' => $message,
                    'data'    => null
                );
                return json_encode($result); // early stop
            }
            else {
                $code = '200';
                $message = 'success to get config';
                $result = array(
                    'code'    => $code,
                    'message' => $message,
                    'data'    => $sliding_config
                );
                return json_encode($result); // early stop
            }

        }
        else {
            $code = '400';
            $message = 'without sending web_id';
            $result = array(
                'code'    => $code,
                'message' => $message,
                'data'    => $_GET['web_id']
            );

            return json_encode($result); // early stop
        }
    }



?>