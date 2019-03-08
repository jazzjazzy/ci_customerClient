import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';

export default class PackageTypes extends React.Component {

    constructor() {
        super();
        this.state = {
            showAddress: false
        };
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
                <View style={styles.packageContent}>

                    <View style={styles.DeliveryType} >   
                        <Text style={styles.DeliveryTypeText}>Package Delivery</Text>        
                        <TouchableHighlight buttonStyle={styles.Read}
                                onPress={this.submitAddress} >
                                <Text style={styles.readText}>Read</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.DeliveryType} > 
                        <Text style={styles.DeliveryTypeText}>Parcel Delivery</Text>             
                        <TouchableHighlight buttonStyle={styles.Read}  
                                onPress={this.submitAddress} >
                                <Text style={styles.readText}>Read</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.DeliveryType} >   
                        <Text style={styles.DeliveryTypeText}>Container Delivery</Text>           
                        <TouchableHighlight buttonStyle={styles.Read}
                                onPress={this.submitAddress} >
                                <Text style={styles.readText}>Read</Text>
                        </TouchableHighlight>
                    </View> 
                </View>

            )
        }
    }

const styles = StyleSheet.create({
    packageContent :{
        flex:1,
        flexDirection: "column",
        position:"absolute",
        justifyContent: "center",
        alignItems:"stretch",
        left:0,
        right:0,
        marginTop: 10,
    },
    DeliveryType :{
        padding:10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor:"#cececece",
        borderColor:"black",
        borderWidth:1,
        borderRadius: 10,
        alignSelf:"stretch",
        alignItems: 'stretch',
        margin: 5,
    },
    DeliveryTypeText: {
        color:"yellow",
        fontSize:25,
        fontWeight:"700",
    },
    read: {
        flex:1,
    },
    readText:{
        color:'white',
        textAlign:'center',
        borderColor:"black",
        borderWidth:1,
        borderRadius: 5,
        color:"black",
        backgroundColor: "red",
        padding:5,
    },
});
 


