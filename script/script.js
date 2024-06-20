
function tasacion(){
   
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


}
 function experiencia() {
    for( let i = 0 ; i <= 0 ; i = i + 1)
        prompt("Desea que nos pongamos en contacto?")
        prompt("Deje su telefono aqui")
        alert("Gracias")
   
 }

 tasacion();
 experiencia();



 let año = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

 for( let i = 0 ; i <= año.length ; i = i + 1){
       
        alert("Tipo de año vehiculo que se reciben: " + año[i])
 }