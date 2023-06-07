import {  createAppContainer, createSwitchNavigator } from 'react-navigation'

import WeatherScreen from './screens/WeatherScreen'
import Auth from './screens/Auth'
import AgroScreen from './screens/AgroScreen'


const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: WeatherScreen
    },
    AgroScreen: {
        name: 'AgroScreen',
        screen: AgroScreen
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)