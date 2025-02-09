import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CityFrame from '@components/Frame/CityFrame'
import { normalize, respFontSize } from '@utils/responsiveSize'
import { COLORS } from '@constants/colors'
import { Fonts } from '@constants/fonts'

const CityList = (props:any) => {
    const RenderList = ({item}: any) => {
      return ( <CityFrame data={item}/>)
    }
  return (
     <View
       style={{
         paddingHorizontal: normalize(16),
         paddingVertical: normalize(16),
         gap: normalize(12),
         backgroundColor: COLORS.shadeGray,
       }}>
       <View
         style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           alignItems: 'center',
         }}>
         <Text
           style={{
             fontWeight: 'bold',
             fontFamily: Fonts.PoppinsSemibold,
             fontSize: respFontSize(20),
             color: COLORS.black,
           }}>
           Popular Cities
         </Text>
       </View>
       <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={props.data}
         renderItem={RenderList}
         contentContainerStyle={{gap: normalize(12)}}
         pagingEnabled
       />
    </View>
  )
}

export default CityList