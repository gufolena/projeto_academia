document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const notificacoes = document.getElementById("notificacoes");
    const usernameSpan = document.getElementById("username");
    const closeNotificationBtn = document.getElementById("closeNotification");
    const toggleThemeBtn = document.getElementById("toggleTheme");

    // Simulação de pegar o nome do usuário (pode vir do backend no futuro)
    const username = "João"; 
    usernameSpan.textContent = username;

    // Exibe notificações se houver
    const novasNotificacoes = true; 
    if (novasNotificacoes) {
        notificacoes.textContent = "📢 Você tem novas notificações!";
        notificacoes.style.display = "block";
    }

    // Fechar notificação
    closeNotificationBtn.addEventListener("click", function () {
        notificacoes.style.display = "none";
    });

    // Menu responsivo
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Animação nos cards ao passar o mouse
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.background = "#ff5722";
        });

        card.addEventListener("mouseout", function () {
            this.style.background = "#007bff";
        });
    });

    // Verificar se o modo escuro está ativado no armazenamento local
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        toggleThemeBtn.textContent = "🌞"; // Sol no modo escuro
    } else {
        document.body.classList.remove("dark-mode");
        toggleThemeBtn.textContent = "🌙"; // Lua no modo claro
    }

    // Alternar entre modo escuro e claro
    toggleThemeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Alterar ícone conforme o modo
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeBtn.textContent = "🌞"; // Sol no modo escuro
            localStorage.setItem("darkMode", "true"); // Salvar a preferência do usuário
        } else {
            toggleThemeBtn.textContent = "🌙"; // Lua no modo claro
            localStorage.setItem("darkMode", "false"); // Salvar a preferência do usuário
        }
    });
});
