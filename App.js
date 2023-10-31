import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './src/screens/HomeScreen/ProductsLists.jsx';
import { ProductDetails } from './src/screens/HomeScreen/ProductDetails.jsx';
import { Cart } from './src/screens/HomeScreen/Cart.jsx';
import { CartIcon } from './src/components/CartIcons.jsx';
import { CartProvider } from './CartContext.jsx';

const Stack = createNativeStackNavigator();

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: null, max: null });
  const [searchQuery, setSearchQuery] = useState('');

  const handlePriceChange = (newPriceRange) => {
    setSelectedPriceRange(newPriceRange);
  };
  const handleSearch = () => {
    handleSearch(searchQuery);
  };  

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Products'>
          <Stack.Screen
            name='Products'
            component={ProductsList}
            initialParams={{ selectedCategory, selectedPriceRange, searchQuery }}
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}
          />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default App;
