import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from '../Wings/Wings.style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Wings() {
  return (
    <View style={styles.container}>
      <ScrollView>
          <Image
            source={require('../../assets/Images/BuffaloWings.jpeg')}
            style={styles.imageHeader}
          />
          <Text style={styles.headerText}>WINGS</Text>
          <Text style={styles.headerText2}>CHOOSE YOUR WINGS</Text>
        <TouchableOpacity style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Designer2.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Spicy Wings</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Designer3.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>BBQ Wings</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Designer4.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Honey Garlic Wings</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
                source={require('../../assets/Images/Designer5.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Lemon Pepper Wings</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
                source={require('../../assets/Images/Designer6.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Teriyaki Wings</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
                source={require('../../assets/Images/Designer7.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Salt and Pepper Wings</Text>
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