import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/hoje.png'
import  moment from 'moment'
import 'moment/locale/pt-br'
import Weather from '../components/Weather'
import { MainCard } from '../components/MainCard'
import { InfoCard } from '../components/InfoCard'
import getCurrentWeather from '../services/api'

export default function WeatherScreen({ navigation }) {

    function nextPage() {
        navigation.navigate('AgroScreen')
    }

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    const [cloudness, setCloudness] = useState(0)
    const [condition, setCondition] = useState('')
    const [humidity, setHumidity] = useState(0)
    const [icon, setIcon] = useState('')
    const [season, setSeason] = useState('')


    async function setCurrentWeather() {
        const data = await getCurrentWeather()
        setCloudness(data[0])
        setCondition(data[1])
        setHumidity(data[2])
        setIcon(data[3])
        setSeason(data[4])
    }

    useEffect(() => { 
        setCurrentWeather()
    }, [])

    return (
            <View style={styles.container}>

                <ImageBackground source={todayImage}
                style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>

                <ScrollView style={styles.scroll}>
                    <View style={styles.weatherList}>

                        <Weather desc='Sol o dia todo sem nuvens no céu. Noite de tempo aberto ainda sem nuvens.'/>

                        <View style={styles.cardView}>
                            <MainCard title={'Manhã'} icon={'cloud-moon'} backgroundColor={'#cc6e30'} weather='14°C'></MainCard>
                            <MainCard title={'Tarde'} backgroundColor={'#FCC63F'} weather='24º'></MainCard>
                            <MainCard title={'Noite'} backgroundColor={'#38B7B8'} weather='23º'></MainCard>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.infoText}>Informações para seu cultivo</Text>
                            <View style={styles.infoCards}>
                                <InfoCard title={'Nublado'} value={0}></InfoCard>
                                <InfoCard title={'Umidade'} value={60}></InfoCard>
                                <InfoCard title={'Condição'} value={'clear'}></InfoCard>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.button} onPress={nextPage}>
                            <Text style={styles.buttonText}>
                                E agora?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
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
    },
    scroll: {
        width: '100%',
    },
    button: {
        backgroundColor: '#6BCDC3',
        marginTop: 10,
        padding: 10,
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20
    },
    viewButton: {
        alignItems: 'center'
    }
})