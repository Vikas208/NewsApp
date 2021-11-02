import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./Heading";
import News from "./News";
import { API_KEY } from "./Api";

const Sports = () => {
  const Link = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`;
  return (
    <View>
      <View>
        <Heading
          heading="
        Sports News"
        />
        <News news={Link} />
      </View>
    </View>
  );
};

export default Sports;

const styles = StyleSheet.create({});
