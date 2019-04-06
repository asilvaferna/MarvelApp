import React, { Component } from 'react';
import { Button, View } from 'react-native';
import styles from './styles';
import { InputName } from '../../widgets';
import { Actions } from 'react-native-router-flux';

class Initial extends Component {

    state = {
        username: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <InputName
                    onChangeText={ username => this.setState({username})}
                    onPress={ _ => Actions.Characters({ username: this.state.username })}
                    label={'Enter your name:'}
                    value={this.state.username}
                />
            </View>
        );
    }
}

export default Initial;