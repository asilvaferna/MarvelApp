import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../commons/colors';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: { 
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    label: {
        marginTop: (height / 5),
        color: colors.white,
        fontSize: 14
    },
    input: {
        color: colors.white,
        fontSize: 16,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.white,
        padding: 10,
        width: width * 0.9
    },
    error: {
        color: colors.error,
        fontSize: 12,
        marginTop: 8,
        textAlign: 'right',
        opacity: 0.8
    },
    overlay: {
        height: height,
        width: width
    }
});