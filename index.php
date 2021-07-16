<?php
$html = null;
//curl_setopt($ch, CURLOPT_HTTPHEADER, array('content-type: text/html; charset=UTF-8', 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'));

/*
$ch = curl_init();      
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
curl_setopt($ch, CURLOPT_URL, 'https://www.jsmix.com.tw/'); 
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY); 
$html = curl_exec($ch); 
curl_close($ch);
**/

$model = 'bottom';

if(isset($_GET["model"]) == true)
{
    $model = filter_var($_GET["model"], FILTER_SANITIZE_STRING);
}
?>
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <title>推薦版位</title>
    <link href="avividai_recommend.css" rel="stylesheet" />

    <?php if($model == "bottom"): ?>
        <script src="avividai_recommend_config.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php elseif($model == "bottom_product"): ?>
        <script src="avividai_recommend_config_product.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php else: ?>
        <script src="avividai_recommend_config_right.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php endif; ?>

    <script src="avividai_recommend.js?<?php echo date('Ymdhis'); ?>"></script>
    <script src="anime.min.js?<?php echo date('Ymdhis'); ?>"></script>
</head>

<body style="height: 2000px">

<?php echo $html; ?>

<iframe src="avividai_recommend.php" id="avividai_recommend_iframe" data-status="start" data-height="0" data-width="0"></iframe>
</body>
</html>