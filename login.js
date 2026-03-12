function login() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value;

    // Ambil daftar user dari localStorage, default ada akun admin
    var users = JSON.parse(localStorage.getItem("users")) || [
        { username: "admin", password: "123" }
    ];

    var found = users.find(function(u) {
        return u.username === user && u.password === pass;
    });

    if (found) {
        localStorage.setItem("loggedInUser", user);
        alert("Login Berhasil!");
        window.location.href = 'dashboard.html';
    } else {
        alert("Username atau Password salah. Coba lagi!");
    }
}