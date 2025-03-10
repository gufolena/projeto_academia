document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const username = document.getElementById("username").value.trim();
        const password = passwordInput.value.trim();

        // Simulação de login com usuário e senha fictícios
        if (username === "admin" && password === "1234") {
            errorMessage.textContent = ""; // Limpa a mensagem de erro
            errorMessage.style.display = "none"; // Esconde a mensagem de erro
            alert("Login bem-sucedido!");
            window.location.href = "home.html"; // Redireciona para outra página
        } else {
            errorMessage.textContent = "Usuário ou senha incorretos!"; // Define o texto do erro
            errorMessage.style.display = "block"; // Torna a mensagem visível
        }
    });

    // Adiciona funcionalidade de exibição de senha com cadeado aberto e fechado
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = ""; // Cadeado aberto
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = ""; // Cadeado fechado
        }
    });
});

// Registro do Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((reg) => console.log('Service Worker: Registered'))
            .catch((err) => console.log(`Service Worker: Error: ${err}`));
    });
}