<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;



class getSlidingConfigApiController extends Controller {
    public function get_config(Request $request){
        $web_id = null !==$request->input('web_id') ? $request->input('web_id') : '_';
        $sliding_config = DB::connection('rheacache-db0')
                            ->select('title_exclude', 'href', 'href_mob', 'model', 'use_meta', 
                                    'website_type', 'recommend_type', 'z_open', 'z_close', 'z_item',
                                    'js_url', 'css_url', 'iframe_url')
                            ->where('web_id', $web_id)->first(); // prevent SQL injection
        return json_encode($sliding_config);
    }
}

 

