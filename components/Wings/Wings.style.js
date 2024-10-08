import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        margin: 3,
        top: 45,
    },
    imageHeader: {
        width: 500,
        height: 300,
        
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10,
        position: 'absolute',
        top: 230,
        left: 250,

    },
    headerText2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        margin: 10,
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
        height: 70,
    },
    menuText: {
        fontSize: 15,
        padding: 5,
        fontWeight: 'bold',
    },
    Icon: {
        position: 'absolute',
        right: 10,
        top: 30,
    },

});

export default styles;