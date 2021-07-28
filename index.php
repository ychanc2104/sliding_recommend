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
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
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
        console.log('pc: '+e.clientX);
        // console.log('touch: '+e.touches[0].screenY);
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



</head>




<body style="height: 2000px">

<button onclick="change_model()" type="button" style="position: sticky; top: 10vh; margin-left: 70vw; width: 10vmax; height: 10vmin; font-size: 3vmin;">Change mode</button>

<div class="showphoto">
    <div><a href='https://photo.lovingfamily.com.tw/photo/01040017/01040017-04.jpg' target='_blank' rel='pdImg'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-04.jpg' border='0' width='400' alt=''></a></div><div><a href='https://photo.lovingfamily.com.tw/photo/01040017/01040017-03.jpg' target='_blank' rel='pdImg'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-03.jpg' border='0' width='400' alt=''></a></div><div><a href='https://photo.lovingfamily.com.tw/photo/01040017/01040017-02.jpg' target='_blank' rel='pdImg'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-02.jpg' border='0' width='400' alt=''></a></div><div><a href='https://photo.lovingfamily.com.tw/photo/01040017/01040017-01.jpg' target='_blank' rel='pdImg'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-01.jpg' border='0' width='400' alt=''></a></div>
</div>
<div class="pd-show">
<div id="pdwrapper"><!--商品主圖/縮圖 ============================================-->
    <div id="pdcarousel">       
        <div id="carousel">
            <span id='pd00'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-04.jpg'/></span><span id='pd01'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-03.jpg'/></span><span id='pd02'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-02.jpg'/></span><span id='pd03'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-01.jpg'/></span>
        </div>
        </div>
    </div>
    <div id="pdthumbs">
        <div id="thumbs">
            <a href='#pd00'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-04.jpg'/></a><a href='#pd01'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-03.jpg'/></a><a href='#pd02'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-02.jpg'/></a><a href='#pd03'><img class='lazyload' src='https://photo.lovingfamily.com.tw/photo/01040017/01040017-01.jpg'/></a>
         </div>
        <a id="prev" href="#"></a><a id="next" href="#"></a></div>
</div><!--//商品主圖/縮圖 ==========================================================-->
                </div>
                <div id="ctright"><!--購買基本說明(主圖右邊)-->
                    <h3 style="color:#fa64ff;font-size:16px">商品編號：<span id="cphContentBody_lblPDNo">01040017</span></h3>
                    <h1 style="font-size:19px"><span id="cphContentBody_lblPDName">床包 / 雙人【香草綠】100%純棉 雙人床包含兩件枕套<br> <font color=FFFFFF>AAC201</font></span></h1>
                     <div style="font-size:16px">
                        <span id="cphContentBody_lblPDBrief"></span>
                    </div>
                    <div  class="smallfont" style="color:#ccc;">
                        已銷售<span id="cphContentBody_lblPDSaleCount">2446</span>件
                    </div>
                    <div id="pdcolor"></div>
                    <hr />
                    
                    <div style="margin-top:30px;font-weight:bold">
                        <span style="font-size:19px;">售價：</span><span style='color:#ff0000;font-family:verdana, Arial bold;font-size:40px;'>528</span><span style='color:#ccc;font-face:verdana, Arial bold;font-size:20pt;'><del><span style='font-size:10px;'>TWD.</span>600<del></span>
                    </div>
                    <span style="font-size:16px"><br /><span style="color:red;font-weight:bold"></span></span>
                    <!--購買資訊 Start-->
                    
                    
                   
                    <p class="smallfont" style="margin-top:30px;font-size:16px">商品數量</p>
                    <div style="margin-bottom:5px; height:29px;">
                        <select name="ctl00$cphContentBody$ddlqty" id="ddlqty" class="smallfont" style="width:95%;">
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>

