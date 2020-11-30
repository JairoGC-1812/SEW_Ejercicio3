class CalculadoraAgua {
    constructor() {
        this.total = 0;
        this.error = false;
    }
    mostrarMinutosDucha(valor) {
        if (valor == "Ducha") {
            document.getElementById("minutosducha").style.display = "block";
        } else {
            document.getElementById("minutosducha").style.display = "none";
        }
    }
    mostrarGrifo(valor) {
        if (valor == "Sí") {
            document.getElementById("grifo").style.display = "none";
            document.getElementById("vecesLavavajillas").style.display = "block";
        } else {
            document.getElementById("grifo").style.display = "block";
            document.getElementById("vecesLavavajillas").style.display = "none";
        }
    }
    mostrarResultados() {
        document.getElementById("resultados").innerText = "";
        this.total = 0;
        this.error = false;
        var a = document.getElementsByName("tipodebaño");
        var resultados = "";
        if (a[0].checked) {
            resultados += this.resultadosDucha();
        } else {
            resultados += this.resultadosBanera();
        }
        resultados += this.resultadosInodoro();
        resultados += this.resultadosDientes();
        resultados += this.resultadosManos();
        resultados += this.resultadosCara();
        resultados += this.resultadosBeber();
        a = document.getElementsByName("lavavajillas");
        if (a[0].checked) {
            resultados += this.resultadosLavavajillas();
        } else {
            resultados += this.resultadosAMano();
        }
        resultados += this.resultadosLavadora();
        resultados += this.resultadosFregona();
        resultados += "Total de litros/día = " + this.total;
        document.getElementById("resultados").innerText = resultados;

    }
    resultadosFregona() {
        var veces = Number(document.getElementById("fregona").value);

        this.manejarError(veces, 0);
        var res = (veces * 5)
        this.total += res;        
        return "Su consumo de agua para fregar el suelo " + res + "litros al día.\n";
    }
    resultadosLavadora() {
        var veces = Number(document.getElementById("lavadoras").value);

        this.manejarError(veces, 0);
        var res = (veces * 50)
        this.total += res;
        
        return "Su consumo de agua en la lavadora es de " + res + "litros al día.\n";
    }
    resultadosLavavajillas(){
        var veces = Number(document.getElementById("vecesLava").value);

        this.manejarError(veces, 0);
        var res = (veces * 10);
        this.total += res;
        return "Su consumo de agua en el lavavajillas es de " + res + "litros al día.\n";
    }
    resultadosAMano() {
        var veces = Number(document.getElementById("vecesGrifo").value);
        this.manejarError(veces, 0);
        var a = document.getElementsByName("grifoAbierto");
        var res;
        if(a[0].checked){
            res = veces * 100;
        }else{
            res = veces * 50;
        }
        this.total += res;
        return "Su consumo de agua al fregar los platos es de " + res + "litros al día.\n";
    }
    resultadosBeber() {
        var a = document.getElementsByName("beber");
        if (a[0].checked) {
            return "";
        }
        return "Su consumo de agua para beber es de 2 litros al día.\n"

    }
    resultadosCara() {
        var veces = Number(document.getElementById("cara").value);

        this.manejarError(veces, 0);
        var res = (veces * 4)
        this.total += res;
        return "Su consumo de agua al lavarse la cara es de " + res + "litros al día.\n"
    }
    resultadosManos() {
        var veces = Number(document.getElementById("manos").value);

        this.manejarError(veces, 0);
        var res = (veces * 4)
        this.total += res;
        return "Su consumo de agua al lavarse las manos es de " + res + "litros al día.\n"
    }
    resultadosDientes() {
        var veces = Number(document.getElementById("dientes").value);

        this.manejarError(veces, 0);
        var res = (veces * 3)
        this.total += res;
        return "Su consumo de agua al lavarse los dientes es de " + res + "litros al día.\n"
    }
    resultadosInodoro() {
        var veces = Number(document.getElementById("inodoro").value);

        this.manejarError(veces, 0);
        var res = (veces * 10)
        this.total += res;
        return "Su consumo de agua en el inodoro es de " + res + "litros al día.\n"
    }
    resultadosDucha() {
        var veces = Number(document.getElementById("vecesporsemana").value);
        var minutos = Number(document.getElementById("tiempoducha").value);

        this.manejarError(veces, minutos);
        var res = (veces * minutos * 20) / 7;
        this.total += res;
        return "Su consumo de agua en la ducha es de " + res + " litros al día.\n"

    }

    resultadosBanera() {
        var veces = Number(document.getElementById("vecesporsemana").value);

        this.manejarError(veces, 0);
        var res = (veces * 230) / 7
        this.total += res;
        return "Su consumo de agua en la bañera es de " + res + "litros al día.\n"
    }

    manejarError(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById("mensajedeerror").style.display = "block";
            document.getElementById("resultados").style.display = "none";
            this.error = true;
        } else if(!this.error){
            document.getElementById("mensajedeerror").style.display = "none";
            document.getElementById("resultados").style.display = "block";
        }
    }


}
var calc = new CalculadoraAgua();