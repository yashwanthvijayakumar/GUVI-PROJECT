<?php

if (function_exists('mysqli_connect')) {
  
} else {
  echo 'mysqli extension is not loaded';
}

session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS, post, get');
header("Access-Control-Max-Age","3600");


$db_host        = 'db4free.net';
$db_user        = 'sampleyashwanth';
$db_pass        = 'sampleyashwanth';
$db_database    = 'sampleyashwanth';

global $conn;

$conn = mysqli_connect($db_host,$db_user,$db_pass,$db_database);

if($_SERVER['REQUEST_METHOD']==='POST'){
$username = $_POST["username"];
$password = $_POST["password"];

$user = mysqli_query($conn, "SELECT * FROM users WHERE user_name = '$username'");

if(mysqli_num_rows($user)>0){
  $row = mysqli_fetch_assoc($user);
  if($password == $row["password"]){
    echo "Login Successful";
  }
  else{
    echo "Wrong Password";
    exit;
  }
}

}
?>