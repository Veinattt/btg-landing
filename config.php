<?php
    session_start();

    $en_select='';
    $ru_select='';
    $lv_select='';
    if (!isset($_SESSION['lang']))
        $_SESSION['lang'] = "en";
    else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
        if ($_GET['lang'] == "en") {
            $_SESSION['lang'] = "en";
            $en_select='selected';
        } else if ($_GET['lang'] == "ru") { 
            $_SESSION['lang'] = "ru"; 
            } else if ($_GET['lang'] == "lv") {
                $_SESSION['lang'] = "lv";
            }
    }

    require_once "language/" . $_SESSION['lang'] . ".php";

    if ($_SESSION['lang'] == "ru") {
        $en_select='';
        $ru_select='selected';
        $lv_select='';
    } else if ($_SESSION['lang'] == "lv") {
        $en_select='';
        $ru_select='';
        $lv_select='selected';
    } else {
        $en_select='selected';
        $ru_select='';
        $lv_select='';
    }
?>