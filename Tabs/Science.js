import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from "./Api";
import Heading from "./Heading";
import News from "./News";

const Science = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${API_KEY}`;
  return (
    <View>
      <View>
        <Heading heading="Science News" />
        <News news={Link} />
      </View>
    </View>
  );
};

export default Science;

const styles = StyleSheet.create({});
