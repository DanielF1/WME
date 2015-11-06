<?php
/**
 * Created by PhpStorm.
 * User: Anna_Baumgaertel
 * Date: 05.11.2015
 * Time: 15:53
 */
require_once("world_data_parser.php");

$wdp = new WorldDataParser();

$result = $wdp->parseCSV("world_data_v1.csv");

$save_XML = $wdp->saveXML($result);

if($save_XML){
    echo 'XML Savestatus erfolgreich (1)';
}else{
    echo 'XML Savestatus nicht erfolgreich (0)';
}