import { StyleSheet } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';
const styles = StyleSheet.create({
    container: {
    //    backgroundColor: '#fff',
       
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        margin: 3,
        top: 45,
      
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
       
    },
    imageHome: {
        width: '100%',
        height: 650,
        padding: 5,
        top: 40,
    },
    imageButton: {
        width: 55,
        height: 55,
        borderRadius: 50,
        position: 'absolute',
        top: 5,
    },
    imageBuid: {
        position: 'absolute',
        top: 14,
        left: 9,
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        right: 10,
        fontStyle: 'italic',
        color: 'red',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 3,
        textAlign: 'center',
        margin: 5,
        width: 200,
        height: 50,
    },
    buttonJoinUs: {
        position: 'absolute',
        bottom: 150,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 5,
        textAlign: 'center',
        margin: 5,
        left: 5,
        width: 400,
        height: 100,
        opacity: 0.7,
        
    },
    buttonBottom: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1.5,
        shadowColor: 'yellow',
        padding: 3,
        textAlign: 'center',
        margin: 5,
        width: 200,
        height: 50,
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
        marginBottom: 1,

    },
    textButton: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        padding: 5,
        margin: 5,
        left: 5,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'red',
        alignSelf: 'flex-end',
        right: 20,
        top: -21,
       
        
    },

    deliveryAddress: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        left: 25,
    },
    iconAddress: {
        position: 'relative',
        left: 10,
        top: 20,
        color: 'red',
    },
    textWelcom: {
        fontSize: 30,
        textAlign: 'center',
        padding: 5,
    },
    textJoinUs: {
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
    },
    welcomeText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 5,
    },
    icon: {
        position: 'relative',
        right: 20,
        top: 10,
    },
});

export default styles;
