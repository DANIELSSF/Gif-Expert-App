import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp/>', () => {

    test('Debe de mostrar el titulo GifExpert en un <h1/>', () => {

        render(<GifExpertApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe('GifExpertApp');

    });

    test('Debe retornar la categoria si es la misma', () => {

        render(<GifExpertApp />);

        const input = screen.getByLabelText('input-search');
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    });

    
    test('Debe retornar la categoria si es la misma', () => {

        render(<GifExpertApp />);

        const input = screen.getByLabelText('input-search');
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'Date a Live' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });
});