import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from "./Api";
import Heading from "./Heading";
import News from "./News";

const Business = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`;
  return (
    <View>
      <View>
        <Heading heading="Business News" />
        <News news={Link} />
      </View>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({});
