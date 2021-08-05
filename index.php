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

$model = 'bottom'; // change here to change mode (bottom or right)

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
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <!-- <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> -->
    <title>推薦版位</title>
    <link href="avividai_recommend.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <style>
        #div1 {
        width: 90vw;
        height: 90vh;
        padding: 10px;
        border: 1px solid #aaaaaa;
        }

 
    </style>

    <script>

    function hello(){
        e = window.event;
        console.log('pc: '+e.screenX);
        // console.log('touchY: '+e.touches[0].screenY);
        // console.log('touch_jquery: '+e.originalEvent.targetTouches[0].screenY);
    }

    function change_model() {
        let urlParams = new URLSearchParams(window.location.search);
        current_model = urlParams.get('test');
        redirect_url = (current_model == 1? 'https://www.likr.com.tw/rick/recommend2/index.php?test=2' : 'https://www.likr.com.tw/rick/recommend2/index.php?test=1');
        location.replace(redirect_url);
    }

    </script>


    <?php if($model == "bottom"): ?>
        <script src="avividai_recommend_config.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php elseif($model == "bottom_product"): ?>
        <script src="avividai_recommend_config_product.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php else: ?>
        <script src="avividai_recommend_config_right.js?<?php echo date('Ymdhis'); ?>"></script>
    <?php endif; ?>

    <script src="avividai_recommend.js?<?php echo date('Ymdhis'); ?>"></script>
    <script src="anime.min.js?<?php echo date('Ymdhis'); ?>"></script>
<style>

    img, p, table{
        /* width: 100vw; */
        /* height: 100vh; */
    }

</style>

</head>




<body style="height: 2000px" style="">

<button onclick="change_model()" type="button" style="position: sticky; top: 10vh; margin-left: 70vw; width: 10vmax; height: 10vmin; font-size: 3vmin;">Change mode</button>

<!-- Content Start -->
<p>&nbsp;</p>

<p><img src="https://photo.lovingfamily.com.tw/photo/images/%E5%B7%A6%E5%81%B4%E9%96%80%E5%B8%82%E8%B3%87%E8%A8%8A_190321.jpg" style="width:198px" /></p>

<p>&nbsp;</p>

<p><img src="https://photo.lovingfamily.com.tw/photo/images/181205_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_LINE@_QR.jpg" style="height:348px; width:200px" /></p>

<p>&nbsp;</p>

<p><a href="https://www.facebook.com/Lovingfamily.tw/" target="_blank"><img src="https://photo.lovingfamily.com.tw/photo/images/200320_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_facebook.jpg" style="height:198px; width:198px" /></a></p>

<p>&nbsp;</p>

<p><a href="https://www.lovingfamily.com.tw/TC/pdlist.aspx?PP1=001&PP2=0923" target="_blank"><img src="https://photo.lovingfamily.com.tw/photo/images/200320_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_%E6%96%B0%E5%93%81.jpg" style="height:344px; width:198px" /></a></p>

<p>&nbsp;</p>

<p><a href="http://www.lovingfamily.com.tw/tc/pdlist.aspx?pp1=01" target="new"><img src="https://photo.lovingfamily.com.tw/photo/images/190624_%E5%AE%98%E7%B6%B2%E5%B7%A6%E5%81%B4_%E6%88%80%E5%AE%B6%E5%A5%BD%E7%89%A9.jpg" style="height:196px; width:196px" /></a></p>

<p>&nbsp;</p>

<p><a href="http://www.lovingfamily.com.tw/tc/pdlist.aspx?pp1=07" target="_blank"><img src="https://photo.lovingfamily.com.tw/photo/images/左側-01-161219_990.jpg" style="height:198px; width:198px" /></a></p>

<p>&nbsp;</p>
<!-- <img class="lazyload"src="images/kv.jpg" />     --><br />
<!-- Content End --> 

</div>










<?php echo $html; ?>

    <iframe src="avividai_recommend.php" id="avividai_recommend_iframe" data-status="start" data-height="0" data-width="0" style="z-index: 999; background-color: transparent; position: fixed;"></iframe>

</body>
</html>