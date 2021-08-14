import { Component } from "react";
import { ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import { Alert } from "react-native";
import * as Notifications from 'expo-notifications';


const showAlert = () => {
    const message = `Number of campers : ${this.state.campers} \nhikeIn? : ${this.state.hikein} \ndate : ${this.state.date}`;
    Alert.alert(
        "Begin Search?",
        message,
        [
            {
                text: "Cancel",
                onPress: () => this.resetForm(),
                style: "cancel",
            },
            {
                text: "OK",
                onPress: () => {
                    this.resetForm();
                },
            },
        ],
        {
            cancelable: false,
            onDismiss: () =>
                Alert.alert(
                    "This alert was dismissed by tapping outside of the alert dialog."
                ),
        },

    );
};



export default class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            campers: 2,
            hikein: true,
            date: "",
        };
    }
    static navigationOptions = {
        title: "Reserve Campsite",
    };
    resetForm() {
        this.setState({
            campers: 1,
            hikeIn: false,
            date: '',
        });
    }
    async presentLocalNotification(date) {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Your Campsite Reservation Search',
                    body: `Search for ${date} requested`
                },
                trigger: null
            });
        }

        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
        }
        if (permissions.granted) {
            sendNotification();
        }
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
                    <showAlert></showAlert>
                </Animatable.View>
            </ScrollView>
        );
    }
}
