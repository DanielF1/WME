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

// neuer Konstruktor WorldDataParser
$obj = new WorldDataParser();

// die Funktion parseCSV wird die Datei world_data_v1.csv übergeben
$inhalt = $obj->parseCSV("world_data_v1.csv");

// laut Aufgabenstellung A1 - Datenstruktur in einem HTML <pre> Element anzeigen
echo "<pre>";
// Ausgeben des Inhaltes der csv Datei
echo print_r($inhalt);
echo "</pre>";
