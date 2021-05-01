var Nombre = 'Patricio';
console.log(Nombre);
console.log(typeof(Nombre));

var year = 2021;

var edad = 16;
console.log(edad);
console.log(typeof(edad));

var apellido;
console.log(apellido);
apellido = 'Ballesteros';
console.log(apellido);
console.log(typeof(apellido));

var apodo= 'Pato';
console.log(typeof(apodo));
console.log(apodo);
/*
var amigo1 ='rodri';
console.log(amigo1);


var enemigos= false;
enemigos= true;
console.log(enemigos);

console.log(cd3)

var cd1 = null;
var cd2 = 'juan';
var cd3 = 14;
console.log(cd2);

 5 variables con valores distintos y disitntos names

var a1 = true;
var b1 = 'ojala';
var c1 = 13;
var d1 = false;
var e1 = 2;

console.log(d1);
console.log(a1);
console.log(c1,e1);

var trabajo = 'Sabor Natural';
console.log(trabajo)
console.log(typeof(trabajo)) 

var hermanoMayor = 'Daniel';
var pregunta = 'es familia?';
var respuesta = true;
console.log(hermanoMayor);
console.log(pregunta);
console.log(respuesta);
*/

 var fechanacimiento;

 fechanacimiento = year - edad;
 console.log('Pato nació el ' + fechanacimiento)

 var edadCarla, edadDaniel, edadVero;
 edadCarla = 29;
 edadDaniel = 30;
 edadVero = 39;
 
 var DiferenciaCP, DiferenciaDP, DiferenciaVP, DiferenciaDV;

 DiferenciaCP = edadCarla - edad;
 DiferenciaDP = edadDaniel - edad;
 DiferenciaDV = edadVero - edadDaniel;
 DiferenciaVP = edadVero - edad;

 console.log('la diferencia de edad entre carla y Pato es de ' + DiferenciaCP);
 console.log('la diferencia de edad entre Pato y dani es de ' + DiferenciaDP);
 console.log('la diferencia de edad entre Vero y  Pato es de ' + DiferenciaVP);
 console.log('la diferencia de edad entre Dani y vero es de ' + DiferenciaDV);



  var Vero, Dani, Car;

  Vero= edadVero > edadDaniel;
  Dani = edadCarla >= edadDaniel;
  Car = !(edadVero <= edadCarla);
  
 console.log('vero es mayor que dani. ' + Vero)
 console.log('carla es mayor o igual que Daniel. ' + Dani)
 console.log('carla es mayor o igual que vero. ' + Car)

   var a, b, c;
   a = 2;
   b = 5;
   c = 1;

   console.log(b);

   a += c;
   console.log(a)