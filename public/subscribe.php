
<?php

$host="127.0.0.1";
$username="root";
$password="";
$databasename="multi_providers";

$connect=mysql_connect($host,$username,$password);
$db=mysql_select_db($databasename);

if(isset($_POST['subscribe-form']))
{
 $email=$_POST["Email"];
 
 mysql_query("insert into short_urls values('','$email')");
 echo "Thank You For Joining Our Newsletter";
}
?>