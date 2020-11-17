class CalculadoraBasica {
    constructor() {
        this.screen = "";
        this.memory = "";
    }

    mrc() {
        if (this.screen == "") {
            this.screen = this.memory;
        } else {
            this.memory = eval(this.screen);
            this.screen = "";
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    mMas() {
        if (this.screen != "") {
            this.memory = eval(this.memory + eval(this.screen));
            this.screen = "";
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    mMenos() {
        if (this.screen != "") {
            this.memory = eval(this.memory - eval(this.screen));
            this.screen = "";
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    division() {
        this.screen += "/";
        document.getElementById("textoPantalla").value = this.screen;
    }
    multiplicacion() {
        this.screen += "*";
        document.getElementById("textoPantalla").value = this.screen;
    }
    resta() {
        this.screen += "-";
        document.getElementById("textoPantalla").value = this.screen;
    }
    suma() {
        this.screen += "+";
        document.getElementById("textoPantalla").value = this.screen;
    }
    digitos(digito) {
        this.screen += digito;
        document.getElementById("textoPantalla").value = this.screen;
    }
    punto() {
        this.screen += ".";
        document.getElementById("textoPantalla").value = this.screen;
    }
    borrar() {
        this.screen = "";
        document.getElementById("textoPantalla").value = this.screen;
    }
    igual() {
        if (screen != "")
            this.screen = eval(this.screen);
        document.getElementById("textoPantalla").value = this.screen;;
    }

}
var calc = new CalculadoraBasica();