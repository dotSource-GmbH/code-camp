function farbeWechseln(id) {
    var farbWahl;

    // Die richtige Farbe wählen
    switch (id) {
        case "icon-schwarz": farbWahl = "body-schwarz"; break;
        case "icon-blau": farbWahl = "body-blau"; break;
        case "icon-gruen": farbWahl = "body-gruen"; break;
        case "icon-gelb": farbWahl = "body-gelb"; break;
        default: break;
    }

    // Die Farbe vom "<body>" anpassen 
    var body = document.querySelector("body");
    body.classList.remove("body-schwarz", "body-blau", "body-gruen", "body-gelb");
    body.classList.add(farbWahl);
}