import React, { Component } from 'react';
import { render } from 'react-dom';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const Mission = () => {
    return {

    }
}

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    static NavigationOptions = {
        title: "contact us",


    };
    render() {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
                    <Text>Nucamp Way</Text>
                    <Text>Seatle, WA 98001</Text>
                    <Text>U.S.A.</Text>

                </Card>
            </ScrollView>
        )
    }
}
export default Contact;