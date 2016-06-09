/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput,
  Modal,
} from 'react-native'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{
            height: 547,
            width: 320,
          }}
          onRegionChange={() => {}}
          onRegionChangeComplete={() => {}}
          showsUserLocation={true}
        />
        <View> 
          <Modal 
            animated={true}
            transparent={true}
            visible={(this.state && this.state.modalVisible) || true }>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <TextInput
                style={{
                  alignSelf: 'center',
                  //fontFamily: 'OpenSans-ExtraBold',
                  height: 30, 
                  width: 250,
                  borderWidth: 1,
                  borderColor: "rgba(0,0,0,0.5)",
                  borderRadius: 5,
                  backgroundColor: 'white'
                }}
                placeholder={' Search'}
                placeholderTextColor={"rgba(198,198,204,1)"}
                onChangeText={(text) => {this.setState({text})}}
                onSubmitEditing={() => {this.setState({text: ''})}}
                value={(this.state && this.state.text) || ''}
              />
            </View>
          </Modal>
        </View>
      </View>
//       <View style={{
//         flex: 1
//       }}>
//       <TextInput
//       style={{
//         height: 30, 
//         width: 320,
//         borderWidth: 1,
//         borderColor: "rgba(0,0,0,0.5)",
//       }}
//       placeholder={'Search'}
//       placeholderTextColor={"rgba(198,198,204,1)"}
//       onChangeText={(text) => {this.setState({text})}}
//       onSubmitEditing={() => {this.setState({text: ''})}}
//       value={(this.state && this.state.text) || ''}
//     />
//     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20
  }
});

AppRegistry.registerComponent('Project', () => Project);
