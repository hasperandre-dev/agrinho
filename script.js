// Mensagem de boas-vindas dinâmica baseada no horário
document.addEventListener("DOMContentLoaded", () => {
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora < 12) {
        saudacao = "Bom dia! Bem-vindo ao Projeto Agrinho 🌱";
    } else if (hora < 18) {
        saudacao = "Boa tarde! Que tal aprender mais sobre o campo hoje? ☀️";
    } else {
        saudacao = "Boa noite! Sustentabilidade não para. 🌙";
    }

    console.log(saudacao); // Mostra no console do navegador
});

// Função para o botão de "Saber Mais"
function mostrarMensagem() {
    alert("O Agrinho ajuda a transformar a educação básica, unindo o campo e a cidade para um futuro melhor!");
}
