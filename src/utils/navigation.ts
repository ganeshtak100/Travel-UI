import {CommonActions, createNavigationContainerRef, StackActions} from '@react-navigation/native'
import {ROUTES, ROUTES_PARAMS} from 'constants/routes'

export const navigationRef = createNavigationContainerRef<ROUTES_PARAMS>()
type INavigateProps = {
  name: ROUTES
  params?: object | number | string
}
export const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export const push = (name: string, params: Object) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params))
  }
}

export const pop = (name: string, params?: Object) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop())
  }
}

export const goBack = () => {
  if (navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export const navigateAndReset = (routes: any = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    )
  }
}

export const navigateAndSimpleReset = (name: string, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    )
  }
}

export const navigateAndSimpleResetWithParams = (name: string, params: any, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}, {...params}],
      }),
    )
  }
}