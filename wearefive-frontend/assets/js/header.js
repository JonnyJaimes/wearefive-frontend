function createNode() {
    var e_0 = document.createElement("header");
    e_0.setAttribute("id", "header");
    var e_1 = document.createElement("h1");
    var e_2 = document.createElement("a");
    e_2.setAttribute("href", "index.html");
    e_2.appendChild(document.createTextNode("WE ARE FIVE"));
    e_1.appendChild(e_2);
    e_1.appendChild(document.createTextNode("   by   MOLINA VERGEL"));
    e_0.appendChild(e_1);
    var e_3 = document.createElement("nav");
    e_3.setAttribute("id", "nav");
    var e_4 = document.createElement("ul");
    var e_5 = document.createElement("li");
    var e_6 = document.createElement("a");
    e_6.setAttribute("href", "index.html");
    e_6.appendChild(document.createTextNode("Inicio"));
    e_5.appendChild(e_6);
    e_4.appendChild(e_5);
    var e_7 = document.createElement("li");
    var e_8 = document.createElement("a");
    e_8.setAttribute("href", "catalogo.html");
    e_8.appendChild(document.createTextNode("Catalogo"));
    e_7.appendChild(e_8);
    e_4.appendChild(e_7);
    var e_9 = document.createElement("li");
    var e_10 = document.createElement("a");
    e_10.setAttribute("href", "#one");
    e_10.appendChild(document.createTextNode("Contactanos"));
    e_9.appendChild(e_10);
    e_4.appendChild(e_9);
    var e_11 = document.createElement("li");
    var e_12 = document.createElement("a");
    e_12.setAttribute("href", "Login_registrer.html");
    e_12.setAttribute("class", "button");
    e_12.appendChild(document.createTextNode("Iniciar Sesión"));
    e_11.appendChild(e_12);
    e_4.appendChild(e_11);
    var e_13 = document.createElement("li");
    var e_14 = document.createElement("a");
    e_14.setAttribute("href", "registrar-zapato.html");
    e_14.appendChild(document.createTextNode("AGREGAR ZAPATO"));
    e_13.appendChild(e_14);
    e_4.appendChild(e_13);
    var e_15 = document.createElement("li");
    var e_16 = document.createElement("a");
    e_16.setAttribute("href", "registrar-qa.html");
    e_16.appendChild(document.createTextNode("AGREGAR QA"));
    e_15.appendChild(e_16);
    e_4.appendChild(e_15);
    var e_17 = document.createElement("li");
    var e_18 = document.createElement("div");
    e_18.setAttribute("id", "ctn-bars-search");
    var e_19 = document.createElement("input");
    e_19.setAttribute("type", "text");
    e_19.setAttribute("id", "inputSearch");
    e_19.setAttribute("placeholder", "¿Qué deseas buscar?");
    e_18.appendChild(e_19);
    e_17.appendChild(e_18);
    var e_20 = document.createElement("div");
    e_20.setAttribute("id", "cover-ctn-search");
    e_17.appendChild(e_20);
    e_4.appendChild(e_17);
    e_3.appendChild(e_4);
    e_0.appendChild(e_3);
    return e_0;
    }