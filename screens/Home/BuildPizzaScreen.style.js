import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        margin: 5,
        top: 35,
    },
    textTop: {
        fontSize: 40,
        textAlign: 'center',
        padding: 5,
        fontStyle: 'italic',
        color: 'red',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    buttonTop: {
        color: 'red',
        fontSize: 20,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        fontStyle: 'italic',
        color: 'black',
        fontWeight: '400',
    },
    viewFirstText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 6,
        paddingTop: 10,
        marginTop: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        right: 60,
    },
    viewText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 6,
    },
    textFooter: {
        fontSize: 12,
        textAlign: 'center',
        padding: 2,
        fontStyle: 'italic',
        color: 'black',
        fontWeight: '400',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
      
        marginTop: 20,
        padding: 5,
    },
    
});

export default styles;