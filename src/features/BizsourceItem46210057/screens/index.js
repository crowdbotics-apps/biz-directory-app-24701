import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/492f/b684/3d9477f8ac5492225f23e2579814462b"
        }}
        style={styles.ImageBackground_1_3}
      />
      <View style={styles.View_1_4}>
        <View style={styles.View_1_6}>
          <View style={styles.View_1_7}>
            <Text style={styles.Text_1_7}>Hello Jennifer</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2b/d7d2/a00a1c02bcf3a4d2d810247422bcf336"
          }}
          style={styles.ImageBackground_1_8}
        />
        <View style={styles.View_1_12}>
          <View source={{ uri: "null" }} style={styles.View_1_13} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0b8/f202/7305293c8e9603c6cd4b65187d5997e2"
            }}
            style={styles.ImageBackground_1_15}
          />
        </View>
        <View style={styles.View_1_16}>
          <View style={styles.View_1_17}>
            <Text style={styles.Text_1_17}>Featured listings</Text>
          </View>
        </View>
        <View style={styles.View_1_18}>
          <View style={styles.View_1_19}>
            <Text style={styles.Text_1_19}>Dashboard</Text>
          </View>
        </View>
        <View style={styles.View_1_20}>
          <View style={styles.View_1_21}>
            <Text style={styles.Text_1_21}>Privacy</Text>
          </View>
        </View>
        <View style={styles.View_1_22}>
          <View style={styles.View_1_23}>
            <Text style={styles.Text_1_23}>Terms and conditions</Text>
          </View>
        </View>
        <View style={styles.View_1_24}>
          <View style={styles.View_1_25}>
            <Text style={styles.Text_1_25}>New listings</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_26}>
        <View style={styles.View_1_27}>
          <View source={{ uri: "null" }} style={styles.View_1_28} />
        </View>
        <View style={styles.View_1_30}>
          <View style={styles.View_1_31}>
            <View style={styles.View_1_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4051/57cf/8f715a6425010055d0aea5b6e60da4d5"
                }}
                style={styles.ImageBackground_1_33}
              />
            </View>
          </View>
          <View style={styles.View_1_42}>
            <View style={styles.View_1_43}>
              <View style={styles.View_1_44}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f7b/3aec/b3d91e29de5530c7c0c49fe19c3aaf5a"
                  }}
                  style={styles.ImageBackground_1_45}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a517/abb8/05be9568fd033d223a434509584788d7"
            }}
            style={styles.ImageBackground_1_60}
          />
        </View>
        <View style={styles.View_1_61}>
          <View style={styles.View_1_62}>
            <View source={{ uri: "null" }} style={styles.View_1_63} />
          </View>
          <View style={styles.View_1_65}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a3/2f77/abb9cd384fcb93275c2afbea7462c500"
              }}
              style={styles.ImageBackground_1_66}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c1/fb8a/76fe3087cacb7c65049e90522b54e12c"
              }}
              style={styles.ImageBackground_1_67}
            />
          </View>
          <View style={styles.View_1_69}>
            <View style={styles.View_1_70}>
              <View style={styles.View_1_71}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4051/57cf/8f715a6425010055d0aea5b6e60da4d5"
                  }}
                  style={styles.ImageBackground_1_72}
                />
              </View>
            </View>
            <View style={styles.View_1_81}>
              <View style={styles.View_1_82}>
                <View style={styles.View_1_83}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f7b/3aec/b3d91e29de5530c7c0c49fe19c3aaf5a"
                    }}
                    style={styles.ImageBackground_1_84}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a517/abb8/05be9568fd033d223a434509584788d7"
              }}
              style={styles.ImageBackground_1_99}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_100}>
        <View style={styles.View_1_101}>
          <View source={{ uri: "null" }} style={styles.View_1_102} />
        </View>
        <View style={styles.View_1_104}>
          <View style={styles.View_1_105}>
            <View style={styles.View_1_106}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/901b/a291/8fbf46323115cbf809d4d505c03bc344"
                }}
                style={styles.ImageBackground_1_107}
              />
            </View>
          </View>
          <View style={styles.View_1_116}>
            <View style={styles.View_1_117}>
              <View style={styles.View_1_118}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d78/e662/b0e2f47c4334423370cd18dbb5bf0629"
                  }}
                  style={styles.ImageBackground_1_119}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a517/abb8/05be9568fd033d223a434509584788d7"
            }}
            style={styles.ImageBackground_1_134}
          />
        </View>
        <View style={styles.View_1_135}>
          <View style={styles.View_1_136}>
            <View source={{ uri: "null" }} style={styles.View_1_137} />
          </View>
          <View style={styles.View_1_139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a3/2f77/abb9cd384fcb93275c2afbea7462c500"
              }}
              style={styles.ImageBackground_1_140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c1/fb8a/76fe3087cacb7c65049e90522b54e12c"
              }}
              style={styles.ImageBackground_1_141}
            />
          </View>
          <View style={styles.View_1_143}>
            <View style={styles.View_1_144}>
              <View style={styles.View_1_145}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/901b/a291/8fbf46323115cbf809d4d505c03bc344"
                  }}
                  style={styles.ImageBackground_1_146}
                />
              </View>
            </View>
            <View style={styles.View_1_155}>
              <View style={styles.View_1_156}>
                <View style={styles.View_1_157}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d78/e662/b0e2f47c4334423370cd18dbb5bf0629"
                    }}
                    style={styles.ImageBackground_1_158}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a517/abb8/05be9568fd033d223a434509584788d7"
              }}
              style={styles.ImageBackground_1_173}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_174}>
        <View style={styles.View_1_175}>
          <View source={{ uri: "null" }} style={styles.View_1_176} />
        </View>
        <View style={styles.View_1_178}>
          <View style={styles.View_1_179}>
            <View style={styles.View_1_180}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4051/57cf/8f715a6425010055d0aea5b6e60da4d5"
                }}
                style={styles.ImageBackground_1_181}
              />
            </View>
          </View>
          <View style={styles.View_1_190}>
            <View style={styles.View_1_191}>
              <View style={styles.View_1_192}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b107/48c9/dfafcd30fb78837544b1961df1e7bec2"
                  }}
                  style={styles.ImageBackground_1_193}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60e0/6aee/547ececaef0a5bf5275f82e18d9a4c7a"
            }}
            style={styles.ImageBackground_1_208}
          />
        </View>
        <View style={styles.View_1_209}>
          <View style={styles.View_1_210}>
            <View source={{ uri: "null" }} style={styles.View_1_211} />
          </View>
          <View style={styles.View_1_213}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a3/2f77/abb9cd384fcb93275c2afbea7462c500"
              }}
              style={styles.ImageBackground_1_214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980c/f216/61134569576df62ad741fae4fe91aefb"
              }}
              style={styles.ImageBackground_1_215}
            />
          </View>
          <View style={styles.View_1_217}>
            <View style={styles.View_1_218}>
              <View style={styles.View_1_219}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4051/57cf/8f715a6425010055d0aea5b6e60da4d5"
                  }}
                  style={styles.ImageBackground_1_220}
                />
              </View>
            </View>
            <View style={styles.View_1_229}>
              <View style={styles.View_1_230}>
                <View style={styles.View_1_231}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b107/48c9/dfafcd30fb78837544b1961df1e7bec2"
                    }}
                    style={styles.ImageBackground_1_232}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60e0/6aee/547ececaef0a5bf5275f82e18d9a4c7a"
              }}
              style={styles.ImageBackground_1_247}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_248}>
        <View style={styles.View_1_249}>
          <View source={{ uri: "null" }} style={styles.View_1_250} />
        </View>
        <View style={styles.View_1_252}>
          <View style={styles.View_1_253}>
            <View style={styles.View_1_254}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/248a/f153/71f8880d33a8089b9eca0e4c33c7f0bd"
                }}
                style={styles.ImageBackground_1_255}
              />
            </View>
          </View>
          <View style={styles.View_1_264}>
            <View style={styles.View_1_265}>
              <View style={styles.View_1_266}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedb/afa8/58716e849de438fee549b3619be4e411"
                  }}
                  style={styles.ImageBackground_1_267}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60e0/6aee/547ececaef0a5bf5275f82e18d9a4c7a"
            }}
            style={styles.ImageBackground_1_282}
          />
        </View>
        <View style={styles.View_1_283}>
          <View style={styles.View_1_284}>
            <View source={{ uri: "null" }} style={styles.View_1_285} />
          </View>
          <View style={styles.View_1_287}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79a3/2f77/abb9cd384fcb93275c2afbea7462c500"
              }}
              style={styles.ImageBackground_1_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980c/f216/61134569576df62ad741fae4fe91aefb"
              }}
              style={styles.ImageBackground_1_289}
            />
          </View>
          <View style={styles.View_1_291}>
            <View style={styles.View_1_292}>
              <View style={styles.View_1_293}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/248a/f153/71f8880d33a8089b9eca0e4c33c7f0bd"
                  }}
                  style={styles.ImageBackground_1_294}
                />
              </View>
            </View>
            <View style={styles.View_1_303}>
              <View style={styles.View_1_304}>
                <View style={styles.View_1_305}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedb/afa8/58716e849de438fee549b3619be4e411"
                    }}
                    style={styles.ImageBackground_1_306}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60e0/6aee/547ececaef0a5bf5275f82e18d9a4c7a"
              }}
              style={styles.ImageBackground_1_321}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_3: {
    width: 1125,
    height: 2436,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_4: {
    width: 954.9000244140625,
    height: 1981.560791015625,
    top: 85.0999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75
  },
  View_1_6: {
    width: 637,
    height: 121,
    top: 488.1625061035156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.865997314453125
  },
  View_1_7: {
    width: 637,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 82,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_8: {
    width: 61.399993896484375,
    height: 54.79999542236328,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_12: {
    width: 137.4000244140625,
    height: 136.60000610351562,
    top: 288.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 817.5
  },
  View_1_13: {
    width: 137.4000244140625,
    height: 136.60000610351562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_15: {
    width: 28.20001220703125,
    height: 28.199981689453125,
    top: 100.70001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104.20001220703125
  },
  View_1_16: {
    width: 438,
    height: 78,
    top: 712.6010131835938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.62078857421875
  },
  View_1_17: {
    width: 438,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1_17: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 46,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_18: {
    width: 295,
    height: 78,
    top: 409.0706787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.930389404296875
  },
  View_1_19: {
    width: 295,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1_19: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 46,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_20: {
    width: 189,
    height: 78,
    top: 217.276611328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.018096923828125
  },
  View_1_21: {
    width: 189,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1_21: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 46,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_22: {
    width: 576,
    height: 78,
    top: 134.725830078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.018096923828125
  },
  View_1_23: {
    width: 576,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1_23: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 46,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_24: {
    width: 319,
    height: 78,
    top: 1903.560791015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.62078857421875
  },
  View_1_25: {
    width: 319,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1_25: {
    color: "rgba(143, 146, 161, 1)",
    fontSize: 46,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_26: {
    width: 716,
    height: 952,
    top: 945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79
  },
  View_1_27: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.20001220703125
  },
  View_1_28: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_30: {
    width: 338.18511962890625,
    height: 111,
    top: 775.9000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.6746826171875
  },
  View_1_31: {
    width: 296.4375,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.725341796875
  },
  View_1_32: {
    width: 296.4375,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_33: {
    width: 296.4375,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_42: {
    width: 280.5597839355469,
    height: 39,
    top: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.625335693359375
  },
  View_1_43: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_44: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_45: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_60: {
    width: 30.849794387817383,
    height: 37.4000244140625,
    top: 70.2999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_61: {
    width: 716,
    height: 952,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_62: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.20001220703125
  },
  View_1_63: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_65: {
    width: 716,
    height: 268,
    top: 684,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_66: {
    width: 716,
    height: 268,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_67: {
    width: 673.6000366210938,
    height: 224,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.100006103515625
  },
  View_1_69: {
    width: 338.18511962890625,
    height: 111,
    top: 775.9000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.6746826171875
  },
  View_1_70: {
    width: 296.4375,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.725341796875
  },
  View_1_71: {
    width: 296.4375,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_72: {
    width: 296.4375,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_81: {
    width: 280.5597839355469,
    height: 39,
    top: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.625335693359375
  },
  View_1_82: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_83: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_84: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_99: {
    width: 30.849794387817383,
    height: 37.4000244140625,
    top: 70.2999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_100: {
    width: 716,
    height: 952,
    top: 945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 894.225830078125
  },
  View_1_101: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.1741943359375
  },
  View_1_102: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_104: {
    width: 338.18511962890625,
    height: 111,
    top: 775.9000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.64886474609375
  },
  View_1_105: {
    width: 296.4375305175781,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.72528076171875
  },
  View_1_106: {
    width: 296.4375305175781,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_107: {
    width: 296.4375305175781,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_116: {
    width: 280.4598388671875,
    height: 39,
    top: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.72528076171875
  },
  View_1_117: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_118: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_119: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_134: {
    width: 30.849781036376953,
    height: 37.4000244140625,
    top: 70.2999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_135: {
    width: 716,
    height: 952,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_136: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.1741943359375
  },
  View_1_137: {
    width: 663.5,
    height: 909.0999755859375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_139: {
    width: 716,
    height: 268,
    top: 684,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_140: {
    width: 716,
    height: 268,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_141: {
    width: 673.6000366210938,
    height: 224,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.07415771484375
  },
  View_1_143: {
    width: 338.18511962890625,
    height: 111,
    top: 775.9000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.64886474609375
  },
  View_1_144: {
    width: 296.4375305175781,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.72528076171875
  },
  View_1_145: {
    width: 296.4375305175781,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_146: {
    width: 296.4375305175781,
    height: 34.7999267578125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_155: {
    width: 280.4598388671875,
    height: 39,
    top: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.72528076171875
  },
  View_1_156: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_157: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_158: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_173: {
    width: 30.849781036376953,
    height: 37.4000244140625,
    top: 70.2999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_174: {
    width: 716,
    height: 952.03564453125,
    top: 2110.89990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79
  },
  View_1_175: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.20001220703125
  },
  View_1_176: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_178: {
    width: 338.18511962890625,
    height: 111.099853515625,
    top: 775.900146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.6746826171875
  },
  View_1_179: {
    width: 296.4375,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.725341796875
  },
  View_1_180: {
    width: 296.4375,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_181: {
    width: 296.4375,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_190: {
    width: 280.5597839355469,
    height: 39,
    top: 72.099853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.625335693359375
  },
  View_1_191: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_192: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_193: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_208: {
    width: 30.849794387817383,
    height: 37.400146484375,
    top: 70.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_209: {
    width: 716,
    height: 952.03564453125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_210: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.20001220703125
  },
  View_1_211: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_213: {
    width: 716,
    height: 268,
    top: 684.03564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_214: {
    width: 716,
    height: 268,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_215: {
    width: 673.6000366210938,
    height: 224.10009765625,
    top: 13.96435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.100006103515625
  },
  View_1_217: {
    width: 338.18511962890625,
    height: 111.099853515625,
    top: 775.900146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.6746826171875
  },
  View_1_218: {
    width: 296.4375,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.725341796875
  },
  View_1_219: {
    width: 296.4375,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_220: {
    width: 296.4375,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_229: {
    width: 280.5597839355469,
    height: 39,
    top: 72.099853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.625335693359375
  },
  View_1_230: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_231: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_232: {
    width: 280.5597839355469,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_247: {
    width: 30.849794387817383,
    height: 37.400146484375,
    top: 70.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_248: {
    width: 716,
    height: 952.03564453125,
    top: 2110.89990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 894
  },
  View_1_249: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.4000244140625
  },
  View_1_250: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_252: {
    width: 338.18511962890625,
    height: 111.099853515625,
    top: 775.900146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.87469482421875
  },
  View_1_253: {
    width: 296.4375305175781,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.72528076171875
  },
  View_1_254: {
    width: 296.4375305175781,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_255: {
    width: 296.4375305175781,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_264: {
    width: 280.4598388671875,
    height: 39,
    top: 72.099853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.72528076171875
  },
  View_1_265: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_266: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_267: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_282: {
    width: 30.849781036376953,
    height: 37.400146484375,
    top: 70.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_283: {
    width: 716,
    height: 952.03564453125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_284: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.4000244140625
  },
  View_1_285: {
    width: 663.5,
    height: 909.2001953125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_287: {
    width: 716,
    height: 268,
    top: 684.03564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_288: {
    width: 716,
    height: 268,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_289: {
    width: 673.6000366210938,
    height: 224.10009765625,
    top: 13.96435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.29998779296875
  },
  View_1_291: {
    width: 338.18511962890625,
    height: 111.099853515625,
    top: 775.900146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58.87469482421875
  },
  View_1_292: {
    width: 296.4375305175781,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.72528076171875
  },
  View_1_293: {
    width: 296.4375305175781,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_294: {
    width: 296.4375305175781,
    height: 34.800048828125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_303: {
    width: 280.4598388671875,
    height: 39,
    top: 72.099853515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.72528076171875
  },
  View_1_304: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_305: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_306: {
    width: 280.4598388671875,
    height: 39,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_321: {
    width: 30.849781036376953,
    height: 37.400146484375,
    top: 70.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_2: { height: 2436 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
