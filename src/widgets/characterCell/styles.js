import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    cell: {
        height: width / 2,
        width: (width - 24) / 2,
        margin: 6,
        alignItems: 'center'
    },
    image: {
        height: width / 2,
        width: (width - 24) / 2,
    }
});