import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import PackageTypes from './packageTypes';


export default class PickupLocation extends React.Component {

    constructor() {
        super();
        this.state = {
            showAddress: false
        };

    }

    submitAddress = () => {
        this.setState((prevState) => ({
            showAddress: !prevState.showAddress
        }))
    } 

    renderSubmitAddress = () => {
        if(this.state.showAddress){
            return (
               <PackageTypes />
            )
        } else {
            return null;
        };
    }

    render() {
        return (
            <View style={styles.textArea} >
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
                        placeholder="What is your pickup point?"
                        placeholderTextColor='grey'
                    /> 
                    
                    <View style={styles.Button} >           
                        <TouchableHighlight 
                            buttonStyle={styles.Button} 
                            title="Press Me" 
                            onPress={this.submitAddress} >
                                <Text style={styles.submitText}>Submit Pickup Location</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.b}> 
                    {this.renderSubmitAddress()}
                </View>
            </View>  
            
            )
        }
    }

const styles = StyleSheet.create({
    b: {
        alignItems:"center",
    },
    textArea:{
        flex:14,
        top:80,
        height:40,
        zIndex:99,
        padding:20,
    },
    pickupPoint:{
        fontSize:20,
    },
    Button: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
      submitText:{
        color:'#fff',
        textAlign:'center',
    },
});
 


