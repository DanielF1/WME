<?php
/**
 * Created by PhpStorm.
 * User: Daniel
 * Date: 03.11.2015
 * Time: 14:57
 */



class WorldDataParser {



    function parseCSV($world_data){
        $handle = fopen($world_data, "r");

    return fgetcsv($handle);

    }

}
