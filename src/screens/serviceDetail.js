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
	fontLight ,
	poppinsRegular
} from '../components/Assets/style/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const serviceDetails = () => {
	return (
		<View style={styles.container}>
			<View style={{ ...styles.profileSectionView, width: wp(62) }}>
				<Text style={{ ...styles.profileText, color: deepBlue, fontFamily: fontSemiBold, fontSize: wp(4) }}>
					ادفع للحجز
				</Text>
				<View style={{ ...styles.iconHolder, borderColor: deepBlue }}>
					<Icon name={'minus'} color={deepBlue} size={wp(5)}  />
				</View>
			</View>
			<View style={styles.serviceDetailView}>
				<Text style={styles.subTitle}>اختر طريقة الدفع</Text>
				<View style={styles.radioButtonContainer}>
					<View style={styles.radioAndTitleView}>
						<Text
							style={{
								...styles.titleText,
								fontFamily: poppinsRegular,
								paddingHorizontal: wp(4),
								fontSize: wp(3.2)
							}}
						>
							Credit Card
						</Text>
						<View style={styles.radio}>
							<View style={styles.radioMark} />
						</View>
					</View>
					<View style={styles.radioAndTitleView}>
						<Text
							style={{
								...styles.titleText,
								fontFamily: poppinsRegular,
								paddingHorizontal: wp(4),
								fontSize: wp(3.2)
							}}
						>
							Paybal
						</Text>
						<View style={styles.radio} />
					</View>
					<View style={styles.radioAndTitleView}>
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								paddingHorizontal: wp(4),
								fontSize: wp(3.2)
							}}
						>
							كاش
						</Text>
						<View style={styles.radio} />
					</View>
				</View>
			</View>

			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<View style={styles.radioAndTitleView}>
						<Text
							style={{
								...styles.titleText,
								fontFamily: poppinsBold,
								paddingHorizontal: wp(4),
								fontSize: wp(3.2)
							}}
						>
							Adel Saad
						</Text>
						<View style={styles.radio}>
							<View style={styles.radioMark} />
						</View>
					</View>
					<View style={styles.visaImageContainer}>
						<Text style={{ fontFamily: poppinsRegular }}>1233 2343 2432 5648</Text>
						<Image
							style={{ ...styles.inputImage, width: wp(10), height: wp(10) }}
							resizeMode={'contain'}
							source={require('../components/Assets/photos/visa.png')}
						/>
					</View>
					<View style={{ paddingHorizontal: wp(6) }}>
						<Text style={{ fontFamily: fontRegular, fontSize:wp(3.5) }}>صالح حتى 20/12</Text>
					</View>
				</View>
			</View>
			<View style={styles.addNewPayMethod}>
				<View
					style={{
						flexDirection: 'row-reverse',
						alignSelf: 'center',
						width: wp(30),
						justifyContent: 'space-between',
						alignItems: 'center',
						marginRight:wp(6)
					}}
				>
					<Icon
						name={'pluscircleo'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(4)}
						style={{ paddingHorizontal: wp(3) }}
					/>
					<Text
						style={{
							...styles.profileText,
							color: 'rgb(88 , 62 ,242 )',
							fontFamily: fontSemiBold,
							fontSize: wp(3.5)
						}}
					>
						اضف كارد جديد
					</Text>
				</View>
			</View>
			<View style={styles.nextView}>
				<View style={{ width: wp(90), flexDirection: 'row-reverse', justifyContent: 'space-around' }}>
					<TouchableOpacity
						style={{
							...styles.saveButtonStyle,
							width: wp(35),
							alignSelf: 'flex-end',
							backgroundColor: 'rgb(88 , 62 ,242 )'
						}}
					>
						<Text style={{ ...styles.titleText, color: 'white' }}>التالى</Text>
					</TouchableOpacity>
				
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{...styles.radio, width:wp(3), height:wp(3), backgroundColor:'rgb(255 , 235 ,240)'}}>
						</View>
					<View style={{ backgroundColor: 'rgb(255 , 235 ,240)', width: wp(10), height: hp(0.3) }} />
						<View style={styles.radio}>
							<View style={{...styles.radioMark, backgroundColor:'rgb(243 , 168 ,162)', borderRadius:wp(2)}} />
						</View>
						<View style={{ backgroundColor: 'rgb(255 , 235 ,240)', width: wp(10), height: hp(0.3) }} />
						<View style={{...styles.radio, width:wp(3), height:wp(3), backgroundColor:'rgb(255 , 235 ,240)'}}>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default serviceDetails;
