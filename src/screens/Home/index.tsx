import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { COLORS } from '@constants/colors'

const Home:React.FC = () => {

    const RenderItem=useCallback(()=>{
        return(<View></View>)
    },[])
    const RenderHeader=useCallback(()=>{
        return(<View></View>)
    },[])
    const RenderFooter=useCallback(()=>{
        return(<View></View>)
    },[])
  return (
    <View sty={{flex: 1,backgroundColor:COLORS.lightGray}}>
        <View></View>
        <FlatList
        data={[1]}
        ListHeaderComponent={RenderHeader}
        renderItem={({item,index})=><RenderItem/>}
        ListFooterComponent={RenderFooter}
        />
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})