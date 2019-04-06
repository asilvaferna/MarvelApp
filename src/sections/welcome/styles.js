import { StyleSheet, Dimensions } from 'react-native'
import * as colors from '../../commons/colors'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main
    },
    overlay: {
        height: height / 2,
        paddingBottom: 12
    },
    overlayTitle: { 
        fontWeight: 'bold', 
        fontSize: 34,
        paddingLeft: 12 
    },
    descriptionContainer: {
        margin: 12,
        borderRadius: 12,
        padding: 12,
        backgroundColor: colors.navBar
    },
    descriptionTitle: {
        color: colors.white,
        fontWeight: 'bold', 
        fontSize: 26, 
        paddingLeft: 12
    },
    descriptionText: {
        color: colors.white,
        paddingTop: 12
    },
    cell: {
        marginTop: 12,
        marginRight: 12,
        marginBottom: 6,
        width: 100,
        height: 150
    },
    noResults: {
        color: colors.white,
        padding: 6
    }
})