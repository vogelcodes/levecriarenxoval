import React from 'react';
import {View, StatusBar, Text} from 'react-native';

const App: React.FC = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#d6d5c2" />
        <View style={{flex: 1, backgroundColor: '#d6d5c2'}}>
            <Text>Enxoval Fácil</Text>
        </View>
    </>
);

export default App;
