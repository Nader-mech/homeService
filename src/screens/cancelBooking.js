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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const cancelBookingScreen = (props) => {
	return (
		<View style={{ ...styles.container, paddingHorizontal: 20 }}>
			<View style={{ ...styles.profileSectionView, width: wp(60) }}>
				<Text style={{ ...styles.profileText, color: deepBlue, fontFamily: fontSemiBold, fontSize: wp(4) }}>
					رقم الحجز#21345
				</Text>
				<View style={{ ...styles.iconHolder, borderColor: deepBlue }}>
					<Antdesign name={'minus'} color={deepBlue} size={wp(5)} />
				</View>
			</View>
			<View style={styles.lineCotainer}>
				<View
					style={{
						...styles.radio,
						width: wp(3),
						height: wp(3),
						borderColor: 'rgb(184 , 184 ,210)',
						backgroundColor: 'rgb(184 , 184 ,210)'
					}}
				/>
				<View style={{ backgroundColor: 'rgb(184 , 184 ,210)', width: wp(37), height: hp(0.2) }} />
				<View
					style={{
						...styles.radio,
						width: wp(3),
						height: wp(3),
						backgroundColor: 'rgb(184 , 184 ,210)',
						borderColor: 'rgb(184 , 184 ,210)'
					}}
				/>
				<View style={{ backgroundColor: 'rgb(184 , 184 ,210)', width: wp(37), height: hp(0.2) }} />
				<View
					style={{
						...styles.radio,
						width: wp(3),
						height: wp(3),
						backgroundColor: 'rgb(184 , 184 ,210)',
						borderColor: 'rgb(184 , 184 ,210)'
					}}
				/>
			</View>
			<View style={{ paddingHorizontal: wp(3), marginTop: hp(2) }}>
				<Text
					style={{
						...styles.titleText,
						color: 'rgb(184 , 184 ,210)',
						fontFamily: fontRegular,
						fontSize: wp(3.3)
					}}
				>
					تم الالغاء بواسطتك
				</Text>
			</View>
			<View style={styles.reservationDetailsView}>
				<View style={{marginVertical:hp(2)}}>
					<Text
						style={{
							...styles.titleText,
							color: 'rgb(88 , 62 ,242)',
							fontFamily: fontSemiBold,
							fontSize: wp(3.5)
						}}
					>
						تفاصيل الحجز
					</Text>
				</View>
				<View>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontSemiBold,
							fontSize: wp(3.1),
							paddingVertical: hp(0.3)
						}}
					>
						ساعات العمل
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: poppinsRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
						Monday-22Mar 2021
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: poppinsRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
						12:30 Pm
					</Text>
				</View>
				<View>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontSemiBold,
							fontSize: wp(3.1),
							paddingVertical: hp(0.3)
						}}
					>
					الموقع
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
					غرفة جدة.شارع سليمان 
					</Text>
				
				</View>
                <View>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontSemiBold,
							fontSize: wp(3.1),
							paddingVertical: hp(0.3)
						}}
					>
					ملاحظة
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
					لا توجد ملاجظات 
					</Text>
				
				</View>
                <View>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontSemiBold,
							fontSize: wp(3.1),
							paddingVertical: hp(0.3)
						}}
					>
					عامل المنزل
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: poppinsRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
					janet kim
					</Text>
				
				</View>
                <View>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontSemiBold,
							fontSize: wp(3.1),
							paddingVertical: hp(0.3)
						}}
					>
					التكلفة 
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
					 SAR ساعة10.52/1
					</Text>
				
				</View>
                <View>
					<Text
						style={{
							...styles.titleText,
							fontFamily: fontSemiBold,
							fontSize: wp(3.1),
							paddingVertical: hp(0.3)
						}}
					>
					طريقة الدفع 
					</Text>
					<Text
						style={{
							...styles.titleText,
							fontFamily: poppinsRegular,
							fontSize: wp(3.3),
							color: 'rgb(120 , 120 ,157)',
							textAlign: 'right',
							paddingVertical: hp(0.3)
						}}
					>
					 Credit Card
					</Text>
				
				</View>
               
			</View>
                    <View style={{ alignSelf:'center'}}>
                  <TouchableOpacity style={{...styles.saveButtonStyle,width:wp(85) }}>
                      <Text style={{...styles.titleText, color:'white', fontSize:wp(3.8)}}>حجز اخر</Text>
                  </TouchableOpacity>
                  </View>
		</View>
	);
};

export default cancelBookingScreen;
