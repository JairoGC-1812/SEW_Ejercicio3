class Ejercicio7{
    constructor(){
        this.ocultado = false;
        this.jQuer
    }
    ocultar(prueba){
        $(prueba).hide();
        this.ocultado = true;
    }
    mostrar(prueba){
        this.ocultado = false;
        $(prueba).show();
    }
    ocultarOMostrar(prueba){
        if(this.ocultado){
            this.mostrar(prueba)
        } else{
            this.ocultar(prueba);
        }
    }
    modificar(prueba){
        $(prueba).text($("#campoparamodificar").val());
    }

    anadirDetras(prueba, etiqueta){
        $(prueba).after("<" + etiqueta + ">" + $("#campoparaanadir").val() + "</" + etiqueta + ">")
    }
    anadirDelante(prueba,etiqueta){
        $(prueba).before("<" + etiqueta + ">" + $("#campoparaanadir").val() + "</" + etiqueta + ">")
    }

    eliminarTodos(etiqueta){
        $(etiqueta).remove();
    }

    mostrarEtiquetas(){
        $("*", document.body).each(function(){
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "))
        })
    }

    sumarPrecio(){
        var total = 0.0;
        $(".price").each(function(){
            total += parseFloat($(this).text());
        })
        $("#res").text(total);
    }
}

var ej = new Ejercicio7();