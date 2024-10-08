import { StyleSheet } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
   
    },
    textTop: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    textFooter: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 20,
    },
    Image: {
        width: 500,
        height: 300,
        resizeMode: 'cover',
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
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