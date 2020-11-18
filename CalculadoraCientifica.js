class CalculadoraBasica {
    constructor() {
        this.screen = "";
        this.memory = "";
    }

    mrc() {
        if (this.screen == "") {
            this.screen = this.memory;
        } else {
            try {
                this.memory = eval(this.screen);
                this.screen = "";
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    mMas() {
        if (this.screen != "") {
            try {
                this.memory = eval(this.memory + eval(this.screen));
                this.screen = "";
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    mMenos() {
        if (this.screen != "") {
            try {
                this.memory = eval(this.memory - eval(this.screen));
                this.screen = "";
            } catch (err) {
                this.screen = "Error = " + err;
            }
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
        if (this.screen != "") {
            try {
                this.screen = eval(this.screen);
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
}
class CalculadoraCientifica extends CalculadoraBasica {

    constructor() {
        super();
        this.pi = Math.PI;
        this.e = Math.E;
        this.innerScreen = "";
        this.waitingForPowerParenthesis = 0;
    }

    cuadrado() {
        try {
            this.screen = eval("Math.pow(" + eval(this.innerScreen) + ",2)");
            this.innerScreen = this.screen;
        } catch (error) {
            this.screen = "Error = " + error;
        }
        document.getElementById("textoPantalla").value = this.innerScreen;
    }
    potencia() {
        try {
            this.innerScreen = "Math.pow((" + eval(this.screen) + "),"
            this.screen += "^";
            this.waitingForPowerParenthesis += 1;
        } catch (err) {
            this.screen = "Error = " + err;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    sin() {
        try {
            this.screen = eval("Math.sin(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }

    cos() {
        try {
            this.screen = eval("Math.cos(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }

    tan() {
        try {
            this.screen = eval("Math.tan(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }

    arcSin() {
        try {
            this.screen = eval("Math.asin(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    arcCos() {
        try {
            this.screen = eval("Math.acos(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    arcTan() {
        try {
            this.screen = eval("Math.atan(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    log() {
        try {
            this.screen = eval("Math.log(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    exp() {
        try {
            this.screen = eval("Math.exp(" + eval(this.innerScreen) + ")");
            this.innerScreen = screen;
        } catch (error) {
            this.screen = "Error =" + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }

    abrirParentesis() {
        this.screen += "(";
        this.innerScreen += "(";
        document.getElementById("textoPantalla").value = this.screen;
    }
    cerrarParentesis() {
        this.screen += ")";
        this.innerScreen += ")";
        document.getElementById("textoPantalla").value = this.screen;
    }
    modulo() {
        try {
            var aux = eval(this.innerScreen);
            if (aux < 0) {
                this.screen = eval(aux + "/-1");
            }
            else { 
                this.screen = aux; 
            }
            this.innerScreen = this.screen;
        } catch (err) {
            this.screen = "Error = " + err;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    raiz() {
        try {
            this.screen = eval("Math.sqrt(" + eval(this.innerScreen) + ")");
            this.innerScreen = this.screen;
        } catch (error) {
            this.screen = "Error = " + error;
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    potenciaDeDiez() {
        try {
            this.screen = eval("Math.pow(10," + eval(this.innerScreen) + ")");
            this.innerScreen = this.screen;
        } catch (error) {
            this.screen = "Error = " + error;
        }
        document.getElementById("textoPantalla").value = this.innerScreen;
    }
    invertirSigno(){
        this.innerScreen = eval(this.innerScreen); 
        this.innerScreen = eval(this.innerScreen + "/-1");
        this.screen = this.innerScreen;
        document.getElementById("textoPantalla").value = this.innerScreen;
    }
    invertirFraccion(){
        this.innerScreen = eval(this.innerScreen);
        this.innerScreen = eval("1/"+ this.innerScreen)
        this.screen = this.innerScreen;
        document.getElementById("textoPantalla").value = this.innerScreen;
    }
    digitos(digito) {
        super.digitos(digito);
        this.innerScreen += digito;
        if (this.waitingForPowerParenthesis > 0) {
            this.innerScreen += ")";
            this.waitingForPowerParenthesis -= 1;
        }
    }
    igual() {
        if (this.innerScreen != "") {
            try {
                this.screen = eval(this.innerScreen);
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    escribirPi(){
        this.screen += "π";
        this.innerScreen += this.pi;
        document.getElementById("textoPantalla").value = this.screen;
    }
    escribirE(){
        this.screen += "e";
        this.innerScreen += this.e;
        document.getElementById("textoPantalla").value = this.screen;
    }
    borrarUno(){
        this.screen = this.screen.substring(0, this.screen.length - 1);
        this.innerScreen = this.innerScreen.substring(0, this.innerScreen.length - 1);
        document.getElementById("textoPantalla").value = this.screen;
    }
    borrar() {
        super.borrar();
        this.innerScreen = "";
    }
    suma(){
        super.suma();
        this.innerScreen += "+"
    }
    resta(){
        super.resta();
        this.innerScreen += "-"
    }
    multiplicacion(){
        super.multiplicacion();
        this.innerScreen += "*"
    }
    division(){
        super.division();
        this.innerScreen += "/"
    }
    punto(){
        super.punto();
        this.innerScreen += ".";
    }
    mrc() {
        if (this.innerScreen == "") {
            this.innerScreen = this.memory;
            this.screen = this.memory;
        } else {
            try {
                this.memory = eval(this.innerScreen);
                this.innerScreen = "";
                this.screen = "";
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    mMas() {
        if (this.innerScreen != "") {
            try {
                this.memory = eval(this.memory + eval(this.innerScreen));
                this.innerScreen = "";
                this.screen ="";
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
    mMenos() {
        if (this.innerScreen != "") {
            try {
                this.memory = eval(this.memory - eval(this.innerScreen));
                this.innerScreen = "";
                this.screen = "";
            } catch (err) {
                this.screen = "Error = " + err;
            }
        }
        document.getElementById("textoPantalla").value = this.screen;
    }
}
var calc = new CalculadoraCientifica();