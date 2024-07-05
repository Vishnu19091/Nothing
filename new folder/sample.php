<<<<<<< HEAD
<?php
$servername ="127.0.0.1";
$username ="root";
$password ="";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed" . $conn->connect_error);
}
else
echo"connected Successfully";

$sql = "SELECT id, firstname, lastname FROM Sample_Table";
$result=$conn->query($sql);

if($result->num_rows > 0){
    while($row=$result->fetch_assoc()){
    echo "<br><br>"."id: " . $row["id"] ."<br>"."FirstName: " . $row["firstname"] .
    "<br>"."LastName: " . $row["lastname"] . "<br><br>";
} }
else {
    echo"no results found";
}

$conn->close();
=======
<?php
$servername ="127.0.0.1";
$username ="root";
$password ="";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed" . $conn->connect_error);
}
else
echo"connected Successfully";

$sql = "SELECT id, firstname, lastname FROM Sample_Table";
$result=$conn->query($sql);

if($result->num_rows > 0){
    while($row=$result->fetch_assoc()){
    echo "<br><br>"."id: " . $row["id"] ."<br>"."FirstName: " . $row["firstname"] .
    "<br>"."LastName: " . $row["lastname"] . "<br><br>";
} }
else {
    echo"no results found";
}

$conn->close();
>>>>>>> origin/main
?>