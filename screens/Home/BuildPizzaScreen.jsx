// BuildPizzaScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';
import styles from './BuildPizzaScreen.style.js';

export default function BuildPizzaScreen({ navigation }) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity style={styles.top}>
                {/* <Icon name="arrow-left" size={40} color="#333" onPress={() => navigation.goBack()} /> */}
                <Text style={styles.textTop}>Pizza App</Text>
                <Icon name="shopping-cart" size={40} color="#333" />
                <Badge value={3} status="error" containerStyle={{ position: 'absolute', top: 7, right: -1 }}/>
            </TouchableOpacity>

            <Image
                source={require('../../assets/Images/BuildPizza.jpeg')}
                style={{ width: 500, height: 170, top: 30}}
            />
            <View style={styles.view}>
            <TouchableOpacity style={styles.viewFirstText} >
                <Text style={styles.text}>Build Your Own Pizza
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/Pizza2.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Cheese Pizza
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Peperoni
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Meat Lovers
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Veggie Lovers
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Supreme
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Hawaiian Chicken
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>BBQ Chicken
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Buffalo Chicken
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewText}>
                <Text style={styles.text}>Peperoni Lovers
                </Text>
                <Image style={styles.image} source={require('../../assets/Images/CheesPizza.jpeg')} />
                <Icon name="arrow-right" size={20} color="#333"  />
            </TouchableOpacity>
            </View>
            <Text style={styles.textFooter}>Product availability, prices & participation vary. Additional prices & exclusion may apply.</Text>
            <Text style={styles.textFooter}>2000 calories a day is used for general nutrition advice, but calories needs vary.</Text>
            <Text style={styles.textFooter}>© 2021 Pizza App, LLC. All rights reserved.</Text>

        </ScrollView>
    );
}

