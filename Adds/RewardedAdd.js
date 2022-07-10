import { AdMobRewarded } from "expo-ads-admob";

const test = "ca-app-pub-3940256099942544/5224354917";
function RewardedAdd() {
  AdMobRewarded.setAdUnitID(test);
  AdMobRewarded.requestAdAsync().then(() => {
    AdMobRewarded.showAdAsync()
      .then(() => null)
      .catch((e) => console.log(e.message));
  });
}

export default RewardedAdd;
