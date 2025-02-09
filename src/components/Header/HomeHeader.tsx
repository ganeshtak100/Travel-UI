import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { uaeFlag } from '@assets/image'
import { Icons } from '@assets/svg'
import { normalize, respFontSize, responsiveHeight, responsiveWidth, width } from '@utils/responsiveSize'
import { Fonts } from '@constants/fonts'
import { COLORS } from '@constants/colors'
import DownArrow from '@components/Custom/DownArrow'

const HomeHeader:React.FC = () => {

  const RoundIcons=(icon:any)=>{
    return(
      <TouchableOpacity activeOpacity={0.7} style={{borderRadius:100,
        padding:8,
        backgroundColor:COLORS.lightBlue
      }}>
{icon}
      </TouchableOpacity>
    )
  }
  return (
    <View style={{flexDirection:"row",
      justifyContent:"space-between",alignItems:"center",paddingTop:normalize(22)
    }}>
      <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
      <FastImage
      source={uaeFlag}
      style={{width:responsiveWidth(38),height:responsiveHeight(38),borderRadius:100,}}resizeMode="contain"/>
      <TouchableOpacity activeOpacity={0.7} style={{gap:2}}>
      <View style={{flexDirection:"row",gap:normalize(5),alignItems:"center"}}>
        <Text numberOfLines={1} style={{
          fontSize:respFontSize(12),
          fontFamily:Fonts.PoppinsSemibold,
          color:COLORS.white,
          includeFontPadding:false,
          maxWidth:responsiveWidth(width/3)

        }}>Palm Jumeirah</Text>
        <View style={{top:2.2}}>
        <Icons.DownArrow width={responsiveWidth(24)}height={responsiveHeight(19)}/>
        </View>
      </View>
      <Text numberOfLines={1} style={{
          fontSize:respFontSize(10),
          fontFamily:Fonts.PoppinsRegular,
          color:COLORS.light_Blue,
          includeFontPadding:false,
          maxWidth:responsiveWidth(width/2.2)

        }}>Dubai, United Arab Emirates</Text>
      </TouchableOpacity>

      </View>
      <View style={{flexDirection:"row",gap:6,alignItems:"center"}}>
      {RoundIcons(<Icons.BalanceIcon/>)}
      {RoundIcons(<Icons.BellIcon/>)}


      </View>

    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})