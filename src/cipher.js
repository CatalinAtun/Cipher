window.cipher = {
  encode: (offset, text) => { // agregar 2 parámetros. texto y desplazamiento
    offset=parseInt(offset);
    let result = '';
  for (let i=0; i<text.length; i++){
    let letterAscii=text[i].charCodeAt();
    if (letterAscii >= 65 && letterAscii <= 90 ) {
      let letterConverted=(letterAscii-65+offset)%26+65; 
      result += String.fromCharCode(letterConverted);
    }else if (letterAscii >= 97 && letterAscii <= 122 ) {
      let letterConverted=(letterAscii-97+offset)%26+97; 
      result += String.fromCharCode(letterConverted);
    }else{
      result += text[i]
    }
    }
    return result;
},
// ME PITIÉ EL CODIGO CONCHALALORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 03-12-2018

  decode: (offset, text) => { // agregar 2 parámetros. texto y desplazamiento
    offset=parseInt(offset);
      let result = '';
      for (let i=0; i<text.length; i++){
        let letterAscii=text[i].charCodeAt();
        if (letterAscii >= 65 && letterAscii <= 90 ) {
          let letterConverted=(letterAscii-65-offset)%26+65;
          if (letterConverted<65){
            letterConverted+=26;
          }
          result += String.fromCharCode(letterConverted);
        }else if (letterAscii >= 97 && letterAscii <= 122 ) {
          let letterConverted=(letterAscii-97-offset)%26+97;
          if (letterConverted<97){
            letterConverted+=26;
          }
          result += String.fromCharCode(letterConverted);
        }else{
          result += text[i]
        }
        
        }
        return result;
    }
  };