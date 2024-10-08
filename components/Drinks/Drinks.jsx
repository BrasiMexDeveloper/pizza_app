import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Drinks.style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Drinks() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.header}>
          <Image
            source={require('../../assets/Images/Drinks/Drinks.jpeg')}
            style={styles.imageHeader}
          />
          <Text style={styles.headerText2}>CHOOSE YOUR DRINKS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
            source={require('../../assets/Images/Drinks/Cocacola.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Coca Cola</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Drinks/Pepsi.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Pepsi</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Drinks/Sprite.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Sprite</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Drinks/Fanta.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Fanta</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Drinks/7Up.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>7UP</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <View>
                <Text style={styles.textFooter}>Product availability, prices & participation vary. Additional prices & exclusion may apply.</Text>
                <Text style={styles.textFooter}>2000 calories a day is used for general nutrition advice, but calories needs vary.</Text>
                <Text style={styles.textFooter}>© 2021 Pizza App, LLC. All rights reserved.</Text>

            </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}