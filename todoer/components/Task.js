import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Task = (props) => {
    const [finished, setFinished] = React.useState("-");
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity onPress = {props.onCheck}>
                    <View style = {styles.square}>
                        <Text style = {styles.symbol}>{finished}</Text>
                    </View>
                </TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.reorderArrows}>
                <TouchableOpacity onPress = {props.upArrow}>
                    <Image style = {styles.upArrow} source={require('../assets/arrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {props.downArrow}>
                    <Image style = {styles.downArrow} source={require('../assets/arrow.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#181a1c',
        padding: 15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemText: {
        color: '#E8EAED',
        maxWidth: '80%'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width:24,
        height:24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius:5,
        marginRight: 15
    },
    circular: {
        width: 24,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row'
    },
    symbol: {
        textAlign: 'center',
        textAlignVertical: 'top',
        fontSize: 24,

    },
    reorderArrows: {
        flexDirection: 'row'
    },
    upArrow: {
        aspectRatio: 1,
        height: 25
    },
    downArrow: {
        aspectRatio: 1,
        height: 25,
        transform: [{rotate: '180deg'}],
        marginLeft: 5
    }
});

export default Task;