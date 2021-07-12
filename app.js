function llamarNumero() {
    // Compruebo si existe la Key en el localStorage y si no, la genero primeramente. 
    let numerosLlamados = localStorage.getItem('numerosLlamados')
    if (!numerosLlamados) {
        localStorage.setItem('numerosLlamados', JSON.stringify([]))
        return;
    }

    let nuevoNumero = Math.floor(Math.random() * (75) + 1)
    numerosLlamados = JSON.parse(numerosLlamados)

    if (numerosLlamados.includes(nuevoNumero)) {
        numerosLlamados.length == 75 ? console.log('Todos los números ya estan presentes') : console.log(`El numero ${nuevoNumero} ya fue llamado`);
    } else {
        localStorage.setItem('numerosLlamados', JSON.stringify([...numerosLlamados, nuevoNumero]))
        console.log(`Se llama al numero ${nuevoNumero}`);
    }
}

llamarNumero()
