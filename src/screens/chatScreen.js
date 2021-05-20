import React from 'react';
import { View, Text, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import {
	styles,
	wp,
	hp,
	primaryColor,
	deepBlue,
	fontBold,
	fontSemiBold,
	fontRegular,
	poppinsBold,
	fontLight,
	poppinsRegular
} from '../components/Assets/style/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialNoIcons from 'react-native-vector-icons/MaterialIcons';


const chatScreen = (props) => {
	return (
		<View style={{ ...styles.container, paddingHorizontal: 20 }}>
			<View style={{ ...styles.profileSectionView, width: wp(60), alignSelf: 'flex-start' }}>
				<View style={{ ...styles.iconHolder, borderColor: deepBlue }}>
					<Antdesign name={'minus'} color={deepBlue} size={wp(5)} />
				</View>
				<Text style={{ ...styles.profileText, color: deepBlue, fontFamily: poppinsBold, fontSize: wp(4.3) }}>
					Message
				</Text>
			</View>
			<View style={styles.chatScreenSupprt}>
				<TouchableOpacity
					style={{
						...styles.supportButton,
						backgroundColor: 'rgb(244 ,243 , 253)',
						width: wp(65),
						height: hp(7)
					}}
				>
					<Feather
						name={'headphones'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(4)}
						style={{ paddingHorizontal: wp(3) }}
					/>
					<Text style={{ ...styles.titleText, color: 'rgb(88 , 62 ,242 )' }}>تواصل مع الدعم الفنى</Text>
				</TouchableOpacity>
				<Image
					style={styles.searchImage}
					resizeMode={'contain'}
					source={require('../components/Assets/photos/search.png')}
				/>
			</View>
			<ScrollView>
				<View>
					<View style={styles.chatCard}>
						<View style={styles.chatScreenImage}>
							<Image
								style={styles.chatImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/avtar.png')}
							/>
							<View style={{ ...styles.onlineDotView, backgroundColor: 'rgb(193 , 189 ,217)' }} />
						</View>
						<View style={styles.chatCardInfoView}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontSemiBold,
									fontSize: wp(3.1)
								}}
							>
								مريم
							</Text>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontRegular,
									fontSize: wp(3.4),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								ساصل فى الوقت 7:20 PM
							</Text>
						</View>
						<View style={{ ...styles.chatCardInfoView, marginHorizontal: wp(8) }}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: poppinsBold,
									fontSize: wp(3),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								1 min
							</Text>
							<View style={styles.messageCounterView}>
								<Text
									style={{
										...styles.titleText,
										fontFamily: poppinsBold,
										fontSize: wp(3),
										color: 'white'
									}}
								>
									1
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.chatCard}>
						<View style={styles.chatScreenImage}>
							<Image
								style={styles.chatImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/avtar.png')}
							/>
							<View style={{ ...styles.onlineDotView, backgroundColor: 'rgb(193 , 189 ,217)' }} />
						</View>
						<View style={styles.chatCardInfoView}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontSemiBold,
									fontSize: wp(3.1)
								}}
							>
								مريم
							</Text>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontRegular,
									fontSize: wp(3.4),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								ساصل فى الوقت 7:20 PM
							</Text>
						</View>
						<View style={{ ...styles.chatCardInfoView, marginHorizontal: wp(8) }}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: poppinsBold,
									fontSize: wp(3),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								1 min
							</Text>
							<View style={styles.messageCounterView}>
								<Text
									style={{
										...styles.titleText,
										fontFamily: poppinsBold,
										fontSize: wp(3),
										color: 'white'
									}}
								>
									1
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.chatCard}>
						<View style={styles.chatScreenImage}>
							<View style={styles.onlineDotView} />
							<Image
								style={styles.chatImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/avtar.png')}
							/>
						</View>
						<View style={styles.chatCardInfoView}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontSemiBold,
									fontSize: wp(3.1)
								}}
							>
								مريم
							</Text>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontRegular,
									fontSize: wp(3.4),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								ساصل فى الوقت 7:20 PM
							</Text>
						</View>
						<View style={{ ...styles.chatCardInfoView, marginHorizontal: wp(8) }}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: poppinsBold,
									fontSize: wp(3),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								1 min
							</Text>
							<View style={styles.messageCounterView}>
								<Text
									style={{
										...styles.titleText,
										fontFamily: poppinsBold,
										fontSize: wp(3),
										color: 'white'
									}}
								>
									1
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.chatCard}>
						<View style={styles.chatScreenImage}>
							<Image
								style={styles.chatImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/avtar.png')}
							/>
							<View style={{ ...styles.onlineDotView, backgroundColor: 'rgb(193 , 189 ,217)' }} />
						</View>
						<View style={styles.chatCardInfoView}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontSemiBold,
									fontSize: wp(3.1)
								}}
							>
								مريم
							</Text>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontRegular,
									fontSize: wp(3.4),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								ساصل فى الوقت 7:20 PM
							</Text>
						</View>
						<View style={{ ...styles.chatCardInfoView, marginHorizontal: wp(8) }}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: poppinsBold,
									fontSize: wp(3),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								1 min
							</Text>
							<View style={styles.messageCounterView}>
								<Text
									style={{
										...styles.titleText,
										fontFamily: poppinsBold,
										fontSize: wp(3),
										color: 'white'
									}}
								>
									1
								</Text>
							</View>
						</View>
					</View>
					<View style={styles.chatCard}>
						<View style={styles.chatScreenImage}>
							<Image
								style={styles.chatImage}
								resizeMode={'cover'}
								source={require('../components/Assets/photos/avtar.png')}
							/>
							<View style={{ ...styles.onlineDotView, backgroundColor: 'rgb(193 , 189 ,217)' }} />
						</View>
						<View style={styles.chatCardInfoView}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontSemiBold,
									fontSize: wp(3.1)
								}}
							>
								مريم
							</Text>
							<Text
								style={{
									...styles.titleText,
									fontFamily: fontRegular,
									fontSize: wp(3.4),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								ساصل فى الوقت 7:20 PM
							</Text>
						</View>
						<View style={{ ...styles.chatCardInfoView, marginHorizontal: wp(8) }}>
							<Text
								style={{
									...styles.titleText,
									fontFamily: poppinsBold,
									fontSize: wp(3),
									color: 'rgb(120 , 120 ,157)'
								}}
							>
								1 min
							</Text>
							<View style={styles.messageCounterView}>
								<Text
									style={{
										...styles.titleText,
										fontFamily: poppinsBold,
										fontSize: wp(3),
										color: 'white'
									}}
								>
									1
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={{ ...styles.saveView, top: hp(90) }}>
				<View style={styles.bottomTabNavigator}>
					<View style={{...styles.iconHolderNavigator, }}>
						<MaterialIcons name={'home-outline'} color={'rgb(184 , 184 ,210 )'} size={wp(7)} />
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								fontSize: wp(2.6),
								color: 'rgb(184 , 184 ,210 )'
							}}
						>
							الرئيسية
						</Text>
					</View>
                    <View style={{...styles.iconHolderNavigator}}>
						<MaterialNoIcons name={'list-alt'} color={'rgb(184 , 184 ,210 )'} size={wp(7)} />
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								fontSize: wp(2.7),
								color: 'rgb(184 , 184 ,210 )'
							}}
						>
							حجوزات
						</Text>
					</View>
                    <View style={{...styles.iconHolderNavigator, borderTopColor:primaryColor}}>
						<Icon name={'chatbox'} color={primaryColor} size={wp(7)} />
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								fontSize: wp(2.7),
								color: primaryColor
							}}
						>
							شات
						</Text>
					</View>
                    <View style={{...styles.iconHolderNavigator}}>
						<Icon name={'notifications-outline'} color={'rgb(184 , 184 ,210 )'} size={wp(7)} />
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								fontSize: wp(2.7),
								color: 'rgb(184 , 184 ,210 )'
							}}
						>
							تنبيهات
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default chatScreen;
