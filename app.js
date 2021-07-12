function llamarNumero() {
    // Compruebo si existe la Key en el localStorage y si no, la genero primeramente. 
    let numerosLlamados = localStorage.getItem('numerosLlamados')
    if (!numerosLlamados) {
        localStorage.setItem('numerosLlamados', JSON.stringify([]))
        return;
    }

    // Genero un numero aleatorio entre 1 y 75
    let nuevoNumero = Math.floor(Math.random() * (75) + 1)
    // Recupero los datos del localStorage pasandolos a json
    numerosLlamados = JSON.parse(numerosLlamados)

    // Compruebo si el numero nuevo existe y si no, lo guardo en localStorage
    if (numerosLlamados.includes(nuevoNumero)) {
        numerosLlamados.length == 75 ? console.log('Todos los números ya estan presentes') : console.log(`El numero ${nuevoNumero} ya fue llamado`);
    } else {
        localStorage.setItem('numerosLlamados', JSON.stringify([...numerosLlamados, nuevoNumero]))
        console.log(`Se llama al numero ${nuevoNumero}`);
    }
}

llamarNumero()