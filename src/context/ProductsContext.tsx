import React, { createContext, useEffect } from 'react';
import { Producto, ProductsResponse } from '../interfaces/productsInterface';
import { useState } from 'react';
import productApi from '../api/productApi';


type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (productId: string) => Promise<void>;
    loadProductById: (productId: string) => Promise<Producto>;
    uploadImage: (data: any, productId: string) => Promise<void>; // TODO: change any type
}

export const ProductsContext = createContext({} as ProductsContextProps);

interface ProductsProps {
    children: JSX.Element | JSX.Element[];
}
export const ProductsProvider = ({ children }: ProductsProps) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async () => {

        const resp = await productApi.get<ProductsResponse>('/productos?limite=50');
        // setProducts([...products, ...resp.data.productos]);
        setProducts([...resp.data.productos]);
    };

    const addProduct = async (categoryId: string, productName: string) => {
        console.log('add product');
        console.log({categoryId, productName});
    };

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {
        console.log('update product');
        console.log({productId, categoryId, productName});
    };

    const deleteProduct = async (productId: string) => { };

    const loadProductById = async (productId: string): Promise<Producto> => {
        const resp = await productApi.get<Producto>(`/productos/${productId}`);
        return resp.data;
    };

    const uploadImage = async (data: any, productId: string) => { }; // TODO: change any type

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>
            {children}
        </ProductsContext.Provider>
    );

};
