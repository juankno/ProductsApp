import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import ProductCardItem from '../components/ProductCardItem';
import { ProductsContext } from '../context/ProductsContext';
import { ProductsStackParams } from '../navigation/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { }

const ProductsScreen = ({ navigation }: Props) => {

  const { products } = useContext(ProductsContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('ProductScreen', {})}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);


  // TODO:: implement pull to refresh

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={
          ({ item }) => <ProductCardItem
            product={item}
            onPress={
              () => navigation.navigate('ProductScreen', { id: item._id, name: item.nombre })}
          />
        }
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },

});