</select>
                        
                        
                    </div>
                    <div id="cphContentBody_showRelatedPD">
	
                        <p class="smallfont" style="margin-top:30px;font-size:16px">其它尺寸與品項連結</p>
                        <div style="margin-bottom:5px; ">
                            <select name="ctl00$cphContentBody$ddlRelatedPD" id="ddlRelatedPD" class="smallfont wd-pd hi-pd" size="5" style="width:95%;">
		<option selected="selected" value="0"> 請點選商品 </option>
		<option value="1245241041          ">【香草綠】雙人床包被套組</option>
		<option value="1245241043          ">【香草綠】雙人加大床包+鋪棉兩用被套組</option>
		<option value="aacf0101205         ">香草綠-雙人兩用被套</option>
		<option value="c87570997           ">【香草綠】雙人加大床包被套組</option>
		<option value="c87570998           ">【香草綠】雙人床包+鋪棉兩用被套組</option>
		<option value="c879726000          ">香草綠-枕套單入</option>
		<option value="c87972611           ">【香草綠】雙人特大床包+鋪棉兩用被套組</option>
		<option value="c87972612           ">香草綠-雙人床包內含兩件枕套</option>
		<option value="c87972613           ">香草綠-雙人被套</option>
		<option value="c87972614           ">【香草綠】雙人特大床包被套組</option>
		<option value="c87972616           ">香草綠-雙人加大床包內含兩件枕套</option>
		<option value="c87972618           ">香草綠-雙人特大床包內含兩件枕套</option>
		<option value="c88127434           ">香草綠-單人床包內含一件枕套</option>
		<option value="c88127435           ">香草綠-單人被套</option>
		<option value="c88127436           ">【香草綠】單人床包被套組</option>

	</select>
                        </div>
                    
</div>
                    <div id="cphContentBody_showExtraBuy">
	
                        <p class="smallfont" style="margin-top:30px;font-size:16px">點開賺很大(選擇後按下加入購物車)</p>
                        <div style="margin-bottom:5px; height:29px;">
                            <select name="ctl00$cphContentBody$ddlExtraBuy" id="ddlExtraBuy" class="smallfont wd-pd hi-pd" size="5" style="width:95%;">
		<option selected="selected" value="0"> 便宜加購價 </option>
		<option value="06010001::諾貝達-單人全包覆性高級保潔墊::F::FFF::450::999::c87972612           ">$450 買 諾貝達-單人全包覆性高級保潔墊</option>
		<option value="06020001::諾貝達-雙人全包覆性高級保潔墊::F::FFF::550::999::c87972612           ">$550 買 諾貝達-雙人全包覆性高級保潔墊</option>
		<option value="06030001::諾貝達-雙人加大全包覆性高級保潔墊::F::FFF::690::999::c87972612           ">$690 買 諾貝達-雙人加大全包覆性高級保潔墊</option>
		<option value="06040001::諾貝達-雙人特大全包覆性高級保潔墊::F::FFF::790::999::c87972612           ">$790 買 諾貝達-雙人特大全包覆性高級保潔墊</option>
		<option value="06050002::樂芙防潑水保潔墊(二入)-單人::F::FFF::790::999::c87972612           ">$790 買 樂芙防潑水保潔墊(二入)-單人</option>
		<option value="06060001::樂芙防潑水保潔墊(二入)-雙人::F::FFF::950::999::c87972612           ">$950 買 樂芙防潑水保潔墊(二入)-雙人</option>
		<option value="06070001::樂芙防潑水保潔墊(二入)-加大::F::FFF::1050::999::c87972612           ">$1050 買 樂芙防潑水保潔墊(二入)-加大</option>
		<option value="06080001::樂芙防潑水保潔墊(二入)-特大::F::FFF::1150::999::c87972612           ">$1150 買 樂芙防潑水保潔墊(二入)-特大</option>

	</select>
                        </div>
                    
