import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, Alert} from 'react-native';
import Slider from '@react-native-community/slider';
import TextInputMask from 'react-native-text-input-mask';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        monto:5000,
        plazos:3,
    };
  }

  handleMonto = (monto) =>{

    if(isNaN(monto)) //validamos si no es un numero
    {
        this.setState({monto:1}) 
    }
    else
    {        
        this.setState({monto:parseInt(monto, 10)})
    }
    
  }
  handlePlazos = (plazos) =>{

    if(isNaN(plazos)) //validamos si no es un numero
    {
        this.setState({plazos:1})
    }
    else
    {
        this.setState({plazos:parseInt(plazos, 10)})
    }
    
    
  }
  calcularCuotas = (monto, plazos) =>{

    let resp; //auxiliar

    if((monto >= 5000) && (monto <= 50000))// validacion
    {
        if((plazos >= 3) && (plazos <= 24)) //validacion
        {
            resp=(monto/plazos).toFixed(2)
        }
        else
        {
            resp= 'Plazo incorrecto'
        }
    }
    else{
        resp = 'Monto incorrecto';
    }

    return resp;
  }
  validarNumero = (number) =>{

      if(isNaN(number))//validamos si no es un numero
      {
          return 1;
      }
      else
      {
          return number;
      }
  }
  llamanos = () =>{
    Alert.alert(
        "Credito",
        "Llamanos al 555-555-555 ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Llamar", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
  }
  detallesCuotas = (monto, plazos) =>{
    Alert.alert(
        "Detalle",
        `Pagarias ${this.calcularCuotas(monto, plazos)} durante ${plazos} meses`,
        [
          { text: "Cerrar", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
  }


  render() {

      const {monto, plazos} = this.state;

      //console.log('el valor del inputMonto: ',typeof (monto),monto);
      //console.log('el tipo de dato: --'+ typeof (plazos)+'-- El valor de los Plazos es: --'+plazos+'--');
    
      return (
        <View>
            <View style = {styles.containerMontoTotal}>
                <View style={styles.containerText}>
                    <Text style = {[styles.texto, {}]}>
                        MONTO TOTAL
                    </Text>
                </View >

                <View style= {styles.containerTextInput}>
                    <TextInputMask //inputdel monto
                        style={[styles.input,{}]}
                        refInput={ref => { this.input = ref }}
                        maxLength={6}
                        keyboardType = 'number-pad'
                        contextMenuHidden={false} //para no poder pegar texto
                        value={this.validarNumero(monto).toString()}
                        onChangeText={(formatted, extracted) => this.handleMonto(extracted)}
                        mask={'$[99990]'}
                    />
                </View>
            </View>

            <View style = {styles.containerSlider}>
                <Slider //slider del monto
                    style={styles.slider}
                    minimumValue={5000}
                    maximumValue={50000}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FFFFFF"
                    thumbTintColor= '#FFFFFF'
                    step={1000}
                    value={this.validarNumero(monto)}// validar monto return
                    onValueChange={(value) => {this.setState({monto:value})}}
                    
                />
            </View>
        
            <View style={styles.containerRangoDinero}>
                <Text style = {[styles.texto, {}]}>
                        $ 5.000
                </Text>
                    <Text style = {[styles.texto, {}]}>
                        $ 50.000
                    </Text>
                </View >

            <View style={styles.containerPlazo}>
                <View style={styles.containerText}>
                    <Text style = {[styles.texto, {}]}>
                        PLAZO
                    </Text>
                </View>
        
                <View style=  {styles.containerTextInput}>
                    <TextInput // text input de los plazos
                        style={[styles.input,{}]}
                        maxLength={2}                        
                        keyboardType = 'number-pad'
                        contextMenuHidden={true} //para no poder pegar texto
                        value={this.validarNumero(plazos).toString()}
                        onChangeText={text => this.handlePlazos(text)}
                       
                        
                    />
                </View>            
            </View >
         
            <View style = {styles.containerSlider}>
                <Slider //slider de los plazos
                    style={styles.slider}
                    minimumValue={3}
                    maximumValue={24}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FFFFFF"
                    thumbTintColor= '#FFFFFF'
                    step={1}
                    value={this.validarNumero(plazos)}
                    onValueChange={(value) => {this.setState({plazos:value})}}
                    
                    />
            </View>

            <View style={styles.containerRangoPlazos}>            
                <Text style = {[styles.texto, { }]}>
                    3
                </Text>
                <Text style = {[styles.texto, {}]}>
                    24
                </Text>        
            </View >

            <View style={styles.containerCuotasCalculo}>
                <View >
                    <Text style = {[styles.texto,{}]}>
                        CUOTA FIJA POR MES
                    </Text>
                </View>
                <View>
                    <Text style={[styles.texto,{}]}>
                        {this.calcularCuotas(monto, plazos)}
                    </Text>
                </View>
            </View>

            <View style = {[styles.containerBotonesAgrupados,{}]}>                
                
                <View style = {{flex:5}}>
                    <Button
                        title='Obtene tu credito'
                        color= '#17aa8d'
                        style={[styles.botonObtener,{}]}
                        onPress={this.llamanos}                   
                    />
                </View>
                    
                <View style = {{flex:2, marginLeft:8}}>
                    <TouchableWithoutFeedback
                        onPress={()=>{this.detallesCuotas(monto,plazos)}}
                    >
                        <View style = {styles.containerBotonDetalle}>
                            <Text style={styles.botonDetalle}>
                                ver detalle de cuotas 
                            </Text>
                        </View>                    
                    </TouchableWithoutFeedback>
                </View>           
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    
    containerMontoTotal:{
        flexDirection:'row',
        padding:10,

    },
    containerText:{
        alignItems: "flex-start",
        flex:0.6, 
        justifyContent:'center', 
        flexDirection:'column',

    },
    containerTextInput:{
        alignItems: "flex-end",
        flex:.4, 
        alignContent:'center', 
        textAlign:'center',

    },
    input:{
        borderTopColor:'#a7bcca',
        borderLeftColor:'#7b99af',
        borderRightColor:'#7b99af',
        borderBottomColor: '#215479',
        borderWidth: 1,
        color:'white',
        paddingLeft: 0, 
        height: 40,
        fontSize: 18,
        width: 100,
        justifyContent:"center",
        alignContent: 'center',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        
    },
    containerSlider:{ 
        alignItems:'center', 
        padding:10, 

    },
    slider:{
        width: 300, 
        height: 40, 
        alignItems:'center',

    },
    containerRangoDinero:{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:5 , 
        flexDirection:'row', 
        paddingBottom: 20,

    },
    containerPlazo:{
        flexDirection:'row', 
        padding:10, 
 
    },
    containerRangoPlazos:{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:5, 
        paddingHorizontal: 25 , 
        flexDirection:'row', 
        paddingBottom: 20,

    },
    containerCuotasCalculo:{
        backgroundColor:'#00355d',
        padding:15, 
        flexDirection: 'row',
        justifyContent:'space-between',

    },
    containerBotonesAgrupados:{
        flexDirection: 'row',

    },
    containerBotonDetalle:{
        backgroundColor:'#0b548b',  
        padding:5,

    },
    botonDetalle:{
        fontSize: 10, 
        color: 'white', 
        textAlign:'center',
        fontFamily: 'Montserrat-Regular',

     },
     texto:{
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',

    },  
   
});

export default Calculadora;
