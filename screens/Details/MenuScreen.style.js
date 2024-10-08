import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    header: {
        top: 0,
    },
    image: {
        width: 500,
        height: 300,  
    },
    viewText: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
    },
});

export {styles};