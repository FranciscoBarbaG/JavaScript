var anyoActual, anyoInicial, interval;
const CRONO = 5;
const HORAXANYO = 8760;

iniciarlizar();

function iniciarlizar() {
    iniciarNumeros();
    iniciarFecha();
    iniciarCuentaAtras();
    iniciarBoton();
}

function iniciarNumeros() {
    document.forms[0].elements[0].value=parseInt(Math.random()*100)+1;
    document.forms[0].elements[1].value=parseInt(Math.random()*100)+1;
    document.forms[0].elements[2].value=parseInt(Math.random()*100)+1;
}

function iniciarFecha() {
    anyoActual = (new Date()).getFullYear();
    anyoInicial = parseInt(Math.random()*(anyoActual-1970))+1970;
    document.forms[0].elements[4].value=anyoInicial;
}

function iniciarCuentaAtras() {
    document.forms[0].elements[6].value=CRONO;
    interval = setInterval(function(){
        if (document.forms[0].elements[6].value != 0) {
            document.forms[0].elements[6].value--;
        } else {
            var w = open("", "", "height=100, width=300, top=10000, left=10000");
            w.document.write('¡¡¡LA BOMBA HA EXPLOTADO!!!');
            clearInterval(interval);
        }
    }, 1000);
}

function iniciarBoton() {
    document.forms[0].elements[7].value="Parar";
    document.forms[0].elements[7].onclick=parar;
}

function parar() {
    clearInterval(interval);
    var w = open("", "", "height=100, width=300, top=10000, left=10000");
    var respuestas = 0;
    if (document.forms[0].elements[0].value == document.forms[0].elements[3].value ||
        document.forms[0].elements[1].value == document.forms[0].elements[3].value ||
        document.forms[0].elements[2].value == document.forms[0].elements[3].value) {
            respuestas++;
    }
    if ((anyoActual-anyoInicial)*HORAXANYO==document.forms[0].elements[5].value) {
        respuestas++;
    }
    w.document.write(`Has tardado ${CRONO-document.forms[0].elements[6].value} segundos.<br><br>
        El numero de respuestas acertadas ha sido: ${respuestas}`);

    document.forms[0].elements[7].onclick="";
}
