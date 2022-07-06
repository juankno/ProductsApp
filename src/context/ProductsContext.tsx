import React, { createContext } from 'react';
import { Producto } from '../interfaces/productsInterface';


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

    return (
        <ProductsContext.Provider value={{

        }}>
            {children}
        </ProductsContext.Provider>
    );

};
