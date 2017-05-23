/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {
    test();

    setTimeout(function () {

        if (getCookie("nombre_usuario") !== "") {
            var username = getCookie("nombre_usuario");
            document.getElementById('welcome').innerHTML = "Bienvenido, " + username;
        }
        
        var d = new Date();
        
        var hora = d.getHours();
        
        if(hora>=6 && hora<=14) {
            document.getElementById('hour').innerHTML = "Buenos dias";
        }else if(hora>14 && hora<20) {
            document.getElementById('hour').innerHTML = "Buenas tardes";
        }else {
            document.getElementById('hour').innerHTML = "Buenas noches";
        }

    }, 5000);
    
    document.getElementById("counterBTN").addEventListener("click", count);
    
    var running = false;
    function count() {
        if (running == false) {
            var i = 0;
            running = true;
            interval = setInterval(function () {
                document.getElementById('counter').innerHTML = i;
                i++;
            }, 1000);
        }else {
            clearInterval(interval);
            running = false;
        }
    }
    
    document.getElementById("username").addEventListener("click", setName);
    
    function setName() {
        if (getCookie("nombre_usuario") !== "") {
            var username = getCookie("nombre_usuario");
            document.getElementById('name').innerHTML = username;
        }
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
    
}