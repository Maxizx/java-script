//Variables//
var nombre=`Patricio`;
console.log(nombre);
console.log(typeof(nombre)) ///spring
 
var edad=15; ///numerico
console.log(edad);
edad =`veinte`;
console.log(edad); //pedir variable
var apodo=`Patito`;
console.log(apodo);
console.log(typeof(edad))
console.log(typeof(apodo))
/*
var tieneTrabajo= false; //boolean
var falso=`tiene trabajo?`;
console.log(falso);
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo))

var trabajo;
console.log(trabajo) //variable sin valor indefinidio
trabajo= null; //null
console.log(trabajo) 
*****************************************/

//  operaciones matematicas //
/*
var edadMaria, edadAna, diferencia;
var suma, yearMaria, yearAna, yearActual;

edadAna = 23;
edadMaria = 40;
yearActual = 2020;

diferencia = edadMaria - edadAna; //resta
suma = edadAna + edadMaria; //suma

yearMaria = yearActual - edadMaria;
yearAna = yearActual - edadAna;

console.log(diferencia);
console.log(suma);
console.log(`año de nacimiento de Ana` + yearAna);
console.log(`año de nacimiento de Maria` +yearMaria);
console.log(yearActual * 2) //multiplicacion
console.log(yearActual / 2) //division
************************************************************/
//logicos
/*
var edadMaria, edadAna;

edadAna = 23;
edadMaria = 40;

var mayor= !(edadAna > edadMaria);
console.log(mayor)
******************************/

//unarios, ++incremento, --decremento
/*
//edadMaria++
console.log(edadMaria--)
console.log(edadMaria)
**************************/

//asignacion, +=, -=, *=, /=, %=
/*
var a = 1;
var b = 2;

a += b
console.log(a)
********************/

//condicion if, else
/*
var nombre =`Patricio`;
var edad= 15;
var limite= 20;

//var puede= (edad > limite)

if (edad > limite) { 
    console.log(nombre + ` se casa`); 
} else {
    console.log(nombre + ` no se casa`);
}
*************************************************

if (soltero == true) {
    console.log(nombre + ` es soltero`);
} else {
    console.log(nombre + ` no es soltero`);
}
************************************************/

/*
AND (&&) true si todo es verdadero
OR (||) true si alguno es verdadero
NOT (!) invierte TRUE/FALSE
*/
 

//if que llaman a otros if
/*
var nombre= `Patricio`;
var edad= 15;

if (edad < 12){
    console.log(nombre + `ces un niño`);
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ` es un adolecente`);
} else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ` es un adulto`);
} else {
    console.log(nombre +  ` es un viejo`);
}
***************************************************/
/*
    sentencia switch

var mes = 2;

switch(mes){
    case 1:
        console.log(`enero`);
    break;

    case 2:
        console.log(`febrero`);
        break;

    case 3:
        console.log(`marzo`);
        break;

    default:
        console.log(`no se que mes me decis`)


}
*******************************************/

//bucle con estructura for
/*
for(var i=14; i >= 1; i--){
    console.log(i)
}
*/

//while
/***** 
var i = 1;
while (i <= 10){
    console.log(i);
    i++;
} 
*******/

//do while

/*var i= 1;
 
do{
    console.log(i)
    i++;
}while(i <=10){
    console.log(i);
   
}*/