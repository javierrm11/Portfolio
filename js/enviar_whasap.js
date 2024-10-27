function enviarWhatsApp(form) {
    const nombre = form.nombre.value;
    const numero = form.numero.value;
    const asunto = form.asunto.value;
    const mensaje = form.mensaje.value;

    const numeroWhatsApp = '34611434736';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
        `Hola, soy ${nombre}. Mi número es ${numero}. Asunto: ${asunto}. Mensaje: ${mensaje}`
    )}`;

    window.open(url, '_blank');
    return false; 
}