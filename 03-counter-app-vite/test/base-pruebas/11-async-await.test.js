import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe retornar un URL de la imagen', async() => {

        const url = await getImagen();

        expect( typeof url).toBe('string');
    });

    test('getImagen debe retornar un error si no tenemos apikey', async() => {

        if(0){ //en caso que no exista un apikey
            const resp = await getImagen();
            expect( resp).toBe('No existe');
        }

    });
 })

