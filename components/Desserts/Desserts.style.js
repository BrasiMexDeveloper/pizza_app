import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      
    },
    
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-end'

    },
    headerText2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        margin: 19,
    },
    imageHeader: {
        width: 500,
        height: 300,
        
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
    },
    menuItem: {
        width: '100%',
        padding: 5,
        margin: 5,
        borderBottomWidth: 1,
        right: 5,
    },
    menuImage: {
        width: '50%',
        height: 150,
    },
    menuText: {
        fontSize: 15,
        padding: 5,
        fontWeight: 'bold',
    },
    Icon: {
        position: 'absolute',
        right: 10,
        top: 70,
    },
    textFooter: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default styles;