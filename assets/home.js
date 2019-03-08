import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView from 'react-native-maps';

import Icons from './headerIcon.js';
import Pickuplocation from './pickuplocation';


export default class Home extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
          connectionOpen: false,
          ConnectionConnected: false, 
          open:false,
			    error: null,
          latitude: -37.7806783,
          longitude: 145.0259483,
          markers:{},
          showAddress: false,
        };
        try{
            this.socket = new WebSocket('ws://172.18.0.3:3001');
         } catch(error) {
           Alert.alert(error);
        }
        
        this.emit = this.emit.bind(this);
        
        
    }

    emit() {
        this.setState(prevState => ({
          connectionOpen: !prevState.connectionOpen
        }))
        this.socket.send("It worked!");
        this.socket.onerror = (e) => {
          console.log(e);
        };
    }

    submitAddress(){

    } 

    componentDidMount() {
        var marker ={}

        this.watchId = navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position)
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        
        
        if(this.state.connectionOpen){
          this.socket.onopen = (e) => {

            if(e){
              Alert.alert(e.message);
            }
              this.socket.send(JSON.stringify({type: 'greet', payload: 'Hello Mr. Server!'}), function(error){
                console.log("Could not open connection to server :: " + error.message);
              });
            }
        }else{
          console.log(this.state.connectionOpen +" == "+ this.state.open);
        }

        //this.socket.onerror = () =>(e) (Alert.alert(e.message));


        this.socket.onmessage = ({data}) => {
          if(data !== 'cTextInputonnected'){
            let locate = JSON.parse(data);

            locate.coordinates={
              latitude: parseFloat(locate.lat,10),
              longitude: parseFloat(locate.lon,10),
            }
            locate.bearing = parseInt(locate.course);
            
            marker[locate.token]=locate;
            this.setState({markers:marker});
          }
        }
    }


    render() {

    return (
      <View style={styles.container}>
        
        <MapView style={styles.map}
                initialRegion={{
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
        >
          {Object.entries(this.state.markers).map((marker, index)=> (
            <MapView.Marker
              key= {index}
              coordinate={getCoordinates(marker)}
              title= {marker.title}
              discription= {index}
              centerOffset={{x: -900, y: -400}}
              anchor={{x:0.5, y:0.5}}
            >
              <Image source={require('./truck.png')} style={{transform: [{ rotate : `${marker[1].bearing}deg`}]}}/>
                </MapView.Marker>  
            ))}
            </MapView>
            <Icons />
            <Pickuplocation />    
      </View>
    );
  }
}


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

function getScreenWidth() { 
  return Dimensions.get('window').width
}

function getCoordinates(marker) {
  return marker[1].coordinates;
}
