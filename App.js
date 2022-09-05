import * as React from 'react';
import { StatusBar, View, Image, StyleSheet, Animated } from 'react-native';

import DATA from './data';
import Picture, { width } from './Picture';

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar hidden />
      {DATA.map((img, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });

        return (
          <Animated.Image
            source={{ uri: img }}
            key={index}
            style={{ ...StyleSheet.absoluteFillObject, opacity }}
            blurRadius={30}
          />
        );
      })}
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item}
        horizontal
        pagingEnabled
        renderItem={({ item }) => <Picture item={item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
      />
    </View>
  );
};

export default App;
