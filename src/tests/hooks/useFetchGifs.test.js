import { render, renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test useFetchGifs hooks ', () => {

    test('should return initial state', () => {

        // const { data, loading } = useFetchGifs('Date a live');
        const { result } = renderHook(() => useFetchGifs('Date a live'));
        const { data, loading } = result.current;

        console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

    test('should return a img array and loading in false', () => {
        const { result  } = renderHook(() => useFetchGifs('Date a live'));
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

})