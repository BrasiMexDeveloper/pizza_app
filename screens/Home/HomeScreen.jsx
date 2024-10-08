import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Badge } from 'react-native-elements';
import styles from './HomeScreen.style.js';




const HomeScreen = ({ navigation}) => {
    const route = useRoute();
    const userId = route.params?.userId;
    // const user = route.params?.user;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/Images/Pizza_logo2.jpeg')} />
                <Text style={styles.text}>Pizza App</Text>
                <Icon style={styles.icon} name="shopping-cart" size={40} color="#333" />
                <Badge value={3} status="error" containerStyle={{ position: 'absolute', top: 17, right: 8 }}
                />
            </View>
            <Image style={styles.imageHome} source={require('../../assets/Images/pizza.jpg')} />
            <TouchableOpacity style={styles.buttonJoinUs} onPress={() => navigation.navigate('Sign In')}>
                <Image style={styles.imageButton} source={require('../../assets/Images/Pizza_logo2.jpeg')} />
                <Text style={styles.textWelcom}>Welcome to Pizza App</Text>
                <Text style={styles.textJoinUs}>Join Us to Rewards to earn free pizza  {'>'}</Text>
            </TouchableOpacity>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonBottom} onPress={() => navigation.navigate('Build')}>
                    <Ionicons style={styles.imageBuid} name="pizza" color="red" size={20} />
                    <Text style={styles.textButton}>BUID A PIZZA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBottom} onPress={() => navigation.navigate('Deals')}>
                    <Icon style={styles.imageBuid} name='money' size={20} color='red' />
                    <Text style={styles.textButton}>FIND A DEAL</Text>
                </TouchableOpacity>
            </View>
            <View sytle={styles.viewAddress}>
                <Icon style={styles.iconAddress} name="map-marker" size={20} color="#333" />
                <Text style={styles.deliveryAddress}>Delivery: {userId?.address || ''}</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Delivery Address')}>
                    <Text style={styles.buttonText}>Change {'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default HomeScreen;