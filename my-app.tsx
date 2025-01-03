import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const bgHeader = require('./assets/bg-header-login.png');
const guy = require('./assets/loginGuy.png');

export default function App() {
	return (
		<View className='bg-gray-100'>
			<View className="w-auto">
				<Image source={bgHeader} />
			</View>
			<View className='grid flex-grow gap-8 px-4 py-8 lg:grid-cols-2'>
				<View className='flex flex-col items-center justify-center'>
					<Text className='text-[800px]'>Tenderos</Text>
					<Image source={guy} />
				</View>
			</View>
		</View>
	);
}