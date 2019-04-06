import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator, SafeAreaView, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { CharacterCell } from '../../widgets';
import * as Colors from '../../commons/colors';
import Spinner from 'react-native-spinkit';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.fetchCharactersList();
        console.log('Props ', props)
    }

    _onCharacterTapped = character => {
        this.props.updateCharactersSelected(character);
        console.log('TappedProps: ', this.props);
        Actions.CharacterDetail({ character });
    };

    _keyExtractor = (item, index) => 'character' + item.id;

    _renderItem = ({ item, index }) => <CharacterCell character={item} onPress={character => this._onCharacterTapped(character)} />;

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

    _renderHeader = () => {
        return (
            <Text style={{ color: Colors.white, fontWeight: 'bold', fontSize: 34, paddingLeft: 12, padding: 20 }}>{`Welcome ${this.props.username}! 👋🏻`}</Text>
        );
    }

    _renderNoResultText = isFetching => {
        return isFetching ? null : <Text style={styles.noResults}>{"No characters available"}</Text>;
    }

    _renderRefreshControl = isFetching => {
        return <RefreshControl
            onRefresh={this.props.fetchCharactersList}
            refreshing={isFetching}
            tintColor={Colors.white}
            colors={[Colors.white]}
        />;
    }

    render() {
        const { list, isFetching } = this.props;
        console.log('Characters: ', list);
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    extraData={this.props}
                    data={list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                    onRefresh={this.props.fetchCharactersList}
                    refreshing={isFetching}
                    ListEmptyComponent={_ => this._renderNoResultText(isFetching)}
                    ListHeaderComponent={_ => this._renderHeader()}
                    ListFooterComponent={_ => this._renderFooter(isFetching)}
                    refreshControl={this._renderRefreshControl(isFetching)}
                />
            </SafeAreaView>
        );
    }
}

export default Home;