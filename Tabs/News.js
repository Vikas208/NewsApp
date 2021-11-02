import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
const News = ({ news }) => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(news)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <FlatList
        data={data.articles}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => {
          return isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <TouchableOpacity style={styles.box}>
              <View style={styles.view}>
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{
                    width: 300,
                    height: 150,
                    resizeMode: "cover",
                    margin: 10,
                  }}
                />

                <Text
                  style={{ fontSize: 16, fontWeight: "bold", margin: 10 }}
                  onPress={() => {
                    Linking.openURL(item.url).catch((err) => {
                      console.log(err);
                      ToastAndroid(`can't Open URL`);
                    });
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ margin: 8 }}>
                  {String(item.content).length < 130
                    ? item.content
                    : String(item.content).slice(0, 130) + "..."}
                </Text>
                <Text style={{ margin: 10, color: "blue" }}>
                  Published At :{" "}
                  {new Date(String(item.publishedAt)).toDateString()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  box: {
    margin: 10,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
  },
  view: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
