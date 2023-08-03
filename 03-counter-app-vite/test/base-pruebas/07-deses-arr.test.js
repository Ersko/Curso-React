import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr', () => {
    test('Debe de retornar un string y un número', () => {

        const [letters, numbers] = retornaArreglo(); // ['ABC', 123];


        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String)); //igual que la linea 10

        expect(numbers).toBe(123);


    });
});