function llamarNumero() {
    // Compruebo si existe la Key en el localStora y si no, la genero primeramente. 
    let numerosLlamados = localStorage.getItem('numerosLlamados')
    if (!numerosLlamados) {
        localStorage.setItem('numerosLlamados', JSON.stringify([]))
        return;
    }

    let nuevoNumero = Math.floor(Math.random() * (75) + 1)
    numerosLlamados = JSON.parse(numerosLlamados)

    if (numerosLlamados.includes(nuevoNumero)) {
        console.log(`El numero ${nuevoNumero} ya fue llamado`);
    } else {
        localStorage.setItem('numerosLlamados', JSON.stringify([...numerosLlamados, nuevoNumero]))
        console.log(`Se llama al numero ${nuevoNumero}`);
    }
}

llamarNumero()