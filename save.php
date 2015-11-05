<?php
/**
 * Created by PhpStorm.
 * User: Anna_Baumgaertel
 * Date: 05.11.2015
 * Time: 15:53
 */
require_once("world_data_parser.php");

$wdp = new WorldDataParser();
$wdp->saveXML($wdp->parseCSV("world_data_v1.csv"));