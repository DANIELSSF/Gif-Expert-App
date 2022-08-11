import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs.js', () => {

    test('Debe no retornar images y el isLoading en True', () => {

        const { result } = renderHook(() => useFetchGifs('Date a live'));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });


    test('Debe retornar images y el isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('Date a live'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

});