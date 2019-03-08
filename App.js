import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";

import HomeMap from "./assets/home";
import Setting from './assets/Setting';


class App extends React.Component {

    render() {
      return (
        <AppNavigation/>
      );
  }
}

const AppStackNavigoator = createStackNavigator({
  Home: HomeMap
})

const  AppDrawNavigator = createDrawerNavigator({
  Home: HomeMap,
  Setting:Setting},{
    contentComponet:CustomDrawerComponent
})

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex:1}}>
    <ScrollView>
    <View style={styles.heading} >
                            <View><Image source={require('./assets/icons/menu-icon.png')} style={[styles.icon,styles.menu]}/></View>
                            <View><Text style={styles.title}>Courier.it</Text></View>
                            <View><Image source={require('./assets/icons/search-icon.png')} style={[styles.icon,styles.search]}/></View>
                            <View><Image source={require('./assets/icons/home-icon.png')} style={[styles.icon,styles.home]}/></View>
                            </View>)
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
export default createAppContainer(AppStackNavigoator);

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom:0,
    right : 0,

  },
  map:{
    position: 'absolute',
    top: 0,
    left : 0,
    bottom: 0,
    right: 0,
    zIndex:-10,
  },
});