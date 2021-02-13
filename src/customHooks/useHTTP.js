import { useState, useEffect } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api';

export const useGet = (endpoint, initialState = {}) => {
    const [data, setData] = useState(initialState);
    const [fetching, setFetching] = useState(true);
    const [errors, setErrors] = useState(false)

    const getData = async () => {
        try {
            const result = await fetch(`${BASE_URL}/${endpoint}`);
            const data = await result.json()
            setData(data.results)
            setFetching(false)
        } catch (error) {
            setData([])
            setFetching(false)
            setErrors(true)
        } 
    }

    useEffect(() => {
        getData('character')
    }, [])

    return [data, fetching, errors];
}