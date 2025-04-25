<?php
$server="localhost";
$username="root";
$password="";
$db_name="range";
$conn=new mysqli($server,$username,$password,$db_name);
if(!$conn){
    die("connection Failed");
}
else{
    header("localhost:index.html");
}
$name=$_POST['name'];
$qualification=$_POST['qualification'];
$email=$_POST['email'];
$pass=$_POST['password'];

$sql="INSERT INTO'register'(name, qulaification, email, password) VALUES ('".$name."','".$qualification."','".$email."','".$pass."')";
$result=mysqli_querry($conn,$sql);
