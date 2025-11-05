import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RecipeCardProps {
  image: any;
  title: string;
  calories: string;
  onPress: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title, calories, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.calories}>{calories} calories</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.textPrimary,
    marginBottom: 6,
  },
  calories: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
});

export default RecipeCard;
