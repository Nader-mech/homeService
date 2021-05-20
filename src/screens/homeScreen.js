import React from 'react';
import { View, Text, Image, TextInput, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native';
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
	poppinsRegular,
	textColor
} from '../components/Assets/style/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialNoIcons from 'react-native-vector-icons/MaterialIcons';

const homeScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.signUpScreenPurpleView}>
				<View style={styles.homeBubble}>
					<Image
						style={styles.drawerButton}
						resizeMode={'contain'}
						source={require('../components/Assets/photos/hamb.png')}
					/>
					<View style={{ marginHorizontal: wp(4) }}>
						<Text style={styles.homeMainText}>مرحبا ,على</Text>
						<Text style={{ ...styles.homeMainText, fontSize: wp(4) }}>هل تحتاج لمساعدة ؟</Text>
					</View>
				</View>
				<View style={styles.searchInput}>
					<View style={{ ...styles.inputAndImage, width: wp(75), borderBottomWidth: 0 }}>
						<TextInput style={styles.inputSinle} placeholder="ابحث هنا..." />
						<Image
							style={{ ...styles.inputImage, width: wp(10), height: wp(10) }}
							resizeMode={'contain'}
							source={require('../components/Assets/photos/search.png')}
						/>
					</View>
				</View>

				<View style={{ ...styles.firstStarContainer, marginTop: hp(0.2) }}>
					<Image
						style={styles.starImageFirst}
						resizeMode={'contain'}
						source={require('../components/Assets/photos/star.png')}
					/>
				</View>
				<View style={{ ...styles.firstStarContainer, marginTop: undefined }}>
					<Image
						style={styles.starImageSecond}
						resizeMode={'contain'}
						source={require('../components/Assets/photos/star.png')}
					/>
				</View>
			</View>
			<ScrollView>
				<View style={styles.homeScreenSpecView}>
					<View style={styles.specRow}>
						<View style={{ ...styles.elementViewHome, borderColor: primaryColor }}>
							<Image
								style={styles.elmentImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/homee.png')}
							/>

							<Text style={{ ...styles.elememtText, color: primaryColor }}>الكل</Text>
						</View>
						<View style={styles.elementViewHome}>
							<Image
								style={styles.elmentImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/repaier.png')}
							/>

							<Text style={styles.elememtText}>ضبط</Text>
						</View>
						<View style={styles.elementViewHome}>
							<Image
								style={styles.elmentImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/cleann.png')}
							/>

							<Text style={styles.elememtText}>تنظيف</Text>
						</View>
					</View>
					<View style={styles.specRow}>
						<View style={styles.elementViewHome}>
							<Image
								style={styles.elmentImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/laundry3.png')}
							/>

							<Text style={styles.elememtText}>غسيل</Text>
						</View>
						<View style={styles.elementViewHome}>
							<Image
								style={styles.elmentImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/foodx.png')}
							/>

							<Text style={styles.elememtText}>اكل</Text>
						</View>
						<View style={styles.elementViewHome}>
							<Image
								style={styles.elmentImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/pestx.png')}
							/>

							<Text style={styles.elememtText}>مكافحة الافات</Text>
						</View>
					</View>
				</View>
				<View style={styles.bestServicesView}>
					<Text
						style={{
							...styles.titleText,
							color: deepBlue,
							fontFamily: fontSemiBold,
							fontSize: wp(4)
						}}
					>
						افضل الخدمات
					</Text>
					<View style={styles.bestServicesContainer}>
						<View style={{ marginTop: hp(1) }}>
							<View style={styles.smallServiceContainer}>
								<Image
									style={styles.smallServiceImage}
									resizeMode={'contain'}
									source={require('../components/Assets/photos/wash1.png')}
								/>
								<Text style={styles.smallServiceText}>سباكة</Text>
							</View>
							<View style={{ ...styles.smallServiceContainer, backgroundColor: 'rgb(234 , 234 ,255)' }}>
								<Image
									style={styles.smallServiceImage}
									resizeMode={'contain'}
									source={require('../components/Assets/photos/wash2.png')}
								/>
								<Text style={styles.smallServiceText}>طبخ</Text>
							</View>
						</View>
						<View
							style={{
								...styles.smallServiceContainer,
								height: hp(45),
								backgroundColor: 'rgb(255 ,235 ,240)'
							}}
						>
							<Image
								style={{ ...styles.smallServiceImage, width: wp(20), height: hp(20) }}
								resizeMode={'cover'}
								source={require('../components/Assets/photos/best3.png')}
							/>
							<View style={{ width: wp(25) }}>
								<Text style={styles.smallServiceText}>تنظيف كامل للمنزل</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.bannerContainer}>
					<ImageBackground
						style={styles.bannerImage}
						source={require('../components/Assets/photos/banner.png')}
						resizeMode={'cover'}
					>
						<View style={styles.bannerView}>
							<Text style={{ color: 'white', fontFamily: fontRegular, fontSize: wp(4) }}>
								الباقة كاملة
							</Text>
							<Text style={{ color: 'white', fontFamily: fontRegular, fontSize: wp(5.4) }}>خصم 50%</Text>
							<View style={styles.resevNowView}>
								<Text style={{ color: primaryColor, fontFamily: fontSemiBold, fontSize: wp(3) }}>
									احجز الان
								</Text>
							</View>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.paginationView}>
					<View style={styles.bannnerPaginaion} />
					<View style={styles.bannnerPaginaion} />
					<View style={{ ...styles.bannnerPaginaion, backgroundColor: primaryColor }} />
				</View>

				<View style={{ ...styles.bestServicesView, marginTop: hp(4) , paddingHorizontal:0 }}>
					<Text
						style={{
							...styles.titleText,
							color: deepBlue,
							fontFamily: fontSemiBold,
							fontSize: wp(4),
							marginHorizontal:wp(9.4)
						}}
					>
						اكتشف
					</Text>
					<View style={{ flexDirection: 'row', justifyContent:'flex-end', width: wp(90), height:hp(25), alignSelf: 'center', paddingVertical:hp(2) }}>
						<View style={{ ...styles.elementViewHome, height: hp(20) , justifyContent:'space-evenly', marginHorizontal:wp(2)}}>
							<Image
								style={{...styles.elmentImage, width:wp(13), height:wp(13)}}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/serv1.png')}
							/>

							<Text style={{ ...styles.elememtText, fontFamily: fontRegular, color:textColor , fontSize:wp(3.5) }}>غسل صوفا</Text>
						</View>
						<View style={{ ...styles.elementViewHome, height: hp(20) , justifyContent:'space-evenly', marginHorizontal:wp(2)}}>
							<Image
								style={{...styles.elmentImage, width:wp(13), height:wp(13)}}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/serv3.png')}
							/>

							<Text style={{ ...styles.elememtText, fontFamily: fontRegular, color:textColor , fontSize:wp(3.5) }}>تسوق بقالة</Text>
					</View>
					</View>

					
				</View>
						
				<View style={{...styles.addNewPayMethod ,marginBottom: hp(15), marginTop:hp(2) }}>
				<View
					style={{
						flexDirection: 'row-reverse',
						alignSelf: 'center',
						width: wp(40),
						justifyContent: 'space-between',
						alignItems: 'center',
						marginRight:wp(6),
					}}
				>
					<Antdesign
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
						تحتاج المزيد من الخدمات؟
					</Text>
				</View>
			</View>
			</ScrollView>
			<View style={{ ...styles.saveView, top: hp(90) }}>
				<View style={styles.bottomTabNavigator}>
					<View style={{ ...styles.iconHolderNavigator, borderTopColor: primaryColor }}>
						<MaterialIcons name={'home-outline'} color={primaryColor} size={wp(7)} />
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								fontSize: wp(2.6),
								color: primaryColor
							}}
						>
							الرئيسية
						</Text>
					</View>
					<View style={{ ...styles.iconHolderNavigator }}>
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
					<View style={{ ...styles.iconHolderNavigator }}>
						<Icon name={'chatbox'} color={'rgb(184 , 184 ,210 )'} size={wp(7)} />
						<Text
							style={{
								...styles.titleText,
								fontFamily: fontRegular,
								fontSize: wp(2.7),
								color: 'rgb(184 , 184 ,210 )'
							}}
						>
							شات
						</Text>
					</View>
					<View style={{ ...styles.iconHolderNavigator }}>
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

export default homeScreen;
