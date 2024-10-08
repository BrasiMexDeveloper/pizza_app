import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Sauces.style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Sauces() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.header}>
          <Image
            source={require('../../assets/Images/Sauces/Sauces.jpeg')}
            style={styles.imageHeader}
          />
         <Text style={styles.headerText2}>CHOOSE YOUR DESSERT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Sauces/Marinara.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Marinara Sauce</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Sauces/Alfredo.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Alfredo Sauce</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Sauces/Pesto.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Pesto Sauce</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Sauces/Vodka.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Vodka Sauce</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Sauces/Tomato.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Tomato Sauce</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}