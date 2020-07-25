const BASE_URL = "http://localhost:3000/donor";

const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");

const loginusername = document.getElementById("loginusername");
const loginpassword = document.getElementById("loginpassword");

loginBtn.addEventListener('click',() => {
  login(loginusername.value,loginpassword.value);
});

logoutBtn.addEventListener('click',() => {
  logout();
});

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
        alert('Username or Password Invalid !')
    }); 
  }

function logout() {
  window.location.href = "../../donor/logout";
}

function toggleNavBar() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}