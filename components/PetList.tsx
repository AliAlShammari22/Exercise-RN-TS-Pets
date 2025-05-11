import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import pets from "@/data/pets";
import PetItem from "./PetItem";

export default function PetList() {
  const [query, setQuery] = useState("");
  const [visiblePets, setVisiblePets] = useState(pets);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.containerStyle}
    >
      {/* Search Input */}
      <TextInput
        placeholder="Search for a pet"
        style={styles.searchInput}
        value={query}
        onChangeText={setQuery}
      />

      {/* Filter by type */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.filterContainer}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setVisiblePets(pets)}
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setVisiblePets(pets.filter((p) => p.type === "Cat"))}
        >
          <Text>Cat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setVisiblePets(pets.filter((p) => p.type === "Dog"))}
        >
          <Text>Dog</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() =>
            setVisiblePets(pets.filter((p) => p.type === "Rabbit"))
          }
        >
          <Text>Rabbit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Render the filtered list */}
      {visiblePets
        .filter((pet) =>
          pet.name.toLowerCase().includes(query.trim().toLowerCase())
        )
        .map((pet) => (
          <PetItem key={pet.id} pet={pet} />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerStyle: {
    backgroundColor: "#f9e3be",
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  searchInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
