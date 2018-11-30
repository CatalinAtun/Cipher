window.onload =() => {
    // codificar
    const button = document.getElementById('encode');
    buttonStart.addEventListener('click', ()=> {
        let menssage = document.getElementById('encrypt').value;
        let displacement = document.getElementById('displacement').value;
        document.getElementById("descrypt").value= window.cipher.encode(displacement, menssage);
        return window.cipher.encode(displacement, menssage);



    })

    //decodificar
    const button2 = document.getElementById('decode');
    buttonStart2.addEventListener('click', ()=> {
        let menssage = document.getElementById('descrypt').value;
        let displacement = document.getElementById('displacement').value;
        document.getElementById("encrypt").value= window.cipher.decode(displacement, menssage); // si se pone innerHTML en vez de value, no se puede apretar 2 veces el boton cifrar/descifrar porque no pescaaaaa
        return window.cipher.decode(displacement, menssage);



    })

}