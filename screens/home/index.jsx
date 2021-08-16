/**
 * fileName: home/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import {  Image, Text, View, FlatList } from "react-native";

import Icon from "react-native-vector-icons/Fontisto";
import { Input } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import { Divider } from "react-native-elements";
import { COLOR_PRESETS } from "../../presets/colors";

export class HomeScreen extends Component {
  renderBody() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <Image source={HealthOrbitImage} style={styles.logoSize} />
        </View>

        <Input
          inputContainerStyle={styles.inputContainer}
          leftIconContainerStyle={styles.leftIconContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputRootContainer}
          placeholder="Search for pathologies, laboratories"
          leftIcon={<Icon name="search" size={18} color="gray" />}
        />

        <Text style={styles.testHeader}>Top Diagnostic Test</Text>
        <FlatList
          data={[1, 2, 3, 4]}
          numColumns={2}
          renderItem={({ item }) => this.renderTestCard(item)}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    );
  }

  renderTestCard() {
    return (
      <View style={styles.cardRootContainer}>
        <View style={styles.cardContentContainer}>
          <View style={styles.cardHeaderContainer}>
            <Image
              source={require("../../assets/images/image.png")}
              style={styles.cardImg}
            />
            <Text style={styles.testName}>Vitamin B 12</Text>
          </View>
          <View style={styles.cardBodyContainer}>
            <View style={{ flex: 0.7 }}>
              <Text style={styles.cardBodyText}>Known as Vit B12</Text>
              <Text style={styles.cardBodyText}>Conventional Blood</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{"\u20B9"}500</Text>
            </View>
          </View>
        </View>
        <Divider color={COLOR_PRESETS.PRIMARY.DARK} />
        <Text style={styles.addText}>ADD</Text>
      </View>
    );
  }

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
}

export default HomeScreen;
