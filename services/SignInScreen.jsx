import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, KeyboardAvoidingView } from "react-native";
import { styles } from './SignInScreen.style.js';
import { FIREBASE_AUTH } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';


export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        if (email === "" || password === "") {
            Alert.alert("Error", "Please fill in all fields");
        } else if (!email.includes("@")) {
            Alert.alert("Error", "Please enter a valid email");
        } else {
            const auth = FIREBASE_AUTH;
            signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setEmail("");
        setPassword("");
        const user = userCredential.user;
        Alert.alert("Success", "Logged in successfully");
        navigation.navigate('Home', { user: user }); 
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
    });
        }
    };

    const register = () => {
        if (email === "" || password === "") {
            Alert.alert("Error", "Please fill in all fields");
        } else if (!email.includes("@")) {
            Alert.alert("Error", "Please enter a valid email");
        } else {
            const auth = FIREBASE_AUTH;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setEmail("");
                    setPassword("");
                    const user = userCredential.user;
                    Alert.alert("Success", "Registered successfully");
                    navigation.navigate('Home', { userId: user.id });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert("Error", errorMessage);
                });
        }
    }

    const sendPasswordResetEmail = (email) => {
        const auth = FIREBASE_AUTH;
        return sendPasswordResetEmail(auth, email);
    }
    const signOut = () => {
        const auth = FIREBASE_AUTH;
        signOut(auth)
            .then(() => {
                Alert.alert("Success", "Logged out successfully");
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Error", errorMessage);
            }
            );
    }
    
    const forgotPassword = () => {
        if (email === "") {
            Alert.alert("Error", "Please enter your email");
        } else if (!email.includes("@")) {
            Alert.alert("Error", "Please enter a valid email");
        } else {
            const auth = FIREBASE_AUTH;
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Alert.alert("Success", "Password reset email sent");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert("Error", errorMessage);
                });
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ImageBackground source={require('../assets/Images/SignBackGround.jpeg')} style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Pizza App</Text>
                    <Text style={styles.title}>Sign In</Text>
                    {email === "" && <Text style={styles.placeholder}>Email</Text>}
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                    />
                    {password === "" && <Text style={styles.placeholder}>Password</Text>}
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <View style={styles.allButtons}>
                    <TouchableOpacity style={styles.button} onPress={signIn}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={register}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.logOut}>
                    <TouchableOpacity style={styles.buttonText} onPress={signOut}>
                        <Text style={styles.buttonLogOut}>Log Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonText} onPress={forgotPassword}>
                        <Text style={styles.buttonText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}


