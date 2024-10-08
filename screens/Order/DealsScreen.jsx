// DealsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './DealsScreen.style.js';

export default function DealsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/Images/SlidePizza.jpeg')} style={styles.imageTop} />
      <Text style={styles.title}>Deals of the Day</Text>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/HawainPizza.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Hawaiian Chicken</Text>
        <Text style={styles.dealDescription}>
          Chicken, Pineapple, Bacon, and Cheese
        </Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/Lovers.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Supreme Lovers</Text>
        <Text style={styles.dealDescription}>
          Pepperoni, Sausage, Green Peppers, and Onions
        </Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/Wings.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Hot Wings</Text>
        <Text style={styles.dealDescription}>Hot Wings</Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/SupremeLover.png')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Meat Lovers</Text>
        <Text style={styles.dealDescription}>
          Pepperoni, Sausage, Bacon, and Ham
        </Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/Peperoni.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Peperoni</Text>
        <Text style={styles.dealDescription}>Peperoni and Cheese</Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/CheesPizza.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Cheese Pizza</Text>
        <Text style={styles.dealDescription}>Cheese and Tomato Sauce</Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/VeggiePizza.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Veggie Pizza</Text>
        <Text style={styles.dealDescription}>
          Mushrooms, Green Peppers, Onions, Black Olives
        </Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deal}>
        <Image
          source={require('../../assets/Images/BoneLess.jpeg')}
          style={styles.image}
        />
        <Text style={styles.dealTitle}>Boneless Wings</Text>
        <Text style={styles.dealDescription}>Boneless Wings</Text>
        <Icon style={styles.icon} name="arrow-right" size={20} color="#333"  />
      </TouchableOpacity>
    </ScrollView>
  );
}

