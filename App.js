import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  ToastAndroid,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import Home from "./Tabs/Home";
import Business from "./Tabs/Business";
import Health from "./Tabs/Health";
import Sports from "./Tabs/Sports";
import Entertainment from "./Tabs/Entertainment";
import Science from "./Tabs/Science";
import Technology from "./Tabs/Technology";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useState } from "react";

const renderScene = SceneMap({
  home: Home,
  business: Business,
  health: Health,
  sports: Sports,
  entertainment: Entertainment,
  science: Science,
  technology: Technology,
});
export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "business", title: "Business" },
    { key: "health", title: "Health" },
    { key: "sports", title: "Sports" },
    { key: "entertainment", title: "Entertainment" },
    { key: "science", title: "Science" },
    { key: "technology", title: "Technology" },
  ]);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#24f2b1"
        translucent={true}
      />

      <TabView
        style={[styles.scence]}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled
            tabStyle={{
              width: "auto",
              height: "auto",
              backgroundColor: "#24f2b1",
            }}
            activeColor="black"
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scence: {
    display: "flex",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
