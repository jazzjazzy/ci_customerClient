import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class PackageTypes extends React.Component {
    render() {
        return (
                <View style={styles.packageContent}>
                    <Text>Settings</Text>
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
    }
});
 