</div>
                    <!--購買資訊End -->
                    <div id="cphContentBody_showBuyButton">
	
                        <div style="margin-top:120px;"">
                            <input type="hidden" name="ctl00$cphContentBody$hfUnStore" id="hfUnStore" value="False" />
                            <input type="hidden" name="ctl00$cphContentBody$hfIsSet" id="hfIsSet" value="False" />
                            <a href="javascript:void(0);" class="AddToCart"><img src="images/btnAddCart_P.jpg" onmouseover="this.src='images/btnAddCart_B.jpg'" onmouseout="this.src='images/btnAddCart_P.jpg'"/></a>
                            <a href="javascript:void(0);" class="AddToCart2"><img src="images/btnPayNow_P.png" onmouseover="this.src='images/btnPayNow_B.png'" onmouseout="this.src='images/btnPayNow_P.png'"/></a>
                        </div>

                    <div class="slick_tag-category">
                        <a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E9%9B%99%E4%BA%BA,%E5%BA%8A%E5%8C%85>雙人 床包</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E7%B4%94%E6%A3%89,%E5%BA%8A%E5%8C%85>純棉 床包</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E5%BA%8A%E5%8C%85,%E6%9E%95%E5%A5%97>床包 枕套</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E7%B4%94%E6%A3%89,%E6%9E%95%E5%A5%97>純棉 枕套</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E7%B4%94%E6%A3%89,%E9%9B%99%E4%BA%BA,%E5%BA%8A%E5%8C%85>純棉 雙人 床包</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E5%8F%B0%E7%81%A3%E8%A3%BD%E9%80%A0,%E5%BA%8A%E5%8C%85>台灣製造 床包</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E5%8F%B0%E7%81%A3%E8%A3%BD%E9%80%A0,%E6%9E%95%E5%A5%97,%E9%9B%99%E4%BA%BA>台灣製造 枕套 雙人</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E6%9E%95%E5%A5%97,%E7%B4%94%E6%A3%89,%E9%9B%99%E4%BA%BA>枕套 純棉 雙人</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E5%8F%B0%E7%81%A3%E8%A3%BD%E9%80%A0,%E5%BA%8A%E5%8C%85,%E6%9E%95%E5%A5%97>台灣製造 床包 枕套</a><a href=https://www.lovingfamily.com.tw/TC/Category.aspx?tag=%E7%B4%94%E6%A3%89,%E9%9B%99%E4%BA%BA>純棉 雙人</a>
                    </div>
                    
</div>
                    
                    </div>
            </div>
        <div class="abgne_tag">
                 <!-- <ul class="tags"> -->
                <ul class="tabs">
                    <li class="photo3"><a href="javascript:void(0);">商品介紹</a></li>
                    <li class="photo3"><a href="javascript:void(0);">尺寸與規格</a></li>
                    <li class="photo3"><a href="javascript:void(0);">庫存狀態</a></li>      
                </ul>

                   
                 <div class="NEW_tab_container">     
                     <!-- tag1//////////////////////////////////////////// -->
                     <div id="tab2" class="tab_content" style="display: block;">
                        
                         

<div align="center">
<p align="center"><img src="https://photo.lovingfamily.com.tw/photo/images/更多尺寸_790_g.jpg"></p>
</p><p align="center"><img src="https://photo.lovingfamily.com.tw/photo/images/純棉_香草綠_長條圖_170322.jpg"></p>
<p align="center"><img src="https://photo.lovingfamily.com.tw/photo/images/30支純棉_長條圖介紹.jpg"></p>
<div ALIGN="center">
  <table BORDER="0" CELLSPACING="1" CELLPADDING="0" WIDTH="750" BGCOLOR="#ffffff">

