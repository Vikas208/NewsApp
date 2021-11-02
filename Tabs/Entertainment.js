import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from "./Api";
import Heading from "./Heading";
import News from "./News";
const Entertainment = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KE}`;
  return (
    <View>
      <View>
        <Heading heading="Entertainement News" />
        <News news={Link} />
      </View>
    </View>
  );
};

export default Entertainment;

const styles = StyleSheet.create({});
