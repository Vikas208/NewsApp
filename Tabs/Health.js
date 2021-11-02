import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./Heading";
import News from "./News";
import { API_KEY } from "./Api";
const Health = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API_KEY}`;
  return (
    <View>
      <View>
        <Heading heading="Health News" />
        <News news={Link} />
      </View>
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({});
