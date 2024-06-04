let año = prompt("Ingrese el año de su auto");
año = parseInt(año);

let precio;

if (año >= 2000 && año <= 2010) {
    precio = 1000;
} else if (año > 2010 && año <= 2020) {
    precio = 3000;
} else {
    precio = "No tenemos para ese auto";
}
alert("El precio de su auto es: " + precio);