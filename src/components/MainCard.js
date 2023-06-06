import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import sunny from '../../assets/imgs/sunny.png'

export const MainCard  = (props) => {
    return (
        <View style={styles.card} backgroundColor={props.backgroundColor}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Image style={styles.image} source={sunny}></Image>
            <Text style={styles.cardTitle}>{props.weather}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',

        margin: 10,
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    cardTitle: {
        color: 'white',
        margin: 15,
        fontSize: 20
    },
    image: {
        width: '50%',
        height: '30%',
    }

})