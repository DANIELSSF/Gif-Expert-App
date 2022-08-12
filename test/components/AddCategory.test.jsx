import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        //const input = screen.getByRole('textbox');//<---  en caso de haber un input unico
        const input = screen.getByLabelText('input-search'); //Si hay mas inputs se busca con el aria-label

        fireEvent.input(input, { target: { value: 'Date a Live' } });

        expect(input.value).toBe('Date a Live');
    });

    test('Debe llamar al onNewCategory si tiene un valor', () => {

        const initialValue = 'Date a Live';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByLabelText('input-search');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: initialValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(initialValue);

    });

    test('la funcion onNewCategory nunca debe ser llamada si no se envia un enter', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
        
    });
});