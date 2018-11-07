/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity , Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import InputButton from './inputButton';
const buttons=[
    ['AC','e','÷'],
    ['7','8','9','x'],
    ['4','5','6','-'],
    ['1','2','3','+'],
    ['0','.','=']
];

export default class App extends Component {


    renderButtons(){
        let  layouts = buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {

                return <InputButton value={buttonItems}  key={'btn-' + buttonIndex}/>
                }

            );
            return <View style={styles.inputRow}  key={'row-'+index}>{rowItem}</View>

        });
            return layouts
    }


    render() {
    return (
      <View style={styles.container}>
         <View style={styles.solution}>
             <Text style={styles.solText}></Text>
        </View>
            <View style={styles.input}>
                {this.renderButtons()}
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  solution: {
    flex:3,
    backgroundColor:'#5B5D74',
    alignItems:'flex-end',
      justifyContent:'flex-end'
  },
  input: {
   flex:9,
      backgroundColor:'#7A7D80'
  },

    inputRow:{
      flex:1,
        flexDirection:'row'
    },
    solText:{
      color:'white',
        fontSize: 80
    },
    empty1: {
        flex: 2,
        margin:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C0C0C0'

    },
    empty2: {
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
        backgroundColor:'#FF8000'

    },
});
