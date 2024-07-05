<<<<<<< HEAD
<?php
 if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["uname"]) && isset($_GET["email"]) 
 && isset($_GET["psw"]) && isset($_GET["phnum"])) {
 echo "<br>" . "Welcome " . $_GET["uname"] . "<br>";
 echo "Your email address is: " . $_GET["email"] . "<br>";
 echo "Your Password is: " . $_GET["psw"] . "<br>"; 
 echo "Your Phone Number is: " . $_GET["phnum"]; 
 echo "<br><br>" . "<a href='index.php'>Back to Index</a>";
} 
=======
<?php
 if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["uname"]) && isset($_GET["email"]) 
 && isset($_GET["psw"]) && isset($_GET["phnum"])) {
 echo "<br>" . "Welcome " . $_GET["uname"] . "<br>";
 echo "Your email address is: " . $_GET["email"] . "<br>";
 echo "Your Password is: " . $_GET["psw"] . "<br>"; 
 echo "Your Phone Number is: " . $_GET["phnum"]; 
 echo "<br><br>" . "<a href='index.php'>Back to Index</a>";
} 
>>>>>>> origin/main
 ?>