<tr BGCOLOR="#999999">
<td BGCOLOR="#999999" COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff">商品特色</font></tt> 
<tr>
<td BGCOLOR="#FFFFFF" COLSPAN="3"><p align="left">戀家小舖~我們相信寢具是一輩子的事業，讓您因為一套優秀的寢具而戀家更是我們服務的理念，請給我們一次服務的機會，以後您會將一輩子的寢具都放心的交給我們 。
<p align="left">身為紡織大國的台灣，紡織染整技術領先大陸等其他國家許多，台灣製的純棉在染整以及織工等的多層次細緻處理上，比大陸製的精梳棉好上許多，製作成床組後，會具體反應在觸感以及質感上，不易褪色/起毛球/縮水  ，絕對是您選擇親膚床組時的首選。 </p>
<tr BGCOLOR="#999999">
<td COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff"><strong>本賣場商品規格</strong></font></tt> 
<tr>
 <td BGCOLOR="#ffffff" HEIGHT="45"><p ALIGN="left"><tt>雙人床包</tt> 
  <td BGCOLOR="#ffffff" ALIGN="left"><p ALIGN="left"><tt>雙人5x6.2尺床包x1<br></tt>
      <tt>美式信封枕套x2<br>
    <tr BGCOLOR="#999999">
<td COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff"><strong>材質與其他尺寸規格</strong></font></tt> 
<tr>
<td BGCOLOR="#ffffff" ALIGN="center">
<p ALIGN="left"><tt>材　質 </tt>
<td BGCOLOR="#ffffff" HEIGHT="52" COLSPAN="2" ALIGN="center">
<p ALIGN="left"><tt>100%純棉，台灣製造<br>
</tt><tt>床高25CM，可包覆高度為23CM以下的床墊</tt>
<tr BGCOLOR="#999999">
<td WIDTH="186" ALIGN="center">
<p ALIGN="center"><strong><tt><font COLOR="#ffffff">規　格 </font></tt>
</strong>
<td WIDTH="300" ALIGN="center">
<p ALIGN="center"><strong><tt><font COLOR="#ffffff">配　　備 </font></tt>
</strong>
<td ALIGN="center">
<p ALIGN="center"><strong><tt><font COLOR="#ffffff">備　註</font> </tt>
</strong>
<tr BGCOLOR="#ffffff">
  <td HEIGHT="45"><p ALIGN="left"><tt>單人床包 </tt> 
  <td HEIGHT="45" ALIGN="left"><p ALIGN="left"><tt>單人3.5x6.2尺床包x1<br>
  </tt><tt>美式信封枕套x1 </tt> 
  <td HEIGHT="45" ALIGN="center"><p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c88127434">請點選此處下標</a></tt> 
      
  <tr BGCOLOR="#e6e6e6">
  <td BGCOLOR="#e6e6e6" HEIGHT="45"><p ALIGN="left"><tt>單人被套 </tt> 
  <td ALIGN="left"><p ALIGN="left"><tt>單人4.5x6.5尺被套x1 </tt> 
  <td HEIGHT="28" ALIGN="center"><p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c88127435">請點選此處下標</a></tt> 
      
  <tr>
  <td BGCOLOR="#ffffff" HEIGHT="45"><p ALIGN="left"><tt>單人床包被套組 </tt> 
  <td BGCOLOR="#ffffff" ALIGN="left"><p ALIGN="left"><tt>單人3.5x6.2尺床包x1<br>
    </tt><tt>美式信封枕套x1<br>
    </tt><tt>單人4.5x6.5尺被套x1 </tt> 
  <td HEIGHT="10" ALIGN="center" BGCOLOR="#ffffff"><p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c88127436">請點選此處下標</a></tt> 
    
  <tr BGCOLOR="#e6e6e6">
<td HEIGHT="45">
<p ALIGN="left"><tt>雙人標準床包</tt>
<td>
<p ALIGN="left"><tt>雙人5x6.2尺印花床包x1<br></tt><tt>美式信封枕套x2 </tt>
<td>
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87972612">請點選此處下標</a></tt>
  <tr>
