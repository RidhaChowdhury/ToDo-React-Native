import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const FinishedTask = (props) => {
    
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity onPress = {props.onCheck}>
                    <View style = {styles.square}>
                        <Image style = {styles.check} source={require('../assets/check.png')}/>
                    </View>
                </TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity onPress = {props.onDelete}>
                <View style = {styles.trashWrapper}>
                    <Image style = {styles.trash} source = {require('../assets/trash.png')}/>
                </View>
            </TouchableOpacity>
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
        maxWidth: '80%',
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width:25,
        height:25,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius:5,
        marginRight: 15,
        alignItems: 'center',
        justifyContent:'center'
    },
    trashWrapper: {
        width:25,
        height:25,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius:5,
        alignItems: 'center',
        justifyContent:'center'
    },
    symbol: {
        textAlign: 'center',
        textAlignVertical: 'top',
        fontSize: 24,
    },
    check: {
        aspectRatio: 1,
        flex: 0.8,
    },
    trash: {
        aspectRatio: 1,
        flex: 0.8,
    }
});

export default FinishedTask;