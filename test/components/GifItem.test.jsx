import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    const title = 'Date a Live';
    const url = 'https://datealive.com/';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('Debe pasar las props', () => {

        render(<GifItem title={title} url={url} />);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el titulo en el componente', () => {

        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();

    })



});