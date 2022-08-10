import { render } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en getGifs.js', () => {

    test('Debe retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('Date a live');

        expect(gifs.length).toBeGreaterThan(0);
        console.log(gifs);

        expect(gifs[0]).toEqual({

            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),

        });

    })


});