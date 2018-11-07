

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity , Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class InputButton extends Component {
    render() {
        const{value, handlerOnPress}=this.props;
        if(value==0){
        return (
            <TouchableOpacity style={styles.zero} onPress={()=> handlerOnPress(value)}>
                <Text style={styles.value}>{value}</Text>
                </TouchableOpacity>
        );
        }
        else{
            if(value=="÷"||value=="-"||value=="+"||value=="x"||value=="=")
            {
                return(
                     <TouchableOpacity style={styles.signs} onPress={()=> handlerOnPress(value)}>
                         <Text style={styles.value}>{value}</Text>
                    </TouchableOpacity>);
            }
            else
            {
                if(value=="e") {
                    return (
                        <View style={styles.zero} >

                        </View>);
                }
                else
                {
                    return (
                        <TouchableOpacity style={styles.container} onPress={() => handlerOnPress(value)}>
                            <Text style={styles.value}>{value}</Text>
                        </TouchableOpacity>);
                }
            }
        }

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C0C0C0'

    },
    zero: {
        flex: 2,
        margin:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C0C0C0'

    },
    signs: {
        flex: 1,
        margin:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange'

    },
    value:{
        color:'white',
        fontSize:40
    }
});