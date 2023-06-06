import React, { Component, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/hoje.png'
import  moment from 'moment'
import 'moment/locale/pt-br'
import Weather from '../components/Weather'
import { MainCard } from '../components/MainCard'
import { InfoCard } from '../components/InfoCard'


export default class WeatherScreen extends Component {

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage}
                style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.weatherList}>
                    <Weather desc='Ensolarado'/>
                    <View style={styles.cardView}>
                        <MainCard title={'Manhã'} backgroundColor={'#cc6e30'} weather='21º'></MainCard>
                        <MainCard title={'Tarde'} backgroundColor={'#FCC63F'} weather='21º'></MainCard>
                        <MainCard title={'Noite'} backgroundColor={'#38B7B8'} weather='21º'></MainCard>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>Informações para seu cultivo</Text>
                        <View style={styles.infoCards}>
                            <InfoCard title={'Vento'} value={'65 km/h'}></InfoCard>
                            <InfoCard title={'Umidade'} value={'80%'}></InfoCard>
                            <InfoCard title={'Temp. Min.'} value={'20º C'}></InfoCard>
                            <InfoCard title={'Temp. Máx.'} value={'29º C'}></InfoCard>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3
    },
    weatherList: {
        flex: 7,
        alignItems: 'center'
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    }, 
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 30
    },
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 335,
        height: 160,
        backgroundColor: '#8f8f8f',
    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    infoCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})