import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => {

    const category = 'Date a Live';

    test('Debe de mostrar el estado inicial del componente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('Debe de mostrar las cartas de la categoria buscada', () => {

        const data = [
            {
                id: 'ABC',
                title: 'Tokisaki Kurumi',
                url: 'https://tokisakikurumi.com/kurumi.jpg',
            },
            {
                id: 'AB123C',
                title: 'Tohka',
                url: 'https://tokisakikurumi.com/tohka.jpg',
            },
        ];

        useFetchGifs.mockReturnValue(
            {
                images: data,
                isLoading: false,
            }
        );

        render(<GifGrid category={category} />);

        expect(screen.getByText('Tokisaki Kurumi'));
        expect(screen.getAllByRole('img').length).toBe(2);

    });

});