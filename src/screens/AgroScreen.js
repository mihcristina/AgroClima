import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { recommendationList } from '../Lists/recommendationList'
import { PlantItem } from '../components/PlantItem'
import { PlantHeader } from '../components/PlantHeader'


export default function AgroScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <PlantHeader />
            <FlatList 
                data={recommendationList}
                renderItem={({item}) => <PlantItem {...item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})