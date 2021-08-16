/**
 * fileName: home/index.js
 * description: the home screen component
 */

import React, { Component } from "react";
import { Dimensions, Image, Text, View, FlatList } from "react-native";

import Icon from "react-native-vector-icons/Fontisto";
import { Input } from "react-native-elements";

import { Header, Footer } from "../../components";
import { HealthOrbitImage } from "../../assets";
import { styles } from "./styles";
import { Divider } from "react-native-elements/dist/divider/Divider";
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
          leftIcon={<Icon name="search" size={20} color="black" />}
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
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/image.png")}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 15 }}>
              Vitamin B 12
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 8,
            }}
          >
            <View style={{ flex: 0.8 }}>
              <Text style={{ fontSize: 12, fontWeight: "200" }}>
                Known as Vit B12
              </Text>

              <Text style={{ fontSize: 12, fontWeight: "200" }}>
                Conventional Blood
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                marginLeft: 4,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"\u20B9"}500
              </Text>
            </View>
          </View>
        </View>
        <Divider />
        <Text style={{ textAlign: "center" }}>Add</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <Header />
        {this.renderBody()}
        <Footer />
      </View>
    );
  }
}

export default HomeScreen;
