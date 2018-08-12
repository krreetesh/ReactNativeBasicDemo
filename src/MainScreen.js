import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

const MainScreen = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.welcome}
            onPress={() => Actions.myProps()} // New Code
            >
            Go to Props Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myState()} // New Code
            >
            Go to State Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myStyle()} // New Code
            >
            Go to Style Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myDimension()} // New Code
            >
            Go to Dimension Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myFlexbox()} // New Code
            >
            Go to Flexbox Layout Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myTextInput()} // New Code
            >
            Go to TextInput Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myButton()} // New Code
            >
            Go to Button Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myScrollView()} // New Code
            >
            Go to ScrollView Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myListView()} // New Code
            >
            Go to ListView Demo
            </Text>
            <Text style={styles.welcome}
            onPress={() => Actions.myNetworkRequest()} // New Code
            >
            Go to Network Request Demo
            </Text>
            </View>
            );
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#008000',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 10,
                                 color: '#ffffff',
                                 },
                                 });

export default MainScreen;

