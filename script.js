document.getElementById('mensagemBtn').addEventListener('click', function() {
    const mensagens = [
        "A persistência é o caminho do êxito!",
        "Programadores e artistas são os únicos profissionais que têm como hobby a própria profissão.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende.",
        "O ontem já é história, o amanhã é um mistério, mas hoje é uma dádiva. Por isso se chama presente!"
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('mensagem').textContent = mensagemAleatoria;
});