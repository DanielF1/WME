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

echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <!--Titel der Website -->
    <meta name=\"title\" content=\"World Data Overview.\">
    <!--Beschreibung der Website -->
    <meta name=\"description\" content=\"This page represents a World Data Overview.\">
    <!--Autor der Website -->
    <meta name=\"author\" content=\"Daniel Fischer, Anna Baumgärtel\">
    <!--Keywords/Schlüsselwörter der Website -->
    <meta name=\"keywords\" content=\"world data\">

    <!--Einbinden der css.reset Datei, sowie Responsive Webdesign für Desktop, Tablet und Smartphone-->
    <link rel=\"stylesheet\" type=\"text/css\" href=\"reset.css\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"desktop.css\" media=\"screen\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"tablet.css\" media=\"screen and (max-width: 1200px)\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"smartphone.css\" media=\"screen and (max-width: 800px)\">
    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\">
    <!--Einbinden von Javascript -->
    <script type=\"text/javascript\" src=\"javascript.js\"></script>
    <!--Titel der Website -->
     <title>World Data</title>
</head>
<body>
<!-- Navigationsleiste -->
<nav class=\"stickynav\">
    <ul class=\"navbar\">
        <li id=\"image\"><a id=\"image_hover\" href=\"#\"></a></li>
        <li class=\"nav_element\"><a href=\"#\"><span class=\"fa fa-list\"></span> A1 - Table</a></li>
        <li class=\"nav_element\"><a href=\"parse.php\"><span class=\"fa fa-list\"></span> A2 - Parse</a></li>
        <li class=\"nav_element\"><a href=\"save.php\"><span class=\"fa fa-list\"></span> A2 - Save</a></li>
        <li class=\"nav_element\"><a href=\"#\" onclick=\"addTableDate('print.php')\"><span class=\"fa fa-list\"></span> A2 - Print</a></li>
        <li class=\"nav_element\"><a href=\"#\"><span class=\"fa fa-list\"></span> A3 - REST</a></li>
        <li class=\"nav_element\"><a href=\"#\"><span class=\"fa fa-list\"></span> A4 - Vis</a></li>
    </ul>
</nav>

    <div id=\"wrapper\">
        <!-- Überschrift -->
    <header class=\"header\">World Data Overview ...</header>

<!-- Textbeschreibung -->
    <section>
        <article class=\"article\"> Mavericks reality distortion gradients attenuation.
Thought through and through notifications transparency
            game center multitasking aluminum advanced desktop operating
            system genius bar. This changes everything designed by Apple in
            California passbook. Control center photos all-new design SDK
            technology clock. Simplicity is actually quite complicated.
Functional layers 9:41am partly cloudy minimalism. Dock airdrop
            slide to answer music. Video multitouch iTunes compass. Harmonious
            finder grid system retina animation compressor experience keynote.
Redesign services API notes system preferences. Features siri
            flat buttons airplane mode calculator. Missed call cover flow
            compare models. Wi-Fi apple care volume reminder controls.
My stations folders mac power ultimate upgrade. Shop online
            quicktime trackpad server aperture rumors education safari one to one.
Remote desktop motion business. Backlit keyboard chess phone airport
            extreme support iPad. Accessories magsafe terminal final cut pro.
Featured TV shows downloads digital color meter. Glossy tech specs
            bluetooth manuals. OpenGL products FaceTime free shipping recycling
            mission control applications. from:
            <a class=\"jony_ipsum\" href=\"http://www.jonyipsum.com\">jony_ipsum</a>
        </article>
    </section>

        <!-- Show/Hide Auswahl oberhalb der Tabelle-->
    <section class=\"show_menu\">
        <span>Show/Hide:</span>
        <label for=\"toggle-1\"><input type=\"checkbox\" id=\"toggle-1\" onclick=\"visibility_birth()\"><span class=\"clickables\">birth rate</span></label>
        <span>|</span>
        <label for=\"toggle-2\"><input type=\"checkbox\" id=\"toggle-2\" onclick=\"visibility_cells()\"><span class=\"clickables\">cellphones</span></label>
        <span>|</span>
        <label for=\"toggle-3\"><input type=\"checkbox\" id=\"toggle-3\" onclick=\"visibility_kids()\"><span class=\"clickables\">children / woman</span></label>
        <span>|</span>
        <label for=\"toggle-4\"><input type=\"checkbox\" id=\"toggle-4\" onclick=\"visibility_electro()\"><span class=\"clickables\">electric usage</span></label>
        <span>|</span>
        <label for=\"toggle-5\"><input type=\"checkbox\" id=\"toggle-5\" onclick=\"visibility_internet()\"><span class=\"clickables\">internet usage</span></label>
    </section>

    <section id=\"table1\">
        <!-- Tabelle -->
                <table class=\"table\">
            <!-- Tabellenkopf -->
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Country <span id=\"angle_up\" class=\"fa fa-angle-up\" onclick=\"sortTableFromTop()\"></span>
                                <span id=\"angle_down\" class=\"fa fa-angle-down\"></span></td>
                    <td class=\"birth\">birth rate / 1000</td>
                    <td class=\"cells\">cellphones / 100</td>
                    <td class=\"kids\">children / woman</td>
                    <td class=\"electro\">electric usage</td>
                    <td class=\"internet\">internet usage</td>
                </tr>
            </thead>
            <!-- Tabelleninhalt -->
            <tbody id=\"table_body\">";


// Funktion printXML, welche die xml bzw xsl Datei übergibt, diese kann dann im world data parser verwendet werden
echo $wdp->printXML("world_data.xml","world_data_stylesheet.xsl");
echo
"</tbody>
            </table>
        </section>

        <!-- Show/Hide Auswahl unterhalb der Tabelle-->
    <section class=\"show_menu\">
        <span>Show/Hide:</span>
        <label for=\"toggle-6\"><input type=\"checkbox\" id=\"toggle-6\" onclick=\"visibility_birth2()\"><span class=\"clickables\">birth rate</span></label>
        <span>|</span>
        <label for=\"toggle-7\"><input type=\"checkbox\" id=\"toggle-7\" onclick=\"visibility_cells2()\"><span class=\"clickables\">cellphones</span></label>
        <span>|</span>
        <label for=\"toggle-8\"><input type=\"checkbox\" id=\"toggle-8\" onclick=\"visibility_kids2()\"><span class=\"clickables\">children / woman</span></label>
        <span>|</span>
        <label for=\"toggle-9\"><input type=\"checkbox\" id=\"toggle-9\" onclick=\"visibility_electro2()\"><span class=\"clickables\">electric usage</span></label>
        <span>|</span>
        <label for=\"toggle-10\"><input type=\"checkbox\" id=\"toggle-10\" onclick=\"visibility_internet2()\"><span class=\"clickables\">internet usage</span></label>
    </section>
    <!-- Fußzeile -->
    <footer>
             <!-- waagerechte grüne Linie -->
            <hr>
                <!-- Teamname und Teamnummer -->
                <div class=\"teamnumber_name\">This solution has been created by:<br>
                Daniel Fischer(s6352208) and Anna Baumgärtel(s4090287) - Team 07</div>

                <!-- Copyright -->
                <div class=\"copyright\">Copyright © world_data<br>
                First course exercise <span id=\"copyright_bold\">HTML,CSS and JS</span> of the lecture Web and Multimedia Engineering</div>
    </footer>
    </div>
</body>
</html>";
