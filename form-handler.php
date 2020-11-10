<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $to = "gizmode338@gmail.com"; 
    $name = $_POST['FormInputName'];
    $email = $_POST['FormInputEmail']; 
    $number = $_POST['FormInputNumber']; 
    if(isset($_POST['submit1'])){
        $f_address = $_POST['FormInputAddress'];
        $d_address = $_POST['FormInputDeliveryAddress']; 
        $cargo = $_POST['FormInputCargo'];
        $subject = "Form ticket";
        $message = "Name: " . $name . "\nEmail: " . $email . "\nNumber: " . $number 
                    . "\nFrom: " . $f_address . "\nTo: " . $d_address . "\nCargo: " . $cargo;
    } else {
        $subject = "Form question";
        $message = "Name: " . $name . "\nEmail: " . $email . "\nNumber: " . $number;
    }
    mail($to,$subject,$message);
    header('Location: index.html');
    }
?>