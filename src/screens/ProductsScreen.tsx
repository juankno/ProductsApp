import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCardItem from '../components/ProductCardItem';
import { ProductsContext } from '../context/ProductsContext';

const ProductsScreen = () => {

  const { products } = useContext(ProductsContext);

  // TODO:: implement pull to refresh

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item }) => <ProductCardItem product={item} />}
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
