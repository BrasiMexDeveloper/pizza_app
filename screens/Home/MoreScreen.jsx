import React from "react";
import { Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from './MoreScreen.style.js';
export default function MoreScreen() {
    return (
        <ImageBackground source={require('../../assets/Images/SignBackGround.jpeg')} style={styles.container}>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>General Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Legal Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewVersion}>
                <Text style={styles.textVersion}>Version: 1.0.1</Text>
            </TouchableOpacity>
            
        </ImageBackground>
    );
}

