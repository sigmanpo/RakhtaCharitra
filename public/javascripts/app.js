const BASE_URL = "http://localhost:3000/donor";

// buttons
const loginBtn = document.getElementById("loginbtn");
const logoutBtn = document.getElementById("logoutbtn");
const registerBtn = document.getElementById("registerbtn");

// login credentials
const loginusername = document.getElementById("loginusername");
const loginpassword = document.getElementById("loginpassword");

// Registration Details
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const bloodgroup = document.getElementById("bloodgroup");
const state = document.getElementById("state");
const pincode = document.getElementById("pincode");
const city = document.getElementById("city");
const area = document.getElementById("area");
const username = document.getElementById("username");
const password = document.getElementById("password");

if(loginBtn)
loginBtn.addEventListener('click',() => {
  login(loginusername.value,loginpassword.value);
});

if(logoutBtn)
logoutBtn.addEventListener('click',() => {
  logout();
});

if(registerBtn)
registerBtn.addEventListener('click',() => {
  register(
    fullname.value,
    email.value,
    phone.value,
    dob.value,
    bloodgroup.value,
    getgender(),
    state.value,
    pincode.value,
    city.value,
    area.value,
    username.value,
    password.value
  );
});

function register(fn,email,phone,dob,bg,gender,state,pc,city,area,un,pwd) {
  fetch(BASE_URL+"/signup",
  {
    method:"POST",
    body:JSON.stringify({"fullname":fn,"email":email,"phone":phone,"dob":dob,"bloodgroup":bg,"gender":gender,"state":state,"pincode":pc,"city":city,"area":area,"username":un,"password":pwd}),
    headers: { "Content-type": "application/json"} 
  })
  .then(response => response.json())
  .then((data) => {
    if(data.success == true)
      alert(data.message);
    else 
      alert(data.message);
  })
}

function login(username,password) {
  fetch(BASE_URL+"/signin",
    {
      method:"POST",
      body:JSON.stringify({"username":username,"password":password}),
      headers: { "Content-type": "application/json"} 
    })
    .then(response => response.json()) 
    .then((data) => {
      if(data.success == true) 
        window.location.href = "../../donor";
      else 
        alert('Username or Password Invalid !');
    }); 
  }

function logout() {
  window.location.href = "../../donor/logout";
}

function getgender() { 
  return (document.getElementById("male").checked ? "male" : "female"); 
}

function toggleNavBar() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}