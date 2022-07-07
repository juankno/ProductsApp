import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigation/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }


const ProductScreen = ({ navigation, route }: Props) => {

  const { id, name = '' } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: (name) ? name.toLowerCase() : 'Nuevo Producto',
    });
  }, []);


  return (
    <View>
      <Text>{id} - {name}</Text>
    </View>
  );
};

export default ProductScreen;
