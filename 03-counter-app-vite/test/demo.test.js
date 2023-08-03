
//npm install --save-dev jest //Instalar jest
//npm run test //Ejecutar test
//npm install --save-dev @types/jest //Instalar types para jest
//npm install --save-dev babel-jest @babel/core @babel/preset-env //Instalar babel para jest

//Creas el archivo babel.config.cjs en la raíz del proyecto y le agregas el siguiente código:
// module.exports = {
//     presets: [
//         ['@babel/preset-env', {
//             targets: {node: 'current'}
//         }]
//     ],
//   };


describe('Pruebas en el archivo demo.test.js', () => {

    test('Prueba', () => {
        /* if( 1 === 0){
            throw new Error('No es igual')
        } */
    
        //1. Arrange (Preparación)
    
        const message1= 'Hola Mundo';
    
        //2. Act (Ejecución)
    
        const message2= message1.trim(); //'trim()' se utiliza para eliminar los espacios en blanco al principio y al final de una cadena
    
        //3. Assert (Verificación)
    
        expect(message1).toBe(message2);
    
    });

});