<td BGCOLOR="#ffffff" HEIGHT="45">
<p ALIGN="left"><tt>雙人被套</tt>
<td BGCOLOR="#ffffff">
<p ALIGN="left"><tt>雙人6x7尺被套x1 </tt>
<td BGCOLOR="#ffffff"><p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87972613">請點選此處下標</a></tt>
<tr BGCOLOR="#e6e6e6">
<td HEIGHT="45">
<p ALIGN="left"><tt>雙人床包被??</tt> 
<td>
<p ALIGN="left"><tt>雙人5x6.2尺印花床包x1<br></tt><tt>雙人6x7尺被套x1 <br></tt><tt>美式信封枕套x2</tt>
<td>
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=1245241041">請點選此處下標</a></tt>
  <tr>
<td BGCOLOR="#ffffff" HEIGHT="45">
<p ALIGN="left"><tt>雙人加大床包</tt> 
<td BGCOLOR="#ffffff">
<p ALIGN="left"><tt>雙人加大6x6.2尺印花床包x1<br>美式信封枕套x2 </tt>
<td BGCOLOR="#ffffff">
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87972616">請點選此處下標</a></tt>
  <tr BGCOLOR="#e6e6e6">
<td HEIGHT="45">
<p ALIGN="left"><tt>雙人特大床包 </tt>
<td>
<p ALIGN="left"><tt>雙人特大6x7尺印花床包x1<br>美式信封枕套x2 </tt>
<td>
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87972618">請點選此處下標</a></tt>
  <tr>
<td BGCOLOR="#ffffff">
<p ALIGN="left"><tt>雙人加大床包被套組 </tt>
<td BGCOLOR="#ffffff">
<p ALIGN="left"><tt>雙人加大6x6.2尺印花床包x1<br></tt><tt>雙人6x7尺被套x1 <br></tt><tt>美式信封枕套x2</tt>
<td BGCOLOR="#ffffff">
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87570997">請點選此處下標</a></tt>
  <tr BGCOLOR="#e6e6e6">
<td>
<p ALIGN="left"><tt>雙人特大床包被套組 </tt>
<td>
<p ALIGN="left"><tt>雙人特大6x7尺印花床包x1<br></tt><tt>雙人6x7尺被套x1<br></tt><tt>美式信封枕套x2</tt>
<td>
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87972614">請點選此處下標</a></tt><br>
  <tr BGCOLOR="#e6e6e6">
    <td HEIGHT="45" BGCOLOR="#ffffff"><tt>雙人鋪棉兩用被套 </tt> 
    <td BGCOLOR="#ffffff"><p><tt> 雙人6x7鋪棉兩用被套x1 </tt> 
    
    </p>
    <td BGCOLOR="#ffffff"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=aacf0101205">請點選此處下標</a></tt>  
    <tr BGCOLOR="#e6e6e6">
    <td HEIGHT="45" BGCOLOR="#e6e6e6"><tt>雙人床包兩用被套組  </tt>
    <td BGCOLOR="#e6e6e6"><p><tt>雙人5x6.2尺印花床包x1<br>
      </tt><tt>雙人6x7尺鋪棉兩用被套x1 <br>
        </tt><tt>美式信封枕套x2</tt></p>
    <td BGCOLOR="#e6e6e6"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87570998">請點選此處下標</a></tt>  
    <tr BGCOLOR="#e6e6e6">
    <td HEIGHT="45" BGCOLOR="#ffffff"><tt>雙人加大兩用被套組  </tt>
    <td BGCOLOR="#ffffff"><p><tt>雙人加大6x6.2尺印花床包x1<br>
      </tt><tt>雙人6x7尺鋪棉兩用被套x1<br>
        </tt><tt>美式信封枕套x2</tt></p>
    <td BGCOLOR="#ffffff"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=1245241043">請點選此處下標</a></tt>  
    <tr BGCOLOR="#e6e6e6">
    <td HEIGHT="45" BGCOLOR="#e6e6e6"><tt>雙人特大兩用被套組  </tt>
    <td BGCOLOR="#e6e6e6"><p><tt>雙人特大6x7尺印花床包x1<br>
      </tt><tt>雙人6x7尺鋪棉兩用被套x1<br>
        </tt><tt>美式信封枕套x2</tt></p>
    <td BGCOLOR="#e6e6e6"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c87972611">請點選此處下標</a></tt>  
    <tr BGCOLOR="#e6e6e6">
