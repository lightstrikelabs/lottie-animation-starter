import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Stack } from "expo-router";

import { Text } from "@/components/ui/text";
import { LottieAnimation } from "@/components/lottie/LottieAnimation";
import { ELottieAnimationName } from "@/components/lottie/lottieAnimationConsts";

export default function LottieTesterScreen() {
  const [selectedAnimation, setSelectedAnimation] = useState<ELottieAnimationName>(
    ELottieAnimationName.MOON,
  );

  const animationNames = Object.values(ELottieAnimationName);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Lottie Tester" }} />
      <View style={styles.controlsContainer}>
        <Text style={styles.label}>Select Animation:</Text>
        <View style={styles.buttonContainer}>
          {animationNames.map((name) => (
            <Pressable
              key={name}
              style={[
                styles.button,
                selectedAnimation === name && styles.selectedButton,
              ]}
              onPress={() => setSelectedAnimation(name)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedAnimation === name && styles.selectedButtonText,
                ]}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.animationContainer}>
        {selectedAnimation ? (
          <LottieAnimation
            animationName={selectedAnimation}
            shouldLoop={true}
          />
        ) : (
          <Text>No animation selected</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0", // A light background color
  },
  controlsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: "#0056b3",
    borderColor: '#004085',
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  selectedButtonText: {
    color: '#e0e0e0',
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
