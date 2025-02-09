import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { normalize, respFontSize } from '@utils/responsiveSize'
import { Icons } from '@assets/svg'
import { Fonts } from '@constants/fonts'
import { COLORS } from '@constants/colors'

const SearchBar = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{borderRadius:22,paddingVertical:normalize(16),paddingHorizontal:normalize(22),
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor:COLORS.lightBlue
    }}>
      <View style={{flexDirection:"row",alignItems:"center",flex:0.8,gap:3}}>
        <Icons.SearchStar/>
        <Text style={{
          fontSize:respFontSize(14),
          fontFamily:Fonts.PoppinsRegular,
          color:COLORS.light_Blue,
          textAlign:'center',
          textAlignVertical:"center"
        }}>Search or Ask anything...</Text>
          
    </View>
    <TouchableOpacity activeOpacity={0.7} style={{flex:0.2,justifyContent:'flex-end',flexDirection:"row",alignItems:"center"}}><Icons.SearchMenu width={22}height={22}/></TouchableOpacity>
    </TouchableOpacity>
  )
}

export default SearchBar

const styles = StyleSheet.create({})