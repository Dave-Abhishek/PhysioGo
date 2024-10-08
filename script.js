function timeout() {
    window.alert("The Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).");
}
const currdate = new Date();
const ans = setTimeout(timeout, 2000);

function formvalid() {

    let email = document.getElementById("email").value;
    let pwd = document.getElementById("Password").value;
    let cpwd = document.getElementById("CPassword").value;
    let date = document.getElementById("DOB").value;
    const newdate = new Date(date);

    var regemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var regpswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    console.log("Email:", email);
    console.log("Password:", pwd);
    console.log("Confirm Password:", cpwd);
    if (currdate.getFullYear() - newdate.getFullYear() < 18) {
        window.alert("Age of the patient must be 18 or above");
        return false;
    }
    if (email.trim() === "" || !regemail.test(email)) {
        window.alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }

    if (pwd.trim() === "" || !regpswd.test(pwd)) {
        window.alert("Please enter a valid password. It should contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).");
        document.getElementById("Password").focus();
        return false;
    }

    if (pwd != cpwd) {
        window.alert("Password and Confirm Password must be same");
        document.getElementById("Password").value = '';
        document.getElementById("CPassword").value = '';
        document.getElementById("Password").focus();
        return false
    }

    // window.location.href = "loginindex.html";
    return true;
}
