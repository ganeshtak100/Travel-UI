import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { respFontSize, screenWidth } from '@utils/responsiveSize'
import FastImage from 'react-native-fast-image'
import { Fonts } from '@constants/fonts'
import { COLORS } from '@constants/colors'

const CityFrame = ({data}:any) => {
  return (
    <View style={{gap:12}}>
      <FastImage
      source={data.image}
      style={{height:screenWidth/3,width:screenWidth/4.5,borderRadius:44}}
      resizeMode='cover'
      />
      <Text numberOfLines={2} style={{
        fontSize:respFontSize(14),
        fontFamily:Fonts.PoppinsMedium,
        color:COLORS.black,
        textAlign:'center',
        maxWidth:screenWidth/4.5
      }}>{data.cityName}</Text>
    </View>
  )
}

export default CityFrame

const styles = StyleSheet.create({})