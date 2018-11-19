import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    scene: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(52,52,52,0.9)'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(196,110,111)',
        padding: 10,
        marginTop: 20
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 15
    },
    textInput: { 
        height: 30, 
        borderBottomWidth: 2, 
        borderBottomColor: 'white',
        color: 'white' ,
        fontFamily: 'Roboto'
    },
    inputData: {
        fontFamily: 'Roboto', 
        fontStyle: 'italic', 
        fontSize: 12, 
        color: 'rgb(121,121,121)'
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 15
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabView: {
      marginTop: 50,  
      width: '80%',
      height: '60%'
      
    },
    whiteTextRoboto: {
        color: 'white', 
        fontFamily: 'Roboto'
    },
    forgotPasswordText: {
        color: 'rgb(121,121,121)', 
        fontFamily: 'Roboto'
    },
    whiteLine: {
        backgroundColor: 'white', 
        width: '5%'
    },
    topPadding20: {
        paddingTop: 20
    }
});