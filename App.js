import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import AppLayout from './src/app';

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView >
        
        
      </SafeAreaView> */}
      <AppLayout />
    </>
  );
};



export default App;
