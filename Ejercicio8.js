class Meteo {

    constructor() {
        this.apikey = "2239a67ac65f917c646cd91f88f9e42d";
        this.tipo = "&mode=json";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>";
    }

    tiempo(ciudad, id) {
        this.url += ciudad + this.tipo + this.unidades +
            this.idioma + "&APPID=" + this.apikey;
        this.cargarJson(this.url, ciudad);
        $(id).hide();
    }

    cargarJson(urlSitio, ciudad) {
        $.ajax({
            dataType: "json",
            url: urlSitio,
            method: 'GET',
            success: function (datos) {
                var content = "<img src=\"http://openweathermap.org/img/w/" +
                    datos.weather[0].icon + ".png\" alt=Tiempo>" +
                    "<ul><li>País: " + datos.sys.country + "</li>" +
                    "<li>Coordenadas: " + datos.coord.lon + ", " + datos.coord.lat + "</li>" +
                    "<li>Tiempo: " + datos.weather[0].main + "," + datos.weather[0].description + "</li>" +
                    "<li>Temperatura: " + datos.main.temp + "ºC</li>" +
                    "<li>Temperatura mínima: " + datos.main.temp_min + "ºC</li>" +
                    "<li>Temperatura máxima: " + datos.main.temp_max + "ºC</li>" +
                    "<li>Humedad: " + datos.main.humidity + "%</li>" +
                    "<li>Presión: " + datos.main.pressure + "hPa</li>" +
                    "<li>Visibilidad: " + datos.visibility + "</li>" +
                    "<li>Velocidad del viento: " + datos.wind.speed + "m/s</li>" +
                    "<li>Dirección del viento: " + datos.wind.deg + "grados</li>" +
                    "<li>Nubosidad: " + datos.clouds.all + "%</li>" +
                    "<li>Amanecer: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>" +
                    "<li>Atardecer: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li></ul>";
                $("#" + ciudad).html(content);
            },
            error: function () {
                $("#" + ciudad).html("<p>¡Tenemos problemas! No podemos obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a></p>");
            }
        });

    }

}

var meteo = new Meteo();