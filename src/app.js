import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';



import Titulo from './screen/components/titulo'
import Calculadora from './screen/components/calculadora'

class AppLayout extends Component {
    render()
    {
        return(
            <View style = {styles.fondo}>
                <View style = {styles.fondo2}>
                    <Titulo/>
                    <Calculadora/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    
    fondo: {
        flex:1,
        backgroundColor: '#084f83',
        paddingVertical: 100,
        paddingHorizontal:10,
 
    },
    fondo2:{
        backgroundColor: '#003b67',
        padding: 20,
        paddingTop:10,
        paddingBottom: 10,
        flex: 1,
    },

})
export default AppLayout;