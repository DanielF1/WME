<?php
/**
 * Created by PhpStorm.
 * User: Anna_Baumgaertel, Daniel Fischer
 * Date: 05.11.2015
 * Time: 15:53
 */


class WorldDataParser
{

// Aufgabe A1 - Serverseitiges Parsen einer CSV Datei
    function parseCSV($world_data)
    {
        // Öffnen der csv Datei, nur 'lesen'
        $handle = fopen($world_data, "r");
        // Einlesen der CSV‐Datei -> wird in Array gespeichert
        $keys[] = fgetcsv($handle);
        //  Funktion feof gibt true zurück, wenn ein Fehler bei $handle auftritt
        while (!feof($handle)) {
            // Einlesen der CSV‐Datei
            $line_of_text[] = fgetcsv($handle);
        }
        // Datei, auf die $handle zeigt, wird geschlossen
        fclose($handle);


        for ($i = 0; $i < count($line_of_text); $i++) {
            $line_of_text[$i] = array_combine($keys[0], $line_of_text[$i]);
        }

        return $line_of_text;

    }

// Aufgabe A2 - Serverseitiges erstellen einer XML Datei
    function saveXML($array){
        // neues xml Element erzeugen (den Tag Countries)
        $xml = new SimpleXMLElement('<Countries/>');
        // Schleife, welche in das Array geht
        foreach($array as $a){
            //den Tag Country hinzufügt
            $subXML = $xml->addChild('Country');
                 //'eine Stufe tiefer' in Array gehen und key und value bestimmen
                foreach($a as $key => $value) {
                    $subXML->addChild(explode(" ", $key)[0], trim("$value"));
                }
        }
        // World Data wird als xml gespeichert
        $xml->asXML("world_data.xml");

        // wenn das xml Dokument true(erfolgreich) ist, wird 'XML Savestatus erfolgreich (1)' zurückgegeben,
        // ansonsten 'XML Savestatus nicht erfolgreich (0)'
        if($xml->asXML("world_data.xml") == true){
            echo 'XML Savestatus erfolgreich (1)';
        }else{
            echo 'XML Savestatus nicht erfolgreich (0)';
        }
    }
// Aufgabe A3 - Transformation von XML zu HTML (XSLT-­‐Verarbeitung)
    function printXML($xml_datei, $xslt){
        // neues DOMDocument erstellen und die xml laden
        $xml = new DOMDocument;
        $xml->load($xml_datei);
        // neues DOMDocument erstellen und die xslt laden
        $xsl = new DOMDocument;
        $xsl->load($xslt);
        // neuer XSLTProcessor erstellen und das stylesheet xsl importieren laden
        $proc = new XSLTProcessor;
        $proc->importStylesheet($xsl);
        // mithilfe von oben erstellten Variable proc dies nun in ein xml Dokument übersetzen
        $newdom = $proc->transformToDoc($xml);
        // das übersetze xml Dokument als xml speichern und ausgeben
        print $newdom->saveXML();

    }
}
