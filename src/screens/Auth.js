import React, { Component } from 'react'

import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity,
    Text
} from 'react-native'

import logo from '../../assets/imgs/AGROCLIMA.png'
import commonStyles from '../commonStyles'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: true, 
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={logo} />
                <View style={styles.formsContainer}>
                    {this.state.stageNew &&
                        <TextInput placeholder='Nome' value={this.state.name} 
                        style={styles.input}
                        onChangeText={name => this.setState({name})} />
                    }
                    <TextInput placeholder='E-mail' value={this.state.email} 
                        style={styles.input} onChangeText={email => this.setState({email})} />
                    <TextInput placeholder='Senha' value={this.state.password} 
                        style={styles.input} secureTextEntry={true} 
                        onChangeText={password => this.setState({password})} />
                    {this.state.stageNew &&
                        <TextInput placeholder='Confirme sua Senha' value={this.state.confirmPassword} 
                        style={styles.input} secureTextEntry={true} 
                        onChangeText={confirmPassword => this.setState({confirmPassword})} />
                    }
                    <TouchableOpacity>
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
    background: {
        flex: 5,
        width: '100%',
        height: 400
    },
    formsContainer: {
        flex: 5,
        width: '90%',
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