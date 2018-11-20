import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import styles from '../../Styles/styles';
import { connect } from 'react-redux';
import { updateUsernameField, updateEmailField, updatePasswordField } from '../../Actions/Login/SignUpActions';

const facebookImg = require("../../../assets/imgs/facebook.png")

class SignUp extends Component {

    render() {
        return(
            <View style={styles.scene}>
                <TouchableOpacity style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20 }} onPress={()=>{}}>
                    <Image source={facebookImg}/>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'gray', width: '100%', height: 2, marginBottom: 30 }} />
                <View style={{padding: 10}} >
                    <Text style={styles.inputData} >EMAIL</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={ email => this.props.updateEmailField(email) }
                        value={this.props.email}
                    />
                    <View style={ styles.whiteLine } />
                    <Text style={[ styles.inputData , {marginTop: 20} ]} >USERNAME</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={ username => this.props.updateUsernameField(username) }
                        value={this.props.username}
                    />
                    <View style={ styles.whiteLine } />

                    <Text style={[ styles.inputData , {marginTop: 20} ]} >PASSWORD</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={ password => this.props.updatePasswordField(password) }
                        value={this.props.password}
                        secureTextEntry={true}
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
    }

}

const mapStateToProps = state => (
    {
        username: state.SignUpReducer.signUpUsername,
        email: state.SignUpReducer.signUpEmail,
        password: state.SignUpReducer.signUpPassword,
    }
);

export default connect(mapStateToProps, 
{ updateUsernameField, updateEmailField, updatePasswordField })(SignUp);

