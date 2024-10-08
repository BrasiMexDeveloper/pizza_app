import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Salads.style.js'

export default function Salads() {
  return (
    <View style={styles.container}>
      <ScrollView>
          <Image
            source={require('../../assets/Images/Salads/Salads.jpeg')}
            style={styles.Image}
          />
          <Text style={styles.headerText}>SALADS</Text>
          <Text style={styles.headerText2}>CHOOSE YOUR SALAD</Text>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Salads/Ceasar.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Caesar Salad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Salads/Greek.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Greek Salad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/Images/Salads/Caprese.jpeg')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Caprese Salad</Text>
          </TouchableOpacity>
        </View>
        <View>
                <Text style={styles.textFooter}>Product availability, prices & participation vary. Additional prices & exclusion may apply.</Text>
                <Text style={styles.textFooter}>2000 calories a day is used for general nutrition advice, but calories needs vary.</Text>
                <Text style={styles.textFooter}>© 2021 Pizza App, LLC. All rights reserved.</Text>

            </View>
      </ScrollView>
    </View>
  )
}