// script.js
document.querySelector("#login").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (!data.valid) {
        return alert("Usuario o contraseña incorrectos");
    }

    alert(`Bienvenido ${data.name}`);
    localStorage.setItem(`login_success`, JSON.stringify(data));
    alert ("perro");
});
