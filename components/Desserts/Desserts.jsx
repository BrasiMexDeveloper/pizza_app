import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Desserts.style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Desserts() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.header}>
          <Image
            source={require('../../assets/Images/Desserts/Dessert.jpeg')}
            style={styles.imageHeader}
          />
         <Text style={styles.headerText2}>CHOOSE YOUR DESSERT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
            source={require('../../assets/Images/Desserts/Chocolate.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Chocolate Cake</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Desserts/Cheesecake.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Cheesecake</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Desserts/ApplePie.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Apple Pie</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Desserts/Icencream.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Ice Cream</Text>
            <Icon style={styles.Icon} name="arrow-right" size={20} color="#333"  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Desserts/Churros.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Churros</Text>
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