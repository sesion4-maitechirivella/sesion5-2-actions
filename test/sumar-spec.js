//Librerias para testeo
const ( asert ) = require('chai');

//Carga del programa principal
const math=require('../math');

//Test
describe('Modulo math', function(){
  describe('Funcion suma', function (){
       it('Suma de números positivos', function(){
            asert.equal(math, sumar(4,6), 10);
        });
       it('Suma de números positivos y negativos', function(){
            asert.equal(math, sumar(-2,6), 4);
        });
       it('Suma de números negativos', function(){
            asert.equal(math, sumar(-2,-3), -5);
       });
          
    });
});
