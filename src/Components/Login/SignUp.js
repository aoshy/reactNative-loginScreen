import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import styles from '../../Styles/styles';

const facebookImg = require("../../../assets/imgs/facebook.png")

export default SignUp = (props) => (
    <View style={styles.scene}>
        <TouchableOpacity style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20 }} onPress={()=>{}}>
            <Image source={facebookImg}/>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'gray', width: '100%', height: 2, marginBottom: 30 }} />
        <View style={{padding: 10}} >
            <Text style={styles.inputData} >EMAIL</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={ (text) => props.text = text }
                value={props.text}
            />
            <View style={ styles.whiteLine } />
            <Text style={[ styles.inputData , {marginTop: 20} ]} >USERNAME</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={ (text) => props.text = text }
                value={props.text}
            />
            <View style={ styles.whiteLine } />

            <Text style={[ styles.inputData , {marginTop: 20} ]} >PASSWORD</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={ (text) => props.text = text }
                value={props.text}
            />
            <View style={ styles.whiteLine } />
            
            <TouchableHighlight
                style={styles.button}
                onPress={ () => {} }
            >
            <Text style={styles.whiteTextRoboto} > SIGN UP </Text>
            </TouchableHighlight>
        </View> 
    </View>
);
