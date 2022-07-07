import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import { Categoria, CategoriesResponse } from '../interfaces/categoriesInterface';

const useCategories = () => {

    const [isloading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Categoria[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const resp = await productApi.get<CategoriesResponse>('/categorias');

        setCategories(resp.data.categorias);
        setIsLoading(false);
    };

    return {
        categories,
        isloading,
    };

};

export default useCategories;
