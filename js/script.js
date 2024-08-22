function encriptar(){
    let textarr = document.getElementById("texta").value;
    //alert('Encriptar' + textarr);
    let sidebarInfo = document.getElementById("sidebar_info");
    let siderbarEncript = document.getElementById("sidebar_desenc");

    let text_desenc_right = document.getElementById("sidebar_desenc__text-a");
    let copy_button = document.getElementById("copy-button");

    let textareaHTML = document.getElementById("texta");
    let textareaEncript = document.getElementById("sidebar_desenc__text-a");

    let imagen_sidebar = document.getElementById("muneco");
    let texto_sidebar = document.getElementById("texto-sidebar");
    let subtexto_sidebar = document.getElementById("sub-texto-sidebar");


    let sepcial_chars = textarr.replace(/[.*+\-?^${}()!|[\]\\]/g, "\\$&");
    let textEncript = textarr;

    if(textEncript == ""){
        alert("Texto vacio");
    }
    else if(textEncript !== sepcial_chars){
        alert("No debe contener caracteres especiales");
    }
    else if(textEncript !== textEncript.toLowerCase()){
        alert("Solo minusculas");
    }
    else{
        textEncript = textarr
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        textareaHTML.placeholder = "";
        textareaHTML.value = textEncript;

        textareaEncript.value = textEncript;

        textareaEncript.style.backgroundImage = "none";

        textareaHTML.value = '';

        textareaHTML.placeholder = 'Ingrese texto aqui';

        copy_button.style.display = 'inline';
        //copy_button.style.display = 'flex';

        //imagen_sidebar.style.display = 'none';
        texto_sidebar.style.display = 'none';
        subtexto_sidebar.style.display = 'none';

    }

    textareaEncript.style.display = 'inline'; 
    textareaEncript.style.display = 'flex';
   
}
function desencriptar(){
    let textarr = document.getElementById("texta").value;
    //alert('Encriptar' + textarr);
    let textareaHTML = document.getElementById("texta");

    // nuevo
    let textareaDesEncript = document.getElementById("sidebar_desenc__text-a");
    let copy_button = document.getElementById("copy-button");

    let sepcial_chars = textarr.replace(/[.*+\-?^${}()!|[\]\\]/g, "\\$&");
    let textEncript = textarr;

    let texto_sidebar = document.getElementById("texto-sidebar");
    let subtexto_sidebar = document.getElementById("sub-texto-sidebar");


    if(textEncript == ""){
        alert("Texto vacio");
    }
    else if(textEncript !== sepcial_chars){
        alert("No debe contener caracteres especiales");
    }
    else if(textEncript !== textEncript.toLowerCase()){
        alert("Solo minusculas");
    }
    else{

        textEncript = textarr

        
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        textareaHTML.placeholder = "";
        textareaHTML.value = textEncript;

        textareaDesEncript.value = textEncript;

        textareaHTML.value = '';

        textareaHTML.placeholder = 'Ingrese texto aqui';

        texto_sidebar.style.display = 'none';
        subtexto_sidebar.style.display = 'none';

        copy_button.style.display = 'inline';
    }
        //copy_button.style.display = "none";
   
}

function copy(){

    let textareaDesEncript = document.getElementById("sidebar_desenc__text-a");
    let texto_sidebar = document.getElementById("texto-sidebar");
    let subtexto_sidebar = document.getElementById("sub-texto-sidebar");
    let copyButton = document.getElementById("copy-button");
    
    textareaDesEncript.select();

    textareaDesEncript.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textareaDesEncript.value);

    //textareaDesEncript.value = '';

    /*
    texto_sidebar.style.display = 'inline';
    subtexto_sidebar.style.display = 'inline';
    copyButton.style.display = 'none';*/
    //alert('El texto copiado es ' + textareaDesEncript.value);

}