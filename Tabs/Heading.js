import React from "react";
import { View, Text } from "react-native";

const Heading = ({ heading }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
          backgroundColor: "#000",
          borderRadius: 999,
          color: "white",
          margin: 10,
        }}
      >
        {heading}
      </Text>
    </View>
  );
};

export default Heading;
