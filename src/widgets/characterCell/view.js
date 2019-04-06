import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';
import ImageOverlay from "react-native-image-overlay";

export default class CharacterCell extends Component {
    static defaultProps = {
        character: {},
        onPress: () => {}
    };

    render() {
        const { character, onPress } = this.props;

        const source = character 
            && character.thumbnail.path 
            && character.thumbnail.extension 
            ? { uri: `${character.thumbnail.path}.${character.thumbnail.extension}` } : "";

        return (
            <TouchableOpacity onPress={ _ => onPress(character) } style={ styles.cell }>
                <ImageOverlay 
                    source={ source } 
                    title={ character.name }
                    rounded={ 16 }
                    containerStyle={ styles.image }
                />
            </TouchableOpacity>
        );
    }
}