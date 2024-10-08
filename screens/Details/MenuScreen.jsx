import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './MenuScreen.style.js';

export default function MoreScreen({ navigation }) {
    return (
        <ScrollView style={styles.header}>
            <View  >
            <Image source={require('../../assets/Images/Menu.jpeg')} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Build')}>
                <Text style={styles.text}>Pizza</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Pasta', { itemId: 86 })}>
                <Text style={styles.text}>Pasta</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Wings')}>
                <Text style={styles.text}>Wings</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Salads')}>
                <Text style={styles.text}>Salads</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Desserts')}>
                <Text style={styles.text}>Desserts</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Drinks')}>
                <Text style={styles.text}>Drinks</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText} onPress={() => navigation.navigate('Sauces')}>
                <Text style={styles.text}>Sauces</Text>
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
        </ScrollView>
    );
}
 
