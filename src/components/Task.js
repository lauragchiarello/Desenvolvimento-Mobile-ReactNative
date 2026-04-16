import {View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'

export default props => {
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.checkContainer}>
                    <View style={styles.pending}></View>
                </View>
            </TouchableWithoutFeedback>
            <View >
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.data}>16/04/2026</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#aaa',
        borderBottomWidth: 1,
        alignItems:'center',
        paddingVertical: 10,
        backgroundColor: '#fff',

    },
    checkContainer:{
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor: '#555',
    },
    desc:{
        color: '#222',
        fontSize: 16
    },
    date:{
        color: '#555',
        fontSize: 12
    }
})