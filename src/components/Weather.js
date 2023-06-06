import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'
import sunny from '../../assets/imgs/sunny.png'

export default props => {
    return (
        <>
        <View style={styles.container}>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={sunny}></Image>
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        
    },
    imageContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 30,
    },
    
})