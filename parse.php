<?php
/**
 * Created by PhpStorm.
 * User: Anna_Baumgaertel
 * Date: 03.11.2015
 * Time: 15:35
 */


require_once("world_data_parser.php");

$obj = new WorldDataParser();

$inhalt = $obj->parseCSV("world_data_v1.csv");

echo "<pre>";
echo print_r($inhalt);
echo "</pre>";
