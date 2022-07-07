import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Producto } from '../interfaces/productsInterface';

interface Props {
    product: Producto;
    onPress: () => void;
}

const ProductCardItem = ({ product, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.productCard}>
                <View style={styles.cardBody}>
                    <View style={styles.cardImage}>
                        <Image
                            source={{ uri: product.img }}
                            resizeMode="contain"
                            style={{
                                borderRadius: 37,
                                height: 55,
                                width: 55,
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: 'black',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                            }}>
                            {product.nombre}
                        </Text>
                        <View
                            style={{
                                marginTop: 4,
                                borderWidth: 0,
                                width: '100%',
                            }}>
                            <Text
                                style={{
                                    color: 'gray',
                                    fontSize: 12,
                                    textTransform: 'capitalize',
                                }}>
                                {product.categoria.nombre}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCardItem;

const styles = StyleSheet.create({
    productName: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    productCard: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },

    cardImage: {
        height: 55,
        width: 55,
        borderRadius: 37,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 5,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardBody: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
