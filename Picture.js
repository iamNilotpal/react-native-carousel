import { View, Image, Dimensions } from 'react-native';
import React from 'react';

export const { width, height } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

const Picture = ({ item }) => {
  return (
    <View
      style={{
        width,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 40,
      }}>
      <Image
        source={{ uri: item }}
        style={{
          height: imageH,
          width: imageW,
          resizeMode: 'cover',
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Picture;
