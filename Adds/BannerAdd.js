import React from "react";
import { AdMobBanner } from "expo-ads-admob";
import { View } from "react-native";

function BannerAdd(){
  const test = "ca-app-pub-3940256099942544/6300978111" //test ad
  return (
    <View>
      <AdMobBanner
        adUnitID={test}
        bannerSize={"fullBanner"}
        onDidFailToReceiveAdWithError={() => console.log("error")}
      />
    </View>
  );
};

export default BannerAdd
