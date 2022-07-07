import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { COLORS } from '../theme/constants';
import { Picker } from '@react-native-picker/picker';
import useCategories from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }


const ProductScreen = ({ navigation, route }: Props) => {

  const { id = '', name = '' } = route.params;

  const { categories, isloading } = useCategories();

  const { loadProductById } = useContext(ProductsContext);

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
  });


  useEffect(() => {
    navigation.setOptions({
      title: (name) ? name.toLowerCase() : 'Nuevo Producto',
    });
  }, []);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) { return; }
    const product = await loadProductById(id);

    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
    console.log(product);
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto:</Text>
        <TextInput
          placeholder="Ingrese el nombre del producto"
          style={styles.input}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        {/* picker - Selector */}
        <Text style={styles.label}>Categoría:</Text>
        <Picker
          selectedValue={categoriaId}
          onValueChange={(value) => onChange(value, 'categoriaId')}
        >
          {
            categories.map((category) => (
              <Picker.Item
                label={category.nombre}
                value={category._id}
                key={category._id}
              />
            ))
          }

        </Picker>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Guardar
          </Text>
        </TouchableOpacity>

        {/* save product image */}
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.button,
              marginHorizontal: 5,
              width: 120,
              flexDirection: 'row',
              borderRadius: 5,
              padding: 5,
            }}
          >
            <Icon name="camera-outline" size={30} color={COLORS.white} />
            <Text style={{ ...styles.buttonText, marginLeft: 5 }}>
              Camara
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.button,
              marginHorizontal: 5,
              width: 120,
              flexDirection: 'row',
              borderRadius: 5,
              padding: 5,
            }}
          >
            <Icon name="images-outline" size={30} color={COLORS.white} />

            <Text style={{ ...styles.buttonText, marginLeft: 5 }}>
              Galería
            </Text>
          </TouchableOpacity>


        </View>

        {
          (img.length > 0) && (

            <Image
              source={{ uri: img }}
              style={{
                marginTop: 20,
                width: '100%',
                height: 300,
              }}
              resizeMode="contain"
            />
          )
        }

        {/* TODO:: mostrar imagen temporal */}

      </ScrollView>

    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },

  label: {
    fontSize: 18,
  },

  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 5,
    marginBottom: 15,
  },

  button: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 50,
    marginVertical: 20,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
