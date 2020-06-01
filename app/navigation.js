import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from './screens/SignUpScreen';
import Otp from './screens/Otp';

const MainNavigator = createStackNavigator({
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			header: null,
		},
	},
	Otp: {
		screen: Otp,
		navigationOptions: {
			header: null,
		},
	}
}, {
	initialRouteName: 'SignUp',
})

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;