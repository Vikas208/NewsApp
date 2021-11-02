import React from "react";
import { StyleSheet, Text, View } from "react-native";
import News from "./News";
import Heading from "./Heading";
import { API_KEY } from "./Api";
const Business = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
  return (
    <View>
      <Heading heading="Latest News" />
      <News news={Link} />
    </View>
  );
};
export default Business;
