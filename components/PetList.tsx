import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import pets from "@/data/pets";
import PetItem from "./PetItem";

const PetList = () => {
  // const petList = pets.map((pet) => <PetItem key={pet.id} pet={pet} />);
  const [query, setQuery] = useState("");
  const petList = pets.map((pet) =>
    pet.name.toLowerCase().includes(query.trim().toLowerCase()) ? (
      <PetItem key={pet.id} pet={pet} />
    ) : null
  );
  //---------------------------------
  let [type, setType] = useState({ petList });

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

      {/* …now render petList safely: */}

      {/* Filter by type */}
      <ScrollView horizontal contentContainerStyle={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text>Cat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text>Dog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text>Rabbit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Pet List */}
      {petList}
    </ScrollView>
  );
};

export default PetList;

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
