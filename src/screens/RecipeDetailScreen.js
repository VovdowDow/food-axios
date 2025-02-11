import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <Text style={styles.category}>{recipe.strCategory}</Text>
      <Text style={styles.area}>{recipe.strArea}</Text>
      <Text style={styles.ingredientTitle}>Ingredients:</Text>
      {ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.titleInstructions}>Instructions:</Text>
      <Text style={styles.instructions}>{recipe.strInstructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ede7f6",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  category: {
    fontSize: 15,
    color: "#777",
    marginBottom: 10,
  },
  area:{
    fontSize: 15,
    color: "#777",
  },
  ingredientTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  titleInstructions:{
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  instructions: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
});

export default RecipeDetailScreen;
