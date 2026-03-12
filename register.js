function register() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmPassword").value;

    if (user === "" || pass === "") {
        alert("Username dan password tidak boleh kosong!");
        return;
    }

    if (pass !== confirmPass) {
        alert("Konfirmasi password tidak cocok!");
        return;
    }

    // Ambil daftar user, default ada akun admin
    var users = JSON.parse(localStorage.getItem("users")) || [
        { username: "admin", password: "123" }
    ];

    var exists = users.find(function(u) {
        return u.username === user;
    });

    if (exists) {
        alert("Username sudah digunakan! Coba nama lain.");
        return;
    }

    users.push({ username: user, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = 'index.html';
}
