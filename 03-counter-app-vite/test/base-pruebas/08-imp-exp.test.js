import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heores";


describe('Pruebas en 08-imp-exp', () => {  
    

    test('getHeroById debe retornar un heroe por ID', () => { 

        const id= 1;

        const hero = getHeroeById(id);
    
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })

    test('getHeroById debe retornar undefined si no existe', () => { 

        const id= 100;

        const hero = getHeroeById(id);
    
        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner= 'DC';

        const DC_Heroes = getHeroesByOwner(owner).map( hero => hero.name);

        const DC_Heroes_Names = ['Batman', 'Superman', 'Flash'];

        expect(DC_Heroes).toContain(...DC_Heroes_Names)
        expect(DC_Heroes.length).toEqual(3);

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const owner= 'Marvel';

        const Marvel_Heroes = getHeroesByOwner(owner).map( hero => hero.name);

        const Marvel_Heroes_Names = ['Spiderman', 'Wolverine'];

        expect(Marvel_Heroes).toContain(...Marvel_Heroes_Names)
        expect(Marvel_Heroes.length).toEqual(2);
    });

});