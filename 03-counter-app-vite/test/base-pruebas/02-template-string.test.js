import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => { 
    test('getSaludo debe de retornar "Hola Fernando"', () => {

        const name= 'Fernando';
        const mesasge = getSaludo(name);

        expect(mesasge).toBe(`Hola ${name}`);

    });
})