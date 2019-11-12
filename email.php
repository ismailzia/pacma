<?php 


$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$msg = $_POST["msg"];
$headers = " Nom :".$nom;
// ." Prenom :".$prenom." Email :".$email." Tel :".$tel 

mail("contact@expvidemaison.com","vide maison", $msg ,$headers);
header("location: index.html");
?>