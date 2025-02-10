import {Icons} from '@assets/svg';
import {COLORS} from '@constants/colors';
import {Fonts} from '@constants/fonts';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {
  normalize,
  respFontSize,
  responsiveHeight,
  screenWidth,
} from '@utils/responsiveSize';
import React, {useState} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageSlider from './ImageSlider';
import SkeletonLoader from './SkelentonLoader';
const tabs = [
  {
    id: '1',
    label: 'Beach',
    icon: <Icons.Sunrise color={COLORS.primary} />,
    lightIcons: <Icons.Sunrise color={COLORS.black} />,
  },
  {
    id: '2',
    label: 'Desert',
    icon: <Icons.Desert color={COLORS.primary} />,
    lightIcons: <Icons.Desert color={COLORS.black} />,
  },
  {
    id: '3',
    label: 'Mountain',
    icon: <Icons.Mountain color={COLORS.primary} />,
    lightIcons: <Icons.Mountain color={COLORS.gray1} />,
  },
  {
    id: '4',
    label: 'Temple',
    icon: <Icons.Temple color={COLORS.primary} />,
    lightIcons: <Icons.Temple color={COLORS.gray1} />,
  },
  {
    id: '5',
    label: 'Tower',
    icon: <Icons.Temple color={COLORS.primary} />,
    lightIcons: <Icons.Temple color={COLORS.gray1} />,
  },
];
const Explore = () => {
  const [text, setText] = React.useState('');
  const [activeTab, setActiveTab] = useState(0); // Active tab state
  const [underlinePosition] = useState(new Animated.Value(0)); // Animated value for underline
  const [isLoading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => {
        setLoading(true);
      };
    }, []),
  );
  const SearchBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: normalize(16),
          paddingVertical: normalize(8),
          backgroundColor: COLORS.shadeGray,
          gap: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.9,
            gap: 3,
            borderRadius: 26,
            height: responsiveHeight(60),
            backgroundColor: COLORS.white,
            paddingHorizontal: normalize(16),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
            elevation: 17,
          }}>
          <View style={{flex: 0.08}}>
            <Icons.SearchStar color={COLORS.black} />
          </View>
          <TextInput
            value={text}
            onChangeText={setText}
            style={{
              fontSize: respFontSize(14),
              fontFamily: Fonts.PoppinsRegular,
              color: COLORS.black,
              flex: 0.94,
            }}
            placeholder="Search or Ask anything..."
            placeholderTextColor={COLORS.black}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: 0.21,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            borderRadius: 22,
            height: responsiveHeight(60),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 19,
          }}>
          <Icons.SearchMenu width={26} height={26} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    );
  };

  const CustomTabBar = () => {
    const onTabPress = index => {
      setActiveTab(index);
      Animated.spring(underlinePosition, {
        toValue: index * (screenWidth / tabs.length),
        useNativeDriver: false,
      }).start();
    };

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabButton}
              onPress={() => onTabPress(index)}>
              {activeTab === index ? tab.icon : tab.lightIcons}
              <Text
                style={[
                  styles.label,
                  activeTab === index && styles.activeLabel,
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 0.7,
            borderBottomColor: COLORS.gray1,
          }}>
          <Animated.View
            style={[
              styles.underline,
              {
                transform: [
                  {
                    translateX: underlinePosition, // Move the underline with animation
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    );
  };
  const RenderItem = ({item, index}: any) => {
    return (
      <View
        key={item.id}
        style={{
          backgroundColor: COLORS.shadeGray,
          marginBottom: 10,
        }}>
        <ImageSlider images={item.data} />
        <Text
          style={{
            position: 'absolute',
            fontSize: respFontSize(20),
            fontFamily: Fonts.PoppinsSemibold,
            bottom: 26,
            color: COLORS.white,
            left: '9%',
          }}>{`Flat ${item.discount} Off`}</Text>
      </View>
    );
  };
  const data = [
    {
      id: '1',
      discount: '15%',
      rating: '8.0',
      price: '$25,000',
      state: 'Bali',
      country: 'Indonesia',
      location: 'Denpasar,Bali,Indonesia',
      data: [
        {
          id: '1',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          id: '2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlycYUPFeM5Eiu5IxqGEPr4zdPjZTpucySkQ&s',
        },
        {
          id: '3',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzyDr7_VcVqnezaKEzyVuu5zzfQMV4MZQag&s',
        },
      ],
    },
    {
      id: '2',
      discount: '15%',
      rating: '8.0',
      price: '$25,000',
      state: 'Kyoto',
      country: 'Japan',
      location: 'Kyoto,Japan',
      data: [
        {
          id: '1',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          id: '2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlycYUPFeM5Eiu5IxqGEPr4zdPjZTpucySkQ&s',
        },
        {
          id: '3',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzyDr7_VcVqnezaKEzyVuu5zzfQMV4MZQag&s',
        },
      ],
    },
    {
      id: '1',
      discount: '15%',
      rating: '8.0',
      price: '$25,000',
      state: 'Bali',
      country: 'Indonesia',
      location: 'Denpasar,Bali,Indonesia',
      data: [
        {
          id: '1',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          id: '2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlycYUPFeM5Eiu5IxqGEPr4zdPjZTpucySkQ&s',
        },
        {
          id: '3',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzyDr7_VcVqnezaKEzyVuu5zzfQMV4MZQag&s',
        },
      ],
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.shadeGray,
        paddingTop: normalize(10),
      }}>
      {SearchBar()}
      {CustomTabBar()}
      {isLoading ? (
        <SkeletonLoader count={3} />
      ) : (
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingBottom: normalize(20),
            paddingHorizontal: 16,
            gap: 12,
            paddingTop: 16,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
      {!isLoading && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 18,
            paddingVertical: 3,
            borderRadius: 16,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 10,
            flexDirection: 'row',
            gap: 3,
          }}>
          <Icons.Map color={COLORS.white} width={18} />
          <Text
            style={{
              fontSize: respFontSize(8),
              color: COLORS.white,
              fontFamily: Fonts.PoppinsSemibold,
            }}>
            Map
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 8,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabButton: {
    alignItems: 'center',
    padding: 10,
  },
  label: {
    marginTop: normalize(4),
    fontSize: respFontSize(12),
    color: '#797979',
    fontFamily: Fonts.PoppinsRegular,
  },
  activeLabel: {
    color: COLORS.primary,
    fontFamily: Fonts.PoppinsMedium,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    width: (screenWidth - normalize(160)) / tabs.length,
    height: 3,
    backgroundColor: 'black', // Color of the underline
    marginHorizontal: 16,
  },
});
