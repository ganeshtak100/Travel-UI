import React, { memo, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES, ROUTES_PARAMS } from "@constants/routes";
import { navigationRef } from "@utils/navigation";
import { IS_IOS } from "@constants/AppConstant";
import { TabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator<ROUTES_PARAMS>();

export const Navigation = memo(() => {
 
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle={IS_IOS ? "dark-content" : "light-content"}
      />
      <Stack.Navigator
        screenOptions={{ gestureEnabled: true, headerShown: false }}
      >
            <Stack.Screen
              name={ROUTES.TAB_NAVIGATION}
              component={TabNavigation}
              options={{
                headerShown: false,
                animation: "slide_from_right",
              }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
});