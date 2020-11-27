class CalculadoraRPN {

    constructor() {
        this.pila = new Array();
    }

    get input() {
        return document.querySelector('.result');
    }

    get output(){
        return document.getElementById("pantallaAuxiliar");
    }

    division() {
        if (this.checkSize(2)) {
			var divisor = this.pila.pop();
			var dividendo = this.pila.pop();
            this.output.value = parseFloat(dividendo) / parseFloat(divisor);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    multiplicacion() {
        if (this.checkSize(2)) {
			var factor2 = this.pila.pop();
			var factor1 = this.pila.pop();
            this.output.value = parseFloat(factor1) * parseFloat(factor2);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    resta() {
        if (this.checkSize(2)) {
			var operando2 = this.pila.pop();
			var operando1 = this.pila.pop();
            this.output.value = parseFloat(operando1) - parseFloat(operando2);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    suma() {
        if (this.checkSize(2)) {
			var operando2 = this.pila.pop();
			var operando1 = this.pila.pop();
            this.output.value = parseFloat(operando1) + parseFloat(operando2);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    digitos(valor) {
        this.input.value += valor.toString();
    }

    punto() {
        this.input.value += ".";
    }

    borrar() {
        this.input.value = "";
        this.output.value = "";
        this.clear();
    }

    borrarUno(){
        this.input.value = this.input.value.substring(0, this.input.value.length - 1);
    }

    potencia() {
        if (this.checkSize(2)) {
			var operando2 = this.pila.pop();
			var operando1 = this.pila.pop();
            this.output.value = parseFloat(operando1) ^ parseFloat(operando2);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    sin() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.sin(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    cos() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.cos(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    tan() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.tan(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }
    arcSin() {
        if (this.checkSize(1)) {
            var num = this.pila.pop();
            this.output.value = Math.asin(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    arcCos() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.acos(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    arcTan() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.atan(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    raiz() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.sqrt(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    log() {
        if (this.checkSize(1)) {
			var num = this.pila.pop();
            this.output.value = Math.log(num);
            this.input.value = "";
            this.pila.push(this.output.value);
		}
    }

    exp() {
        if (this.checkSize(1)) {
            var num = this.pila.pop();
            this.output.value = Math.exp(num);
            this.input.value = "";
            this.pila.push(this.output.value);
        }
    }

    enter() {
        this.output.value += " " + this.input.value;
        this.pila.push(this.input.value);
		this.input.value = "";
    }

    clear() {
		this.pila = new Array();
    }
    
    checkSize(size) {
		return size == this.pila.length;
	}
}

//script
var calc = new CalculadoraRPN();