<td HEIGHT="45" BGCOLOR="#ffffff">
<p ALIGN="left"><tt>美式信封枕套 </tt>
<td BGCOLOR="#ffffff">
<p ALIGN="left"><tt>45x75cm x1</tt><tt></tt> 
<td BGCOLOR="#ffffff">
  <p ALIGN="left"><tt><a rel="nofollow" target="_blank" HREF="https://www.lovingfamily.com.tw/TC/PDContent.aspx?Pkey=c879726000">請點選此處下標</a></tt>
  <tr BGCOLOR="#999999">
<td COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff"><strong>貼心小提醒</strong></font></tt> 
<tr>
<td BGCOLOR="#ffffff" COLSPAN="3">
<p ALIGN="left"><tt>‧訂單成立後，請再次確認收件人資料與商品明細【花色、尺寸、數量】小舖才能更準確為您出貨唷~ <br></tt>
  <tt>‧加購賣場中的 "保潔墊" 均可再享比直購價便宜200元的優惠 <br>
  </tt>
<tr BGCOLOR="#999999">
<td COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff"><strong>訂購須知</strong></font></tt> 
<tr>
<td BGCOLOR="#ffffff" COLSPAN="3">
  <p>‧付款方式：7-11付款取貨 / ATM轉帳 / 線上刷卡
   / 宅配貨到付款(需另加收30元貨運代收金流管理費用)
  <p> ‧運費：外島或偏遠山區、地區需酌收超額運費(加購品不列入滿額條件)。</p>
  <p>‧清洗方式：以冷水清洗晾乾即可。/ 請勿烘乾，避免高溫縮水。/ 請使用中性洗劑，勿使用衣物柔軟精。</p>
<p>‧品質保證：到收貨物後如有任何瑕疵，7天內戀家小舖負責換貨及相關運費</p>
  <p>‧每台電腦、行動裝置的螢幕所呈現的顏色可能不盡相同，或多或少都會有些色差，購買代表您能了解與接受，戀家小舖感謝您的配合。</p>
  <p>‧寢具屬於親膚性個人衛生商品，為保障所有買家權益，一經拆封使用不接受退換貨，請您見諒。</p><p>‧賣場商品實際尺寸皆有正負3%合理誤差，不列入商品瑕疵範圍。</p></td></tr></table></div>
</div>
                    </div>
                
                     <div id="tab3" class="tab_content" style="display: none;">
                      <!-- <div id="tag2" class="tag_content"> -->
                          <!-- tag2//////////////////////////////////////////// -->
                        <div ALIGN="center">
  <table BORDER="1" CELLSPACING="1" CELLPADDING="0" WIDTH="750" BGCOLOR="#ffffff">
    <tr BGCOLOR="#999999">
<td COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff"><strong>本賣場商品規格</strong></font></tt> 
<tr>
 <td width="186" HEIGHT="50" BGCOLOR="#ffffff"><p ALIGN="left">雙人床包
 <td width="300" ALIGN="left" BGCOLOR="#ffffff"><p ALIGN="left"> 雙人5x6.2尺床包x1<br>
     美式信封枕套x2<br>
     <tt>
       </tt>
   <tr BGCOLOR="#999999">
<td COLSPAN="3">
<p ALIGN="center"><tt><font COLOR="#ffffff"><strong>材質</strong></font></tt> 
<tr>
<td BGCOLOR="#ffffff" ALIGN="center">
<p ALIGN="left"><tt>材　質 </tt>
<td BGCOLOR="#ffffff" HEIGHT="52" COLSPAN="2" ALIGN="center">
<p ALIGN="left">100%純棉，台灣製造<br>
  床高25CM，可包覆高度為23CM以下的床墊
