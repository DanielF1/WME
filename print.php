<?php
/**
 * Created by PhpStorm.
 * User: Anna_Baumgaertel, Daniel Fischer
 * Date: 05.11.2015
 * Time: 15:53
 */

// entspricht der Funktion require - require_once prüft hier allerdings ob die gewünschte Datei bereits eingebunden wurde
// und wird sie in diesem Fall nicht ein weiteres mal einbinden.
// Einbinden der world_data_parser.php
require_once("world_data_parser.php");

//neuer Konstruktor WorldDataParser
$wdp = new WorldDataParser();

// der Funktion parseCSV wird die Datei world_data_v1.csv übergeben
$result = $wdp->parseCSV("world_data_v1.csv");

// der Funktion saveXML wird das ergebnis von der parseCSV übergeben
$save_XML = $wdp->saveXML($result);

// Funktion printXML, welche die xml bzw xsl Datei übergibt, diese kann dann im world data parser verwendet werden
$wdp->printXML("world_data.xml","world_data_stylesheet.xsl");
