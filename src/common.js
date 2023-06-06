import { Alert, Platform } from 'react-native'

const server = 'https://agroclima-api.onrender.com/usuario'

function showError(err) {
    Alert.alert('Ops, ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }