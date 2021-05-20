'use strict';
import { I18nManager, Platform, StyleSheet } from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const fontRegular = Platform.OS === 'ios' ? 'Almarai' : 'Almarai-Regular';
export const fontLight = Platform.OS === 'ios' ? 'Almarai' : 'Almarai-Light';
export const fontSemiBold = Platform.OS === 'ios' ? 'Almarai' : 'Almarai-Bold';
export const fontBold = Platform.OS === 'ios' ? 'Almarai' : 'Almarai-ExtraBold';
export const poppinsBold = Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold';
export const poppinsRegular = Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular';
export const poppinsHeavyBold = Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Bold';

export const primaryColor = '#6E6BE8';
export const textColor = '#1F1F39';
export const pinkColor = '#EAA8A2';
export const deepBlue = '#1F126B';

export const styles = StyleSheet.create({
	signUpScreenPurpleView: {
		height: hp(25),
		width: wp(100),
		backgroundColor: primaryColor,
		alignSelf: 'center',
		borderBottomLeftRadius: wp(12),
		borderBottomRightRadius: wp(12)
	},
	container: {
		flex: 1,
		backgroundColor: 'white'
		//  padding:hp('2%')
	},
	profileSectionView: {
		marginTop: hp(5),
		flexDirection: 'row',
		width: wp(66),
		alignSelf: 'flex-end',
		justifyContent: 'space-between',
		paddingHorizontal: wp(4)
	},
	iconHolder: {
		width: wp(7),
		height: wp(7),
		borderRadius: wp(2.6),
		borderWidth: 1,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	profileText: {
		fontFamily: fontRegular,
		fontSize: wp(4.2),
		color: 'white'
	},
	starImageFirst: {
		width: wp(7),
		height: wp(7),
		alignSelf: 'flex-end'
	},
	firstStarContainer: {
		marginTop: hp(2),
		paddingHorizontal: wp(1)
	},
	starImageSecond: {
		width: wp(12),
		height: wp(12),
		alignSelf: 'flex-start',
		borderRadius: wp(3)
	},
	userImageView: {
		position: 'absolute',
		width: wp(35),
		height: hp(20),
		backgroundColor: 'white',
		left: wp(35),
		top: hp(15),
		borderTopLeftRadius: wp(2),
		borderTopRightRadius: wp(17),
		borderBottomRightRadius: wp(17),
		borderBottomLeftRadius: wp(17),
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#e2e2e2',
		borderWidth: 1,
		elevation: 12
	},
	camImage: {
		width: wp(20),
		height: wp(20)
	},
	signupFormView: {
		paddingHorizontal: wp(8),
		backgroundColor: 'white',
		marginTop: hp(15),
		marginBottom: hp(7)
	},
	inputAndTitleComponent: {
		height: hp(10),
		justifyContent: 'space-between',
		marginTop: hp(3)
	},
	titleText: {
		fontFamily: fontBold,
		fontSize: wp(3)
	},
	inputAndImage: {
		flexDirection: 'row',
		borderBottomColor: 'rgb(234 , 234 ,255)',
		alignItems: 'center',
		justifyContent: 'flex-end',
		borderBottomWidth: 1,
		height: hp(6)
	},
	inputImage: {
		width: wp(8),
		height: wp(8)
	},
	inputSinle: {
		fontFamily: fontRegular,
		width: wp(50),
		color: 'rgb(184 , 184 ,210)',
		fontSize: wp(3)
	},
	saveView: {
		height: hp(10),
		backgroundColor: 'white',
		borderTopLeftRadius: wp(5),
		borderTopRightRadius: wp(5),
		borderWidth: 1,
		borderColor: 'rgba(110 ,107 ,232 , 0.15)',
		position: 'absolute',
		width: wp(100),
		alignItems: 'center',
		justifyContent: 'center',
		top: hp(46.8)
	},
	nextView: {
		height: hp(10),
		backgroundColor: 'white',
		borderTopLeftRadius: wp(7),
		borderTopRightRadius: wp(7),
		borderWidth: 1,
		borderColor: 'rgba(110 ,107 ,232 , 0.15)',
		width: wp(100),
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: hp(18),
		flexDirection: 'row'
	},
	saveButtonStyle: {
		width: wp(90),
		borderRadius: wp(2),
		height: hp(7),
		backgroundColor: primaryColor,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	subTitle: {
		fontFamily: fontSemiBold,
		fontSize: wp(3.3)
	},
	serviceDetailView: {
		paddingHorizontal: wp(5),
		marginTop: hp(5)
	},
	radioButtonContainer: {
		height: hp(15),
		justifyContent: 'space-between',
		marginVertical: hp(2.58)
	},
	radioAndTitleView: {
		flexDirection: 'row',
		width: wp(30),
		justifyContent: 'flex-end',
		alignSelf: 'flex-end'
	},
	radio: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: 'rgb(234 , 234 , 255)',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(234 , 234 , 255)'
	},
	radioMark: {
		height: 12,
		width: 12,
		borderRadius: 6,
		backgroundColor: primaryColor
	},
	cardContainer: {
		marginTop: hp(2),
		alignSelf: 'center'
	},
	card: {
		height: hp(20),
		width: wp(85),
		borderWidth: 1,
		borderColor: 'rgb(234 , 234 , 255)',
		borderTopRightRadius: wp(5),
		borderBottomRightRadius: wp(5),
		borderBottomLeftRadius: wp(5),
		padding: wp(5)
	},
	visaImageContainer: {
		flexDirection: 'row',
		width: wp('46%'),
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'flex-end',
		marginHorizontal: wp(3)
	},
	addNewPayMethod: {
		width: wp(85),
		borderRadius: wp(3),
		backgroundColor: 'rgb(244 , 243 , 253)',
		height: hp(6.5),
		flexDirection: 'row-reverse',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: hp(6)
	},
	twoButtonsCarrier: {
		width: wp(85),
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: hp(4),
		alignSelf: 'center'
	},
	supportButton: {
		width: wp(40),
		borderRadius: wp(3),
		height: hp(8),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(255 , 235 ,240)'
	},
	supportSegment: {
		marginVertical: hp(2),
		width: wp(85),
		borderRadius: wp(2),
		borderColor: 'rgb(234 , 234 , 255)',
		height: hp(7),
		paddingHorizontal: wp(4),
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		flexDirection: 'row-reverse'
	},
	lineCotainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: hp(5)
	},
	reservationDetailsView: {
		width: wp(85),
		alignSelf: 'center',
		borderWidth: 1,
		borderColor: 'rgb(234 , 234 , 255)',
		borderTopRightRadius: wp(5),
		borderBottomRightRadius: wp(5),
		borderBottomLeftRadius: wp(5),
		padding: wp(4),
		justifyContent: 'space-around',
		height: hp(60),
		marginVertical: hp(3)
	},
	chatScreenSupprt: {
		width: wp(82),
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: hp(5)
	},
	searchImage: {
		width: wp(11),
		height: wp(11)
	},
	chatCard: {
		width: wp(82),
		borderBottomColor: 'rgb(234 , 234 , 255)',
		borderBottomWidth: 1,
		flexDirection: 'row-reverse',
		alignSelf: 'center',
		height: hp(13),
		marginTop: hp(3)
	},
	chatScreenImage: {
		width: wp(18),
		height: hp(10),
		backgroundColor: 'white',
		borderTopLeftRadius: wp(2),
		borderTopRightRadius: wp(18),
		borderBottomRightRadius: wp(18),
		borderBottomLeftRadius: wp(18),
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'transparent',
		borderWidth: 1,
		elevation: 12
	},
	chatImage: {
		width: wp(17),
		height: wp(19)
	},
	chatCardInfoView: {
		height: hp(7),
		justifyContent: 'space-between',
		marginHorizontal: wp(4)
	},
	messageCounterView: {
		width: wp(6.5),
		height: hp(3.8),
		backgroundColor: 'rgb(247 , 101 , 139)',
		borderTopLeftRadius: wp(2),
		borderTopRightRadius: wp(5),
		borderBottomRightRadius: wp(5),
		borderBottomLeftRadius: wp(5),
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#e2e2e2',
		borderWidth: 1,
		elevation: 12,
		marginTop: hp(3)
	},
	onlineDotView: {
		backgroundColor: deepBlue,
		width: hp(1.3),
		height: hp(1.3),
		borderRadius: hp(0.7),
		position: 'absolute',
		elevation: 5,
		top: hp(1),
		left: wp(15)
	},
	bottomTabNavigator: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: wp(90)
	},
	iconHolderNavigator: {
		alignItems: 'center',
		borderTopColor: 'transparent',
		borderTopWidth: 1,
		height: hp(10),
		justifyContent: 'space-evenly',
		width: wp(9)
	},
	homeBubble: {
		flexDirection: 'row-reverse',
		width: wp(80),
		alignSelf: 'center',
		marginTop: hp(3),
		alignItems: 'center'
	},
	drawerButton: {
		width: wp(11),
		height: wp(11)
	},
	homeMainText: {
		fontFamily: fontRegular,
		fontSize: wp(6),
		color: 'white'
	},
	searchInput: {
		width: wp(79),
		borderTopRightRadius: wp(3),
		borderBottomRightRadius: wp(3),
		borderBottomLeftRadius: wp(3),
		backgroundColor: 'white',
		position: 'absolute',
		height: hp(7),
		alignItems: 'center',
		justifyContent: 'center',
		top: hp(14),
		right: wp(11),
		elevation: 5
	},
	homeScreenSpecView: {
		width: wp(90),
		alignSelf: 'center',
		marginTop: hp(2)
	},
	specRow: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		width: wp(80),
		alignSelf: 'center',
		marginTop: hp(2.5)
	},
	elementViewHome: {
		borderTopRightRadius: wp(3),
		borderBottomRightRadius: wp(3),
		borderBottomLeftRadius: wp(3),
		width: wp(25),
		height: hp(15),
		borderWidth: 1,
		borderColor: 'rgb(234 , 234 , 255)',
		alignItems: 'center'
	},
	elememtText: {
		fontFamily: fontSemiBold,
		fontSize: wp(3.1),
		color: 'rgb(184 , 184 , 210)'
	},
	elmentImage: {
		width: wp(9),
		height: hp(9)
	},
	bestServicesView: {
		marginTop: hp(6),
		paddingHorizontal: wp(9.4)
	},
	bestServicesContainer: {
		flexDirection: 'row-reverse',
		alignSelf: 'center',
		width: wp(80),
		height: hp(50),
		justifyContent: 'space-around'
	},
	smallServiceContainer: {
		width: wp(35),
		height: hp(20),
		backgroundColor: 'rgb(236 , 252 , 255)',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderTopRightRadius: wp(3),
		borderBottomRightRadius: wp(3),
		borderBottomLeftRadius: wp(3),
		borderWidth: 1,
		borderColor: 'transparent',
		marginTop: hp(4)
	},
	smallServiceImage: {
		width: wp(15),
		height: wp(15),
		marginTop: hp(2)
	},
	smallServiceText: {
		fontFamily: fontSemiBold,
		color: deepBlue,
		fontSize: wp(4),
		paddingVertical: hp(2)
	},
	bannerContainer: {
		alignSelf: 'center',
		width: wp(80),
		marginTop: hp(5),
		width: wp(80),
		height: hp(20),
		borderTopRightRadius: wp(3),
		borderBottomRightRadius: wp(3),
		borderBottomLeftRadius: wp(3),
		overflow: 'hidden'
	},
	bannerImage: {
		width: wp(80),
		alignSelf: 'center',
		height: hp(20)
	},
	bannerView: {
		alignItems: 'center',
		justifyContent: 'space-between',
		height: hp(15),
		marginHorizontal: wp(3),
		alignSelf: 'flex-end',
		marginTop: hp(2)
	},
	resevNowView: {
		paddingHorizontal: wp(2),
		backgroundColor: 'rgb(244 , 243 , 253)',
		justifyContent: 'center',
		width: wp(16),
		alignItems: 'center',
		borderRadius: wp(1),
		height: hp(4)
	},
	bannnerPaginaion:{
		width: hp(1.3),
		height: hp(1.3),
		borderRadius: hp(0.7),
		backgroundColor:'rgb(234 , 234 ,255)'
	},
	paginationView:{
		alignSelf: 'center',
		width: wp(15),
		marginTop: hp(2),
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
