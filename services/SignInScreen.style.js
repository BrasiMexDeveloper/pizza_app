import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
       
    },
    header: {
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "#333",
        borderWidth: 1.5,
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        opacity: 0.6,
    },
    button: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginVertical: 10,
        opacity: 0.6,
        borderRadius: 10,
        width: '40%',

    },
    allButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        
    },
   
    logOut: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
        top: 10,
    },
    buttonLogOut: {
        backgroundColor: "#d99d49",
        color: "#080c29",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        padding: 3,
       opacity: 0.6,
        
       
    },
    buttonText: {
        color: "#080c29",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 60,
        textAlign: 'center',
        padding: 5,
        fontStyle: 'italic',
        color: 'red',
        fontWeight: 'bold',
        top: -90,
    },
    placeholder: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
});

export { styles };