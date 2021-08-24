/**
 * fileName: lab_schedule/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

import { styles } from "./styles";
import { Header, Footer } from "../../components";
import { COLOR_PRESETS } from "../../presets/colors";

export default class LabSchedule extends React.Component {
  render() {
    return (
      <>
        <View style={styles.rootContainer}>
          <Header />
          {this.renderBody()}
          <Footer />
        </View>
      </>
    );
  }

  renderBody() {
    return <View style={{ flex: 1 }}>{this.renderWeekDays()}</View>;
  }

  renderWeekDays() {
    return (
      <View
        style={{
          marginHorizontal: 30,
          marginVertical: 25,
          backgroundColor: "orange",
        }}
      >
        <FlatList
          data={["", "", "", "", "", "", ""]}
          horizontal
          renderItem={({ item, index }) => <WeekDay />}
        ></FlatList>
      </View>
    );
  }
}

function WeekDay({ isSelected, index }) {
  return (
    <View
      style={{
        backgroundColor: isSelected ? "blue" : COLOR_PRESETS.PRIMARY.LIGHT,
        marginRight: 4,
        padding: 10,
        borderBottomLeftRadius: index === 0 ? 10 : 0,
        borderTopLeftRadius: index === 0 ? 10 : 0,
      }}
    >
      <Text
        style={{
          color: "red",
        }}
      >
        TODAY
      </Text>
      <Text>July 19</Text>
    </View>
  );
}
