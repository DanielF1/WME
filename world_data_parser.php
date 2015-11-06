<?php
/**
 * Created by PhpStorm.
 * User: Daniel
 * Date: 03.11.2015
 * Time: 14:57
 */



class WorldDataParser
{


    function parseCSV($world_data)
    {
        $handle = fopen($world_data, "r");
        $keys[] = fgetcsv($handle);
        while (!feof($handle)) {
            $line_of_text[] = fgetcsv($handle);
        }
        fclose($handle);

        for ($i = 0; $i < count($line_of_text); $i++) {
            $line_of_text[$i] = array_combine($keys[0], $line_of_text[$i]);
        }

        return $line_of_text;

    }

    function saveXML($array){
        $xml = new SimpleXMLElement('<Countries/>');
        //array_walk_recursive($array,array($xml, 'addChild'));

        foreach($array as $a){
            foreach($a as $b) {
                foreach($b as $key => $value) {
                    $xml->addChild("$key", "$value");
                }
            }
        }
        echo $xml->asXML();
    }
}
