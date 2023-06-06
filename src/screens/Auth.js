import React, { Component } from 'react'

import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native'

import axios from 'axios'

import logo from '../../assets/imgs/AGROCLIMA.png'
import commonStyles from '../commonStyles'
import { showError, showSuccess, server } from '../common'

export default class Auth extends Component {

    state = {
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmacaoSenha: '',
        stageNew: true, 
    }

    signinOrSignUp = () => {
        if(this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    signup = async () => {
        try {
            await axios.post(`${server}/usuario`, {
                nome: this.state.name,
                email: this.state.email,
                telefone: this.state.phone,
                senha: this.state.password,
                confirmacaoSenha: this.state.confirmPassword
            })
            showSuccess('Usuário cadastrado!')
            this.setState({stageNew: false})
        } catch(e) {
            showError(e)
        }
    }

    signin = async () => {
        try {
            const res = await axios.post(`${server}/auth/login`, {
                email: this.state.email,
                senha: this.state.password
            })
            axios.defaults.headers.common['Authorization'] = res.data.token
            this.props.navigation.navigate('Home')
        } catch(e) {
            showError(e)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <ImageBackground style={styles.background} source={logo} />
                    <View style={styles.formsContainer}>
                        {this.state.stageNew &&
                            <TextInput placeholder='Nome' value={this.state.name} 
                            style={styles.input}
                            onChangeText={name => this.setState({name})} />
                        }
                        <TextInput placeholder='E-mail' value={this.state.email} 
                            style={styles.input} onChangeText={email => this.setState({email})} />
                        {this.state.stageNew &&
                            <TextInput placeholder='Telefone' value={this.state.phone} 
                            style={styles.input}
                            onChangeText={phone => this.setState({phone})} />
                        }
                        <TextInput placeholder='Senha' value={this.state.password} 
                            style={styles.input} secureTextEntry={true} 
                            onChangeText={password => this.setState({password})} />
                        {this.state.stageNew &&
                            <TextInput placeholder='Confirme sua Senha' value={this.state.confirmPassword} 
                            style={styles.input} secureTextEntry={true} 
                            onChangeText={confirmPassword => this.setState({confirmPassword})} />
                        }
                        <TouchableOpacity onPress={this.signinOrSignUp}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    {this.state.stageNew ? 'Registrar' : 'Entrar'}
                                    </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 10, alignItems: 'center'}}
                            onPress={
                                () => this.setState({ stageNew: !this.state.stageNew })
                            }
                        >
                            <Text>
                                {this.state.stageNew ? 'Já possui conta?' : 'Não tem conta? Cadastre-se'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll: {
        width: '100%',
    },
    background: {
        flex: 5,
        width: '100%',
        height: 400
    },
    formsContainer: {
        flex: 5,
        width: '90%',
        marginLeft: 16,
    },
    input: {
        borderColor: '#6BCDC3',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        width: '100%'
    },
    button: {
        backgroundColor: '#6BCDC3',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
        
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20
    }
    
})