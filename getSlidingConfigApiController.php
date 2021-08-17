<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;



class getSlidingConfigApiController extends Controller {
    public function get_config(Request $request){
        $web_id = null !==$request->input('web_id') ? $request->input('web_id') : '_';
        
        $query_sql = "SELECT title_exclude, href, href_mob, model, use_meta, website_type, recommend_type, z_open, z_close, z_item, js_url, css_url, iframe_url FROM sliding_config WHERE web_id='$web_id'";

        $sliding_config = DB::connection('rheacache-db0')->select($query_sql);

        return json_encode($sliding_config);



    }
}

 

