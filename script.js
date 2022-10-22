
//refrence your database

let contactformDB = firebase.database().ref("contactform");

document.getElementById("contactform").addEventListener("submit", submitform);
//submit form
function submitform(e) {
  e.preventDefault();

  let username = getElementval("username");
  let email = getElementval("email");
  let password = getElementval("password");
  //savemsg
  savemsg(username, email, password);
}

document.querySelector("alert").style.display = "block";

//savemsg function
const savemsg = (name, email, password) => {
  let newcontactform = contactformDB.Push();
  newcontactform.set({
    username: username,
    email: email,
    password: password,
  });
};

const getElementval = (id) => {
  return document.getElementById(id).value;
};
