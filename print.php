<?php
/**
 * Created by PhpStorm.
 * User: Anna_Baumgaertel
 * Date: 10.11.2015
 * Time: 12:52
 */

require_once("world_data_parser.php");

$wdp = new WorldDataParser();

$result = $wdp->parseCSV("world_data_v1.csv");

$save_XML = $wdp->saveXML($result);

$wdp->printXML("world_data.xml","world_data_stylesheet.xsl");
