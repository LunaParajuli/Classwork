const displayMsg = (msg, id, colorName) => {
  document.getElementById(id).innerHTML = msg
  document.getElementById(id).style.color = colorName
}

const fnameValidate = () => {
  const fname = document.getElementById("fname").value
  if (fname == "") {
    displayMsg("Firstname is mandatory", "fnamemsg", "red")
    return false
  } else if (!fname.match(/^([a-zA-Z])+$/)) {
    displayMsg("Firstname must not include number", "fnamemsg", "red")
    return false
  }

  else if (fname.length < 2) {
    displayMsg("Firstname must be more than 2 character", "fnamemsg", "red")
  }
  else {
    displayMsg("Valid FirstName", "fnamemsg", "green")
    return true
  }
}

const lnameValidate = () => {
  const lname = document.getElementById("lname").value
  if (lname == "") {
    displayMsg("Lastname is mandatory", "lnamemsg", "red")
    return false
  } else if (!lname.match(/^([a-zA-Z])+$/)) {
    displayMsg("Lastname must not include number", "lnamemsg", "red")
    return false
  }

  else if (lname.length < 2) {
    displayMsg("Lastname must be more than 2 character", "fnamemsg", "red")
  }
  else {
    displayMsg("Valid LastName", "lnamemsg", "green")
    return true
  }
}


const emailValidate = () => {
  const email = document.getElementById("email").value
  if (email == "") {
    displayMsg("Email is mandatory", "emailmsg", "red")
    return false
  } else if (!email.match(/^([a-z0-9])[a-z0-9\#\$\@\&\*]+\@+([a-z])+\.+([a-z])+$/)) {
    displayMsg("Invalid Email", "emailmsg", "red")
    return false
  }

  else if (email.length < 2) {
    displayMsg("Email must be more than 2 character", "emailmsg", "red")
  }
  else {
    displayMsg("Valid Email", "emailmsg", "green")
    return true
  }
}

const passwordValidate = () => {
  const pwd = document.getElementById("pwd").value
  if (pwd == "") {
    displayMsg("Password is mandatory", "pwdmsg", "red")
    return false
  } else if (!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%_&]).{8,30}$/)) {
    displayMsg("Weak password", "pwdmsg", "red")
    return false
  }
  else {
    displayMsg("Strong Password", "pwdmsg", "green")
    return true
  }
}

const cpasswordValidate = () => {
  const pwd = document.getElementById("pwd").value
  const cpwd = document.getElementById("cpwd").value

  if (cpwd == "") {
    displayMsg("Confirm Password is mandatory", "cpwdmsg", "red")
    return false
  }
  else if (cpwd != pwd) {
    displayMsg(" Password didnot match", "cpwdmsg", "red")
    return false
  }
  else {
    displayMsg(" Password matched", "cpwdmsg", "green")
    return true
  }
}

const validForm = () => {
  if (fnameValidate() && lnameValidate() && emailValidate() && passwordValidate() && cpasswordValidate()) {
    return true
  }
  else {
    return false
  }
}