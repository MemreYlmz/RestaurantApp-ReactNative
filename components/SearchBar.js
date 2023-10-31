import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
        <FontAwesome name="search" size={30} color="black" style={styles.iconStyle} />
        <TextInput style={styles.textStyle} placeholder='Search' autoCorrect={false} 
        autoCapitalize='none' />
    </View>
  )
}

const styles = StyleSheet.create({

    backgroundStyle:{
        backgroundColor:"lightgray",
        flexDirection:"row",
        margin: 10,
        height:40,
        alignItems:"center",
        borderRadius:50,
    },

    iconStyle:{
        marginHorizontal:15,
    },
    textStyle:{
        flex:1,
        fontSize:18,
    },

})