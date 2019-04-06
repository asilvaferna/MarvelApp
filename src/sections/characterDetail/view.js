import React, { Component } from 'react'
import { FlatList, ScrollView, Text, View, RefreshControl } from 'react-native'
import styles from './styles';
import ImageOverlay from "react-native-image-overlay";
import * as api from '../../webservice';
import * as Colors from '../../commons/colors';
import Spinner from 'react-native-spinkit';

class CharacterDetail extends Component {
    constructor(props) {
        super(props);
        console.log('DetailsProps: ', props);
        api
        .fetchComics(this.props.character.id)
        .then(res => {
            this.setState({comics: res.data.data.results, isFetching: false});
            console.log('Comics: ', this.state)
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    }

    state = {
        comics: [],
        isFetching: true
    }

    _renderItem = ({ item, index }) => {
        const source = item.images[0] 
            && item.images[0].path
            && item.images[0].extension
            ? { uri: `${item.images[0].path}.${item.images[0].extension}` } : {};
        return (
            <ImageOverlay 
                source={source}
                containerStyle={ styles.cell }
                rounded={6}
                title={item.title}
            />
        );
    }

    _renderFooter = (isFetching) => {
        if (isFetching) {
            return (
                <View style={{ alignItems: 'center' }}>
                    <Spinner
                        style={styles.spinner}
                        size={16}
                        type={"Circle"}
                        color={Colors.white}
                    />
                </View>
            );
        } else {
            return null;
        }
    }
    _keyExtractor = (item, index) => 'comic' + item.id;

    _renderNoResultText = isFetching => {
        return isFetching ? null : <Text style={styles.noResults}>{"No comics available"}</Text>;
    }

    render() {
        const { character } = this.props;
        const { comics, isFetching } = this.state;

        const source = character 
            && character.thumbnail.path 
            && character.thumbnail.extension 
            ? { uri: `${character.thumbnail.path}.${character.thumbnail.extension}` } : "";

        const description = character 
            && character.description != ''
            ? character.description : 'No description available';
        return (
            <ScrollView style={styles.container}>
                <ImageOverlay 
                    source={ source }
                    height={styles.overlay.height}
                    title={ character.name }
                    contentPosition={'bottom'}
                    containerStyle={ styles.image }
                    titleStyle={styles.overlayTitle}
                />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>{'Description 👽'}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>{'Comics 💥'}</Text>
                    <FlatList
                        extraData={comics}
                        data={comics}
                        keyExtractor={ this._keyExtractor }
                        renderItem={ this._renderItem }
                        horizontal={true}
                        ListEmptyComponent={ _ => this._renderNoResultText(isFetching) }
                        refreshing={isFetching}
                        ListFooterComponent={ this._renderFooter(isFetching) }
                    />
                </View>
            </ScrollView>
        );
    }
}

export default CharacterDetail;