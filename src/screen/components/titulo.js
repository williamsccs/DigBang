import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Titulo(props){
    return(
        
        <View >
            <Text style = {styles.titulo}>
                Simúla tu crédito
            </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    

    titulo:{
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
        marginTop: 0,
        paddingBottom: 25,
        fontFamily: 'Montserrat-Regular',
    },
})

export default Titulo;