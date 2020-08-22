import React from 'react';
import {View, StatusBar} from 'react-native';

const App: React.FC = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#d6d5c2" />
        <View style={{flex: 1, backgroundColor: '#d6d5c2'}} />
    </>
);

export default App;
