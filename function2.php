<?php
session_start();
$con = mysqli_connect("localhost", "root", "", "hms");

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['patsub1'])) {
    $email = $_POST['email'];
    $fname = $_POST['Fname'];
    $lname = $_POST['Lname'];
    $gender = $_POST['gender'];
    $contact = $_POST['mob'];
    $password = $_POST['Password'];
    $cpassword = $_POST['CPassword'];
    $dob = $_POST['DOB'];
    $city = $_POST['city'];

    $errors = array();

    if (empty($fname) || empty($lname) || empty($gender) || empty($email) || empty($contact) || empty($password) || empty($cpassword) || empty($dob) || empty($city) ) {
        $errors[] = "All fields are required";
    }

    if ($password !== $cpassword) {
        $errors[] = "Passwords do not match";
    }

    // Check if the patient with the same email or contact already exists
    $checkQuery = "SELECT * FROM patient WHERE email='$email' OR contact='$contact'";
    $checkResult = mysqli_query($con, $checkQuery);

    if (mysqli_num_rows($checkResult) > 0) {
        $errors[] = "A patient with the same email or contact already exists";
    }

    if (count($errors) === 0) {
        echo"inside";
        $query = "INSERT INTO patient (fname, lname, gender, email, contact, password, cpassword, dob, city) VALUES ('$fname', '$lname', '$gender', '$email', '$contact', '$password', '$cpassword', '$dob', '$city');";
        $result = mysqli_query($con, $query);

        if ($result) {
            $_SESSION['username'] = $fname . " " . $lname;
            $_SESSION['fname'] = $fname;
            $_SESSION['lname'] = $lname;
            $_SESSION['gender'] = $gender;
            $_SESSION['contact'] = $contact;
            $_SESSION['email'] = $email;
            $_SESSION['dob'] = $dob;
            $_SESSION['city'] = $city;

            $query1 = "SELECT pid FROM patient WHERE fname='$fname' AND lname='$lname';";
            $result1 = mysqli_query($con, $query1);

            if ($result1 && mysqli_num_rows($result1) > 0) {
                $row = mysqli_fetch_assoc($result1);
                $_SESSION['pid'] = $row['pid'];
            }

            // header("Location: patient-login");
            echo" <script>alert('Patient registred successfully');window.location.href = 'loginindex.html';</script>";
            exit();
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($con);
        }
    } else {
        $_SESSION['validation_errors'] = $errors;
        header("Location: error1.php");
        exit();
    }
}

mysqli_close($con);

?>
