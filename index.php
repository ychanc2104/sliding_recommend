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
        console.log('pc: '+e.screenX);
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

<style>

    img, p, table{
        width: 100%;
    }

</style>

</head>




<body onclick="hello()" style="height: 2000px" style="overflow-x: hidden;">

<button onclick="change_model()" type="button" style="position: sticky; top: 10vh; margin-left: 70vw; width: 10vmax; height: 10vmin; font-size: 3vmin;">Change mode</button>



                   
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



            </div>
    







<?php echo $html; ?>

    <iframe src="avividai_recommend.php" id="avividai_recommend_iframe" data-status="start" data-height="0" data-width="0"></iframe>

</body>
</html>