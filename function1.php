<?php
// session_start();

// // Check if the form was submitted
// if (isset($_POST['docsub1'])) {
//     $dname = $_POST['username3'];
//     $dpass = $_POST['password3'];

//     // Validate input
//     if (empty($dname) || empty($dpass)) {
//         echo("<script>alert('Username and password are required. Please try again.');
//               window.location.href = 'index.php';</script>");
//         exit();
//     }

//     // Establish database connection
//     $con = mysqli_connect("localhost", "root", "", "hms");
//     if (!$con) {
//         die("Connection failed: " . mysqli_connect_error());
//     }

//     // Prepare and execute the query using prepared statements
//     $query = "SELECT * FROM doctor WHERE username = ? AND password = ?";
//     $stmt = mysqli_prepare($con, $query);
//     mysqli_stmt_bind_param($stmt, "ss", $dname, $dpass);
//     mysqli_stmt_execute($stmt);
//     $result = mysqli_stmt_get_result($stmt);

//     // Check if exactly one row is returned
//     if (mysqli_num_rows($result) == 1) {
//         $row = mysqli_fetch_assoc($result);
//         $_SESSION['dname'] = $row['username'];
//         header("Location: doctor-panel.php");
//         exit();
//     } else {
//         header("Location: Doctor-Not-Found.php");
//         exit();
//     }

//     // Close the statement and database connection
//     mysqlite_stmt_close($stmt);
//     mysqlite_close($con);
    
// }
session_start();
$con = mysqli_connect("localhost", "root", "", "hms");
// include('newfunction.php');

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['docsub1'])) {
  $doctor = $_POST['dname'];
  $dpassword = $_POST['dpassword'];
  $dcpassword = $_POST['dcpassword'];
  $demail = $_POST['demail'];
  $docFees = $_POST['docFees'];
  $ddob = $_POST['ddob'];
  $dcity = $_POST['dcity'];
  $dstate = $_POST['dstate'];
  $dcontact = $_POST['dcontact'];

//   $errors=array();
  // Check if the doctor already exists
  $checkQuery = "SELECT * FROM doctor WHERE username='$doctor' OR email='$demail'";
  $checkResult = mysqli_query($con, $checkQuery);

  if (mysqli_num_rows($checkResult) > 0) {
    header("Location: error3.php");
    exit();
  }

  // Insert the new doctor
  if($dpassword != $dcpassword){
    // header("Location: error3.php");
    echo"invalid password";
    exit();
  }

  $query = "INSERT INTO doctor(username, password, contact, email, docFees,city,state,dob) VALUES('$doctor', '$dpassword', '$dcontact', '$demail', '$docFees','$dcity','$dstate','$ddob');";
  $result = mysqli_query($con, $query);
//   echo"hi3";
  if ($result) {
    echo "<script>alert('Doctor added successfully!'); window.location.href='loginindex.html'</script>";
  }
  else
  {
    echo "<script>alert('error')</script>";
  }
}
mysqli_close($con);
?>
