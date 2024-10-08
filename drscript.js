function timeout() {
    window.alert("The Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).");
}
const ans = setTimeout(timeout, 2000);

const currdate = new Date();

const cityToState = {
    "New Delhi": "Delhi",
    "Mumbai": "Maharashtra",
    "Kolkata": "West Bengal",
    "Chennai": "Tamil Nadu",
    "Surat": "Gujarat",
    "Vadodara": "Gujarat",
    "Ahmedabad": "Gujarat",
    "Kanpur": "UP",
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('city-dropdown').addEventListener('change', function() {
        const selectedCity = this.value;
        const stateDropdown = document.getElementById('state-dropdown');
        const state = cityToState[selectedCity];
        if(state) {
            stateDropdown.value = state;
        } else {
            stateDropdown.value = "";
        }
    });
});

function formvalid() {
    let dname = document.getElementById("dname").value;
    let mnum = document.getElementById("dcontact").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;
    let date = document.getElementById("DOB").value;
    const newdate = new Date(date);

    var regemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var regpswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var regmnum = /^\d{10}$/; 

    if (currdate.getFullYear() - newdate.getFullYear() < 21) {
        window.alert("Age of the doctor must be 21 or above");
        return false;
    }
    if (!regmnum.test(mnum)) {
        window.alert("Please enter a valid 10-digit mobile number.");
        document.getElementById("mnum").focus();
        return false;
    }
    if (email.trim() === "" || !regemail.test(email)) {
        window.alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }
    if (pwd.trim() === "" || !regpswd.test(pwd)) {
        window.alert("Please enter a valid password. It should contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).");
        document.getElementById("pwd").focus();
        return false;
    }
    if (pwd != cpwd) {
        window.alert("Password and Confirm Password must be same");
        document.getElementById("pwd").value = '';
        document.getElementById("cpwd").value = '';
        document.getElementById("pwd").focus();
        return false;
    }

    console.log("Form submitted successfully."); 
    // window.location.href= 'main.html';
    return true;
}