<<<<<<< HEAD
"use strict";

function validate() {
  if (document.login.uname.value == "") {
    alert("Enter Username!");
    return false;
  }

  if (document.login.email.value == "") {
    alert("Enter Email!");
    return false;
  }

  if (document.login.phnum.value == "") {
    alert("Enter Phone Number!");
    return false;
  }

  if (document.login.psw.value == "") {
    alert("Enter Password!");
    return false;
  }
  alert("Details Entered Successfully");
  display();
}

function display() {
  var details =
    "<h2>Welcome:</h2>" +
    document.login.uname.value +
    "<br/><span style='color:black'>Username: </span>" +
    document.login.uname.value +
    "<br/><span style='color:black'>Email: </span>" +
    document.login.email.value +
    "<br/><span style='color:black'>Phone Number: </span>" +
    document.login.phnum.value +
    "<br/><span style='color:black'>Password: </span>" +
    document.login.psw.value;

  document.getElementById("displayArea").innerHTML = details;
}
=======
"use strict";

function validate() {
  if (document.login.uname.value == "") {
    alert("Enter Username!");
    return false;
  }

  if (document.login.email.value == "") {
    alert("Enter Email!");
    return false;
  }

  if (document.login.phnum.value == "") {
    alert("Enter Phone Number!");
    return false;
  }

  if (document.login.psw.value == "") {
    alert("Enter Password!");
    return false;
  }
  alert("Details Entered Successfully");
  display();
}

function display() {
  var details =
    "<h2>Welcome:</h2>" +
    document.login.uname.value +
    "<br/><span style='color:black'>Username: </span>" +
    document.login.uname.value +
    "<br/><span style='color:black'>Email: </span>" +
    document.login.email.value +
    "<br/><span style='color:black'>Phone Number: </span>" +
    document.login.phnum.value +
    "<br/><span style='color:black'>Password: </span>" +
    document.login.psw.value;

  document.getElementById("displayArea").innerHTML = details;
}
>>>>>>> origin/main
