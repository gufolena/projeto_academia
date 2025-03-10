document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const notificacoes = document.getElementById("notificacoes");
    const usernameSpan = document.getElementById("username");
    const closeNotificationBtn = document.getElementById("closeNotification");
    const toggleThemeBtn = document.getElementById("toggleTheme");

    const USERNAME_KEY = "username";
    const DARK_MODE_KEY = "darkMode";

    // Função para atualizar o nome do usuário
    function updateUsername(username) {
        usernameSpan.textContent = username;
    }

    // Função para exibir notificações
    function showNotifications(message) {
        notificacoes.textContent = message;
        notificacoes.style.display = "block";
    }

    // Função para fechar notificações
    function closeNotifications() {
        notificacoes.style.display = "none";
    }

    // Função para alternar o menu móvel
    function toggleMobileMenu() {
        mobileMenu.classList.toggle("hidden");
        const isExpanded = !mobileMenu.classList.contains("hidden");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    }

    // Função para aplicar o tema salvo
    function applySavedTheme() {
        const isDarkMode = localStorage.getItem(DARK_MODE_KEY) === "true";
        document.body.classList.toggle("dark-mode", isDarkMode);
        toggleThemeBtn.textContent = isDarkMode ? "🌞" : "🌙";
    }

    // Função para alternar o tema
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        toggleThemeBtn.textContent = isDarkMode ? "🌞" : "🌙";
        localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    }

    // Inicialização
    function init() {
        // Simulação de pegar o nome do usuário (pode vir do backend no futuro)
        const username = "João";
        updateUsername(username);

        // Remove a lógica de notificação
        closeNotificationBtn.addEventListener("click", closeNotifications);
        menuToggle.addEventListener("click", toggleMobileMenu);
        applySavedTheme();
        toggleThemeBtn.addEventListener("click", toggleTheme);
    }

    init();
});