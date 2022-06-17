import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },

    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
    },

    inputField: {
        color: 'white',
        fontSize: 20,
    },

    inputFieldIos: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 4,
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
    },

    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
    },

    buttonText:{
        fontSize: 18,
        color: 'white',
    },
});
