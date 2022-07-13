import React, { createContext, useEffect } from 'react';
import { Producto, ProductsResponse } from '../interfaces/productsInterface';
import { useState } from 'react';
import productApi from '../api/productApi';
import { ImagePickerResponse } from 'react-native-image-picker';


type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<Producto>;
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
        // TODO: paginate products
        setProducts([...resp.data.productos]);
    };

    const addProduct = async (categoryId: string, productName: string): Promise<Producto> => {

        const resp = await productApi.post<Producto>('productos', {
            nombre: productName,
            categoria: categoryId,
        });

        setProducts([...products, resp.data]);

        return resp.data;


    };

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {
        try {
            const resp = await productApi.put<Producto>(`productos/${productId}`, {
                nombre: productName,
                categoria: categoryId,
            });

            setProducts(products.map(product => {
                return (product._id === productId) ? resp.data : product;
            }));
        } catch (error: any) {
            console.log(error.response.data);
        }
    };

    const deleteProduct = async (productId: string) => { };

    const loadProductById = async (productId: string): Promise<Producto> => {
        const resp = await productApi.get<Producto>(`/productos/${productId}`);
        return resp.data;
    };

    const uploadImage = async (data: ImagePickerResponse, productId: string) => {

        if (!data.assets) { return; }

        console.log('processing...');

        const fielToUpload = {
            uri: data.assets[0].uri,
            type: data.assets[0].type,
            name: data.assets[0].fileName,
        };

        const formData = new FormData();
        formData.append('archivo', fielToUpload);

        try {
            const resp = await productApi.put(`/uploads/productos/${productId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

        } catch (error: any) {
            console.log(JSON.stringify(error.response, null, 2));
        }
    };

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
