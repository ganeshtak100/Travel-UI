import {height} from '@utils/responsiveSize';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonLoader = ({count = 5}) => {
  const data = Array(count).fill(null); // Creates an array of 'count' items

  const renderItem = () => (
    <SkeletonPlaceholder borderRadius={8}>
      <View style={styles.skeletonItem} />
    </SkeletonPlaceholder>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  skeletonItem: {
    width: '100%',
    height: height / 4,
    marginBottom: 10,
  },
});

export default SkeletonLoader;
