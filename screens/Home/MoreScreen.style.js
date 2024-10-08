import { StyleSheet } from "react-native"; 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        opacity: 1.1,
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
        fontSize: 30,
        fontWeight: "bold",
        margin: 5,
        color: "#f5fffa",
    },
    viewVersion: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 10,
        padding: 10, 
    },
    textVersion: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f5fffa",
        margin: 5,
    },
});
export { styles };