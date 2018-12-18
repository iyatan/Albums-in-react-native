

// Import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => {


    const { textSyle, viewStyle } = styles;

    return (

        <View style={viewStyle} > 
            
            <Text style={textSyle}>{props.headerText}</Text>;
        
        </View>
    );      
};

const styles = {

 viewStyle: {
     backgroundColor: 'gold',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddignTop: 15,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.9,
     elevation: 2,
     position: 'relative'

 },


textSyle: {
  fontSize: 30
 }

};


// Make the component avalaible to other parts of the app

export default Header;
