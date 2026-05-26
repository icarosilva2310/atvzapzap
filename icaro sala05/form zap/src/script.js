function enviarWhats() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;

    let mensagem =
`Olá!
Nome: ${nome}
Email: ${email}
WhatsApp: ${whatsapp}`;

    let numero = "5541999999999";

    let link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}