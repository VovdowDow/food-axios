import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, FlatList, Image } from "react-native";
import axios from "axios";
import SearchBox from "../companent/SearchBox";
import RecipeCard from "../companent/RecipeCard";

const HomeScreen = ({ navigation }) => { // เพิ่ม navigation ที่นี่
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error("Cannot fetch data!!", error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Menu Bar</Text>
      <SearchBox
        placeholder="Search recipes..."
        value={search}
        onChangeText={(value) => setSearch(value)}
      />
      <FlatList
        data={recipes.filter((recipe) => 
            recipe.strMeal.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ede7f6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#fafafa",
    borderRadius: 15
  },
});

export default HomeScreen;
