import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class Icons extends React.Component {
    render() {
        switch(this.props.icon){
            case "menu" : return( <View><Image source={require('./icons/menu-icon.png')} style={[styles.icon,styles.menu]}/></View>)
            default :  return (
                            <View style={styles.heading} >
                            <View><Image source={require('./icons/menu-icon.png')} style={[styles.icon,styles.menu]}/></View>
                            <View><Text style={styles.title}>Courier.it</Text></View>
                            <View><Image source={require('./icons/search-icon.png')} style={[styles.icon,styles.search]}/></View>
                            <View><Image source={require('./icons/home-icon.png')} style={[styles.icon,styles.home]}/></View>
                            </View>)
        }
    }
}

const styles = StyleSheet.create({
    icon:{
    width:40,
    height:40,
  },
  heading:{
    top:25,
    flex:1,
    flexDirection: 'row',
    backgroundColor:"yellow",
    height:20,
    borderColor:'black',
    borderWidth:1,
    justifyContent: "space-between",
    alignContent: "stretch",
    borderRadius:10,
  },
  menu:{
  },
  title:{
    flex:1,
    fontSize:25,
    color: 'black',
    textShadowOffset : {width: 2, height:2},
  },
  search:{
    justifyContent:"flex-end",
  },
  home:{
  }
});
 


