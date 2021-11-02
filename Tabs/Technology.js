import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./Heading";
import News from "./News";

import { API_KEY } from "./Api";
const Technology = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`;
  return (
    <View>
      <View>
        <Heading heading="Technology News" />
        <News news={Link} />
      </View>
    </View>
  );
};

export default Technology;

const styles = StyleSheet.create({});
