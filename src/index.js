window.onload =() => {
    // codificar
    document.getElementById("buttonStart").addEventListener('click', ()=> {
        let message = document.getElementById('encrypt').value;
        let displacement = document.getElementById('displacement').value;
        document.getElementById("descrypt").value= window.cipher.encode(displacement, message);
        return window.cipher.encode(displacement, message);



    })

    // decodificar
    document.getElementById("buttonStart2").addEventListener('click', ()=> {
        let message = document.getElementById('descrypt').value;
        let displacement = document.getElementById('displacement').value;
        document.getElementById("encrypt").value= window.cipher.decode(displacement, message); // si se pone innerHTML en vez de value, no se puede apretar 2 veces el boton cifrar/descifrar porque no pescaaaaa
        return window.cipher.decode(displacement, message);



    })

}