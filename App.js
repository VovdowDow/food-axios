import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
        screenOptions={
          {headerStyle: {backgroundColor: "#D6C3CE"},
          headerTintColor: "#263238",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold"}
          }
        }
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: "Gin Leaw Tie 😊"
          }}
        />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
