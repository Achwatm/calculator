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

    constructor(props) {
        super();
        this.initialState = {
            displayValue: '0',
            operator: null,
            firstValue:'',
            secondValue:'',
            nextValue:false
        }
        this.state = this.initialState;
    }
    renderButtons(){
        let  layouts = buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {

                return <InputButton value={buttonItems} handlerOnPress={this.handlerInput.bind(this, buttonItems)} key={'btn-' + buttonIndex}/>
    }

    );
        return <View style={styles.inputRow}  key={'row-'+index}>{rowItem}</View>

    });
        return layouts
    }

    handlerInput = (input) => {
    const {displayValue, operator, firstValue, secondValue, nextValue} = this.state;


switch(input){
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':

        this.setState({

            displayValue: (displayValue == '0')? input :( (displayValue =='Infinity') ? input : displayValue + input)

        })

        if(!nextValue){
            this.setState({
                firstValue: firstValue + input
            })

        }
        else
        {
            this.setState({
                secondValue: secondValue + input
            })

        }
        break;
    case '+':
    case '-':
    case 'x':
    case '÷':
        this.setState({
            nextValue:true,
            operator: input,
            displayValue: (operator !== null ? displayValue.substr(0,displayValue.length-1):displayValue)+input

        })
        break;

    case '.':
        let dot = displayValue.toString().slice(-1)
        this.setState({
            displayValue: dot !=='.'?displayValue + input : displayValue

        })
        if(!nextValue){
            this.setState({
                firstValue: firstValue + input
            })

        }
        else
        {
            this.setState({
                secondValue: secondValue + input
            })

        }
        break;
    case '=':
        let realOperator = (operator == 'x')? '*' : (operator=='÷') ? '/' : operator
        let result
        if(secondValue=='' || operator==null)
            result=firstValue
        else

            result = eval(firstValue + realOperator + secondValue);
        this.setState({
            displayValue: result,
            firstValue: (result == 'Infinity'? 0 : result),
            secondValue:'',
            operator:null,
            nextValue:false
        })
        break;
    case 'AC':

        this.setState(this.initialState)


        break;
}
}
render() {
    return (
        <View style={styles.container}>
<View style={styles.solution}>
<Text style={styles.solText}>{this.state.displayValue}</Text>
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
