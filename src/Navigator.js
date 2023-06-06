import {  createAppContainer, createSwitchNavigator } from 'react-navigation'

import WeatherScreen from './screens/WeatherScreen'
import Auth from './screens/Auth'

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: WeatherScreen
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)