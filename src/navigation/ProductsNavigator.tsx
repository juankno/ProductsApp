import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/ProductsScreen';
import ProductScreen from '../screens/ProductScreen';

export type ProductsStackParams = {
  ProductsScreen: undefined,
  ProductScreen: { id?: string, name?: string },
}

const ProductsStack = createStackNavigator<ProductsStackParams>();

const ProductsNavigator = () => {
  return (
    <ProductsStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
    >

      <ProductsStack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ title: 'Productos' }}
      />

      <ProductsStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ title: 'Producto' }}
      />
    </ProductsStack.Navigator>
  );
};

export default ProductsNavigator;
