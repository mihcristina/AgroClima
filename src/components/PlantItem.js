import React from 'react'
import { View, StyleSheet, Text } from "react-native";

export function PlantItem({ name, favorablePlantingSeason, plantingType, spacing, startOfHarvest, normalProductivity }) {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{favorablePlantingSeason}</Text>
            <Text style={styles.description}>{plantingType}</Text>
            <Text style={styles.description}>{spacing}</Text>
            <Text style={styles.description}>{startOfHarvest}</Text>
            <Text style={styles.description}>{normalProductivity}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },

    content: {
        flex: 1,
        marginLeft: 16,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#6BCDC3',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: "#000",
    },
});