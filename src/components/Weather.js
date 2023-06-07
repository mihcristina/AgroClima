import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'

export default props => {
    return (
        <>
        <View style={styles.container}>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
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
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    
})