function CaptchaGenerator() {
  let num1 = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  let num2 = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  let num3 = Math.floor(Math.random() * 10);
  let num4 = String.fromCharCode(Math.floor(Math.random() * 4 + 35));
  let num5 = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  let captcha = num1 + num2 + num3 + num4 + num5;
  let create = document.createElement('span');
  create.innerText = captcha;
  let part = document.querySelector('.captcha-form');
  part.append(create);
}
function CaptchaChecker() {
  let spanElement = document.querySelector('span');
  let arr = spanElement.innerText;
  let captchaInput = document.querySelector('#captcha').value;
  if (arr !== captchaInput) {
    alert("Enter a valid Captcha");
    spanElement.remove();
    document.querySelector('#captcha').value = '';
    CaptchaGenerator();
    return false;
  }
  else {
    return true;
  }
}
CaptchaGenerator();

function formvalid() {

  let email = document.getElementById("email").value;
  let pwd = document.getElementById("Password").value;

  var regemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  var regpswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  console.log("Email:", email);
  console.log("Password:", pwd);


  if (email.trim() === "" || !regemail.test(email)) {
    window.alert("Please enter a valid email address.");
    document.getElementById("email").focus();
    document.getElementById("email").style.color='red';
    return false;
  }


  if (pwd.trim() === "" || !regpswd.test(pwd)) {
    window.alert("Please enter a valid password. It should contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).");
    document.getElementById("Password").focus();
    return false;
  }


  if (!CaptchaChecker()) {
    window.alert("Please verify the captcha!");
    return false;
  }


  // window.location.href = "main.html";
  return true;
}
