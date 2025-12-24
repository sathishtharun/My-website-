function goSignup() {
    window.location.href = "signup.html";
}

function goLogin() {
    window.location.href = "login.html";
}

function signup() {
    let u = document.getElementById("newuser").value;
    let p = document.getElementById("newpass").value;

    localStorage.setItem("user", u);
    localStorage.setItem("pass", p);

    alert("Signup successful");
    window.location.href = "login.html";
}

function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === localStorage.getItem("user") &&
        p === localStorage.getItem("pass")) {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid login");
    }
}