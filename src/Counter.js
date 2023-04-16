import React, { Component } from 'react'
import { Text,Button, View } from 'react-native'
import {connect} from 'react-redux'
import { IncrementAction,DecrementAction} from './actions/myaction';
 class Counter extends Component {
     constructor(props){
         super(props)
     }
    render() {
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Button title='Increment'
                 onPress={()=>{this.props.Increment() }}/>
                <Text> {this.props.myCounter} </Text>
                <Button title='Decrement'
                 onPress={()=> {this.props.Decrement() }}/>
                 <Text>Heloo dksdlmlsdldsl</Text>
           
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        myCounter:state.counter,
        myitem:state.item,
    }
}

const mapDisptchToState=(dispatch)=>{
    return{
        
        Increment:()=>{ dispatch(IncrementAction()) },

         Decrement:()=>{dispatch(DecrementAction()) }
            
         
    }

}
export default connect(mapStateToProps,mapDisptchToState) (Counter);