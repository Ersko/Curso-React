import { render } from "@testing-library/react";
import { FirstApp } from "../src/FIrstApp";


describe('FirstApp Component', () => {
    test('debe de mostrar el mensaje "Hola, soy Esteban"', () => {

        render( <FirstApp /> )



    });
});