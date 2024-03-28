<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$mensaje = "El correo es enviado por: ". $name ."\r\n";
$mensaje .= "El correo de la persona es:  ". $email ."\r\n";
$mensaje .= "Mensaje". $_POST["mensaje"] ."\r\n"
$mensaje .= "Enviado el: ". date('d/m/y', time());

$para = "miguelon1230.mf@gmail.com";
$asunto = "Interesado";

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:index.html');
?>