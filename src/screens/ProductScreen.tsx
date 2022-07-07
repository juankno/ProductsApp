import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { COLORS } from '../theme/constants';
import { Picker } from '@react-native-picker/picker';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }


const ProductScreen = ({ navigation, route }: Props) => {

  const { id, name = '' } = route.params;

  const [selectedLanguage, setSelectedLanguage] = useState();


  useEffect(() => {
    navigation.setOptions({
      title: (name) ? name.toLowerCase() : 'Nuevo Producto',
    });
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto:</Text>
        <TextInput
          placeholder="Ingrese el nombre del producto"
          style={styles.input}

        // TODO:
        // Value
        // onChangeText
        />

        {/* picker - Selector */}
        <Text style={styles.label}>Categoría:</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="py" />
          <Picker.Item label="php" value="php" />
          <Picker.Item label="Angular" value="ng" />
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
            <Icon name="camera-outline" size={30} color={COLORS.white} />

            <Text style={{ ...styles.buttonText, marginLeft: 5 }}>
              Galería
            </Text>
          </TouchableOpacity>


        </View>

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
