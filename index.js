import { registerRootComponent } from 'expo'

import { patchFlatListProps } from 'react-native-web-refresh-control'

import App from './src/App'

patchFlatListProps()

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
