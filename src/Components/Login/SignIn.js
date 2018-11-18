import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import styles from '../../Styles/styles';

export default SignIn = (props) => (
    <View style={styles.scene}>
        <View style={{padding: 20}} >
            <Text style={styles.inputData} >USERNAME</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={ (text) => props.text = text }
                value={props.text}
            />
            <Text style={[ styles.inputData , {marginTop: 20} ]} >PASSWORD</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={ (text) => props.text = text }
                value={props.text}
            />
            <TouchableHighlight
                style={styles.button}
                onPress={ () => {} }
            >
                <Text style={styles.whiteTextRoboto} > SIGN IN </Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.forgotPassword}
                onPress={ () => {} }
            >
                <Text style={styles.forgotPasswordText} > Forgot password? </Text>
            </TouchableHighlight>
        
        </View>
    </View>
);