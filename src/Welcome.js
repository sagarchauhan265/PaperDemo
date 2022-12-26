import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { anothername } from './actions/nameChange';

class Welcome extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> WELCOME {this.props.myname}  baba! </Text>
        <Button title='change name'
          onPress={() => this.props.changeName()} />

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
  }
}

const mapDisptchToState = (dispatch) => {
  return {
    changeName: () => { dispatch(anothername()) }
  }
}
export default connect(mapStateToProps, mapDisptchToState)(Welcome);