import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../Styles/styles';
import { updateUsernameField, updatePasswordField } from '../../Actions/Login/SignInActions';

class SignIn extends Component {

    render() {
        return(
            <View style={styles.scene}>
                <View style={{padding: 20}} >
                    <Text style={styles.inputData} >USERNAME</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={ username => this.props.updateUsernameField(username) }
                        value={this.props.username}
                        autoCapitalize = 'none'
                    />
                    <Text style={[ styles.inputData , {marginTop: 20} ]} >PASSWORD</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={ password => this.props.updatePasswordField(password) }
                        value={this.props.password}
                        secureTextEntry={true}
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
    }

}

const mapStateToProps = state => (
    {
        username: state.SignInReducer.signInUsername,
        password: state.SignInReducer.signInPassword,
    }
);

export default connect(mapStateToProps, 
{ updateUsernameField, updatePasswordField })(SignIn);