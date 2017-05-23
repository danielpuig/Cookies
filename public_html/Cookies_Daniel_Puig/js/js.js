/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {

    var username = "";
    if (getCookie("nombre_usuario") !== "") {
        username = getCookie("nombre_usuario");
        document.getElementById('user').innerHTML = "Bienvenido, " + username;
    }

    var ul = document.createElement("UL");
    var li1 = document.createElement('LI');
    li1.innerHTML = "Valor máximo que puede tener un número en JavaScript: " + Number.MAX_VALUE;

    var li2 = document.createElement('LI');
    li2.innerHTML = "Valor mínimo que puede tener un número en JavaScript: " + Number.MIN_VALUE;

    var li3 = document.createElement('LI');
    li3.innerHTML = "Altura total de la pantalla: " + screen.height;

    var li4 = document.createElement('LI');
    li4.innerHTML = "Anchura total de la pantalla: " + screen.width;

    var li5 = document.createElement('LI');
    li5.innerHTML = "Altura de la página web: " + screen.availHeight;

    var li6 = document.createElement('LI');
    li6.innerHTML = "Anchura de la página web: " + screen.availWidth;

    var li7 = document.createElement('LI');
    li7.innerHTML = "URL de la página web: " + document.URL;

    var path = window.location.pathname;
    var page = path.split("/").pop();

    var li8 = document.createElement('LI');
    li8.innerHTML = "Nombre de la página web con su extensión: " + page;

    var li9 = document.createElement('LI');
    li9.innerHTML = "Un valor aleatorio entre 0 y 200: " + Math.floor((Math.random() * 200) + 0);

    var OSName = "Sistema operativo desconocido";
    if (navigator.appVersion.indexOf("Win") != -1) {
        OSName = "Windows";
    } else if (navigator.appVersion.indexOf("Mac") != -1) {
        OSName = "MacOS";
    } else if (navigator.appVersion.indexOf("X11") != -1) {
        OSName = "UNIX";
    } else if (navigator.appVersion.indexOf("Linux") != -1) {
        OSName = "Linux";
    }

    var li10 = document.createElement('LI');
    li10.innerHTML = "Sistema operativo del ordenador: " + OSName;

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);
    ul.appendChild(li9);
    ul.appendChild(li10);

    document.getElementById('listaPropiedades').appendChild(ul);

    document.getElementById("username").addEventListener("click", getUsername);

    function getUsername() {
        if (username == "") {
            username = prompt("Introduce tu nombre", "John Doe");
            setCookie("nombre_usuario", username, 5);
            document.getElementById('user').innerHTML = "Bienvenido, " + username;
        }
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    document.getElementById("title").addEventListener("click", title);

    function title() {
        var title = null;
        while (title === null || title === undefined || title === "") {
            title = prompt("Please enter the title ", null);
        }
        document.title = title.toUpperCase();
    }

    document.getElementById('getValues').addEventListener("click", getValues);

    function getValues() {
        var num1 = null;
        var num2 = null;
        var vals = null;
        while (num1 === null || num1 === undefined || num1 === ""
                || num2 === null || num2 === undefined || num2 === ""
                || vals === null || vals === undefined || vals === "") {

            vals = prompt('Inserta 2 valores separados "," entre 200 y 800', null);
            if (vals !== null) {
                var nums = vals.split(",");
                if (nums[0] !== null && nums[0] >= 200 && nums[0] < 800 && nums[0] < nums[1]) {
                    var num1 = nums[0];
                }
                if (nums[1] !== null && nums[1] > 200 && nums[1] <= 800 && nums[0] < nums[1]) {

                    var num2 = nums[1];
                }
            }
        }
        var ventanaSite = window.location.pathname.replace(page, "");
        var myWindow = window.open(ventanaSite + "ventana.html", "", "width=" + Math.floor((Math.random() * num2) + num1) + ", height=" + Math.floor((Math.random() * num2) + num1));
        console.log(num1);
        console.log(num2);
    }

    window.addEventListener("message", function (event) {
        alert("received: " + event.data);
    });

}