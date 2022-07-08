import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Text, RefreshControl } from 'react-native';
import ProductCardItem from '../components/ProductCardItem';
import { ProductsContext } from '../context/ProductsContext';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { COLORS } from '../theme/constants';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { }

const ProductsScreen = ({ navigation }: Props) => {

  const [refreshing, setRefreshing] = useState(false);
  const { products, loadProducts } = useContext(ProductsContext);

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


  const getProdutsFromBackend = async () => {
    setRefreshing(true);

    await loadProducts();

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

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
        refreshControl={
          <RefreshControl
            colors={[COLORS.primary]}
            refreshing={refreshing}
            onRefresh={getProdutsFromBackend}
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