</table></div></br>
                         
                     </div>
                      <!-- <div id="tag3" class="tag_content"> -->
                        <div id="tab4" class="tab_content" style="display: none;">
                         <!-- tag3//////////////////////////////////////////// -->
                            <div id="contentimgdesktop">
                        <img src="stockinfo.aspx?pd=01040017&ya=c87972612" />
                            </div>
                            <div id="contentimgmob">
                        <img src="stockinfo.aspx?pd=01040017&ya=c87972612&vw=mob" />
                            </div>
                    </div>

                </div>
            </div>
        <div style="clear:both;"></div>
        <input type="hidden" id="selectpd" name="selectpd" value="" />
        <input type="hidden" id="hfYANO" name="selectpd" value="" />
        <input type="hidden" id="hfPDNo" name="selectpd" value="" />

   </div>
</div>

    <script type="application/ld+json">
                                {
                                    "@context": "http://schema.org/",
                                    "@type": "Product",
                                    "name": "床包 / 雙人【香草綠】100%純棉 雙人床包含兩件枕套",
                                    "image": "https://photo.lovingfamily.com.tw/photo/01040017/01040017.jpg",
                                    "description": "床包 / 雙人【香草綠】100%純棉 雙人床包含兩件枕套｜商品特色 戀家小舖~我們相信寢具是一輩子的事業，讓您因為一套優秀的寢具而戀家更是我們服務的理念，請給我們一次服務的機會，以後您會將一輩子的寢具都放心的交給我們 。身為紡織大國的台灣，紡織染整技術領先大陸等其他國家許多，台灣製的純棉在染整以及織工等的多層次細緻處理上，比大陸製的精梳棉好上許多，製作成床組後，會具體反應在觸感以及質感上，不易褪",
                                    "mpn": "01040017",
                                    "category": "床組>雙人床包",
                                    "offers": {
                                    "@type": "Offer",
                                    "priceCurrency": "TWD",
                                    "price": "528",
                                    "availability": "in_stock"
                                    }
                                }
                            </script> 

            </div>
            
        
        <div id="MoveDivBox">
            <div id="MoveDiv">
                        <table border="0" width="109" cellspacing="0" cellpadding="0">
                            
            
	                        <tr>
		                        <td style="text-align:center" height="60">
			                        <a href="ShoppingCart.aspx"><img src="images/cart02-1.png"></a>
		                        </td>
	                        </tr>
	                        <tr>
		                        <td style="text-align:center">
			                        <a href="ShoppingCart.aspx"><span id="cart_qty">0</span><img src="images/spacer.gif" width="3" height="15" align="bottom">個商品<br>
			                        總計：<span id="cart_amount">0</span></a>
		                        </td>
	                        </tr>
	                        <tr>
		                        <td style="text-align:center" height="30">
			                        <a href="ShoppingCart.aspx"><img src="images/cart02-2.png"></a>
		                        </td>
	                        </tr>
                            <tr>
		                        <td style="text-align:center" height="30">
                                      <a href = "Login.aspx"><img src = "images/cart03.png" ></a>
                                       </td>
                                   </tr> 
                        </table>
	                    </div>
        </div> 
    </div>
      <div id="footer">
        <script src="/scripts/edm.js"></script>
        <div id="footercontent" >
            <div id="about" style="float:left;border-right:1px solid #989898;padding-right:20px;width:350px;height:200px;position:relative">
                <h2>聯絡我們</h2>
        
                <ul>
                  <li><div class="telbtn" style="font-size:13pt;font-family:Arial" onclick="location.href='tel:02-8797-8080'">TEL：02-8797-8080</div></li>
                  <li><span style="font-size:13pt;font-family:Arial">TIME:<br />(MON-FRI) 9:30-12:00 13:30-18:30</span></li>
                  <li><span style="font-size:13pt;font-family:Arial">EMAIL：<a href="maito:service@lovingfamily.com.tw" target="_blank">service@lovingfamily.com.tw</a></span></li>
                  <li>
                      <span style="color:#fff">訂閱電子報</span>
                      <input type="text" id="txtSignUp" class="SignUp" />
                      <input type="button" id="btSubScribe" onclick="addEDM($.trim($('#txtSignUp').val()));" style="border:none;font-family:新細明體;background-color:#999;color:#fff;font-size:12pt;cursor:pointer;vertical-align:middle;"  value="訂閱"/>
                 
                  </li>
                </ul>
            </div>
            <div id="help" style="float:left;border-right:1px solid #989898;padding-right:20px;width:150px;height:200px;">
                <h2>服務說明</h2>
        
                <ul>
                  <li><a href="ServiceInfo.aspx#Advantage">產品優勢</a></li>
                  <li><a href="ServiceInfo.aspx#ShopFlow">購物流程</a></li>
                  <li><a href="ServiceInfo.aspx#Payment">付款方式</a></li>
                  <li><a href="ServiceInfo.aspx#Service">售後服務</a></li>
                  <li><a href="ServiceInfo.aspx#QA">常見問題</a></li>
                  <li><a href="ServiceInfo.aspx#EVA">電子發票</a></li>
                  <li><a href="ServiceInfo.aspx#MemberService">會員服務</a></li>
                </ul>
       
       
            </div>
            <div id="company" style="float:left;border-right:1px solid #989898;padding-right:20px;width:150px;height:200px;">
                <h2>關於我們</h2>
        
                <ul>
                  <li><a href="ABoutUs.aspx#Profile">公司簡介</a></li>
                  <li><a href="ABoutUs.aspx#Location">門市資訊</a></li>
                  <li><a href="ABoutUs.aspx#Corporation">異業合作</a></li>
                  <li><a href="ABoutUs.aspx#Privacy">隱私權說明</a></li>
                </ul>
           </div>
            <div id="fb" style="float:left;padding-right:20px;height:200px;">
                <ul>
                  <li><a href="https://www.facebook.com/Lovingfamily.tw/?fref=ts" target="_blank">FACEBOOK</a></li>
   
      
                </ul>
            </div>
       </div>
        
        
        <div id="btm" class="btm"><!-- 底部三寶 -->
          <ul>
              <li><a href="Modify.aspx"><img src="images/btm_bt1.png" style="width:31px;height:31px"/><p>會員</p></a></li>
              <li><a href="index.aspx"><img src="images/btm_bt2.png" style="width:31px;height:31px"/><p>首頁</p></a></li>
              <li><a href="ShoppingCart.aspx"><img src="images/btm_bt3.png" style="width:31px;height:31px"/><p>結帳(0)</p></a></li>
         </ul>
        </div>  <!-- //底部三寶 btm -->
        <p  class="mobshow" style="margin:30px 0px 0px 0px;padding-bottom:20px;text-align:center">Copyright © 2017 LOVINGFAMILY online store(橙保有限公司). All Rights Reserved.</p>
        <p  class="mobshow" style="margin:10px 0px 0px 0px;padding-bottom:20px;text-align:center;"><a href="http://www.kantech.com.tw/" target="_blank"><span style="color:floralwhite">【康德科技 系統設計】</span></a></p>
      </div>
        <div class="mfp-hide crazyAd" id="homeCoverAd2">
            <div class="crazyAd_inner">
                <a href="javascript:void(0)" id="CouponAD2" class="">
                    <img src="" />
                </a>
                <a href="javascript:void(0)" class="crazyAd_btn">關閉</a>
            </div>
        </div>
      <div class="pageCover"></div>
         <div id="topBtn" class="fix"><img src="../TC/images/top.png" class="top" /></div>










<?php echo $html; ?>

<iframe src="avividai_recommend.php" id="avividai_recommend_iframe" data-status="start" data-height="0" data-width="0"></iframe>

</body>
</html>