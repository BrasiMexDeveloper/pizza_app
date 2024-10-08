import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Pasta.style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Pasta({ route }) {
    const { paramKey } = route.params;
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../../assets/Images/Pasta.jpeg')} style={styles.Image} />
            <Text style={styles.textTop}>CHOOSE YOUR PASTA</Text>
            <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../../assets/Images/Pasta/Alfredo.jpeg')} style={styles.menuImage} />
                <Text style={styles.menuText}>Oven-Backed Chicken Alfredo Pasta</Text>
                <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../../assets/Images/Pasta/Italian.jpeg')} style={styles.menuImage} />
                <Text style={styles.menuText}>Oven-Backed Italian Meats Pasta</Text>
                <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../../assets/Images/Pasta/Chicken.jpeg')} style={styles.menuImage} />
                <Text style={styles.menuText}>Oven-Backed Chicken Parmesan Pasta</Text>
                <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../../assets/Images/Pasta/Carbonara.jpeg')} style={styles.menuImage} />
                <Text style={styles.menuText}>Oven-Backed Chicken Carbonara Pasta</Text>
                <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../../assets/Images/Pasta/Veggie.jpeg')} style={styles.menuImage} />
                <Text>Oven-Back Veggie Pasta</Text>
                <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textFooter}>Product availability, prices & participation vary. Additional prices & exclusion may apply.</Text>
                <Text style={styles.textFooter}>2000 calories a day is used for general nutrition advice, but calories needs vary.</Text>
                <Text style={styles.textFooter}>© 2021 Pizza App, LLC. All rights reserved.</Text>

            </View>
        </ScrollView>



    )
}