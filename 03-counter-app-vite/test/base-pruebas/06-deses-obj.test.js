import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj', () => {

    test('usContext debe retornar un objeto', () => {
        const nombre= 'Tony';
        const clave= 'Ironman';
        const edad= 45;

        const user = usContext({clave, nombre, edad});
        
        expect(user).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });

});