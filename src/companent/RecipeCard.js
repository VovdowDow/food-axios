import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RecipeCard = ({ recipe, navigation }) => {
  const handlePress = () => {
    navigation.navigate("RecipeDetail", { recipe }); // ใช้ navigation.navigate
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image style={styles.image} source={{ uri: recipe.strMealThumb }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{recipe.strMeal}</Text>
        <View style={styles.footer}>
          <Text style={styles.category}>{recipe.strCategory}</Text>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default RecipeCard;
