<?php
include(__DIR__.'/simplehtmldom_1_9_1/simple_html_dom.php');

header('Content-Type: text/plain; charset=utf-8');

if(!isset($_GET['location'])){
    $location = "Besançon";
}else{
	$location = $_GET['location'];
}

$html = file_get_html('https://www.google.com/search?q='.$location);
$paragraph = $html->find('#main > div:nth-child(4) > div > div.xpc > div:nth-child(1) > div:nth-child(2) > div > div > div > div',0)->innertext;
print_r($paragraph);