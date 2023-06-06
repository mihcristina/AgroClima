import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'


export const InfoCard  = (props) => {
    return (
        <View style={styles.card} backgroundColor={props.backgroundColor}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardTitle}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 30,
        
    },
    cardTitle: {
        color: '#e8e8e8',
        margin: 5,
        fontSize: 15,
    },
})