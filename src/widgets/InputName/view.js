import React, { Component } from 'react';
import { TextInput, Text, View, SafeAreaView } from 'react-native';
import styles from './styles';
import ImageOverlay from "react-native-image-overlay";
import { Button } from '../';

export default class InputName extends Component {
    render() {
        const {
            label,
            value,
            error,
            onChangeText,
            containerStyle,
            labelStyle,
            inputStyle,
            errorStyle,
            keyboardType,
            placeholder,
            placeholderTextColor,
            selectionColor,
            onPress
        } = this.props
        return (
            <View>
                <ImageOverlay
                    source={{ uri: 'http://getwallpapers.com/wallpaper/full/5/4/3/477757.jpg' }}
                    contentPosition='top'
                    containerStyle={styles.overlay}
                >
                    <SafeAreaView>
                        <Text style={[styles.label, labelStyle]}>{label}</Text>
                        <TextInput
                            onChangeText={onChangeText}
                            style={[styles.input, inputStyle]}
                            value={value}
                            keyboardType={keyboardType}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderTextColor}
                            selectionColor={selectionColor}
                            underlineColorAndroid={'transparent'}
                        />
                        {error ? <Text style={[styles.error, errorStyle]}></Text> : null}
                        <Button
                            onPress={onPress}
                            label={'Enter'}
                        />
                    </SafeAreaView>
                </ImageOverlay>
            </View>
        );
    }
}

InputName.defaultProps = {
    onPress: () => {},
    label: '',
    value: '',
    error: 'jkdlsa',
    onChangeText: text => { },
    containerStyle: {},
    labelStyle: {},
    inputStyle: {},
    errorStyle: {},
    keyboardType: 'default',
    placeholder: '',
    placeholderTextColor: 'rgba(255, 255, 255, 0.4)',
    selectionColor: 'rgba(255, 255, 255, 0.4)'
}