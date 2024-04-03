function LoginVerification() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.alert("Login Berhasil");
        window.location="/home/home.html";
    }
    else if (username == "" || password == ""){
        window.alert("Enter Username or Password");
    }
    else {
        window.alert("Login Failed");
    }
}

function Signup(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}