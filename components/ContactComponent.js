import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


//const Stack = createStackNavigator();
export default class Contact extends Component {
  static navigationOptions = {
    title: 'Contzac Us'
  }
  redner() {

    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card
            title='Contact Information'
            wrapperStyle={{ margin: 20 }} >
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text>U.S.A.</Text>

            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
          </Card>
        </Animatable.View>

      </ScrollView>
    )
  }

}