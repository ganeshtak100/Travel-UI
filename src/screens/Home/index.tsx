/* eslint-disable react-native/no-inline-styles */
import {COLORS} from '@constants/colors';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Home: React.FC = () => {
  const RenderItem = useCallback(() => {
    return <View></View>;
  }, []);
  const RenderHeader = useCallback(() => {
    return <View></View>;
  }, []);
  const RenderFooter = useCallback(() => {
    return <View></View>;
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      <Text>Home</Text>
      <FlatList
        data={[1]}
        ListHeaderComponent={RenderHeader}
        renderItem={({item, index}) => <RenderItem />}
        ListFooterComponent={RenderFooter}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
