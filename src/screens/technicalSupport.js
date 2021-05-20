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

const technicalSupportScreen = (props) => {
	return (
		<View style={{ ...styles.container, paddingHorizontal: 20 }}>
			<View style={{ ...styles.profileSectionView, width: wp(58) }}>
				<Text style={{ ...styles.profileText, color: deepBlue, fontFamily: fontSemiBold, fontSize: wp(4) }}>
					الدعم الفنى
				</Text>
				<View style={{ ...styles.iconHolder, borderColor: deepBlue }}>
					<Antdesign name={'minus'} color={deepBlue} size={wp(5)} />
				</View>
			</View>
			<View style={styles.twoButtonsCarrier}>
				<TouchableOpacity style={styles.supportButton}>
					<Text style={{ ...styles.titleText, color: 'rgb(247 , 101 ,139 )' }}>اتصال</Text>
					<Icon
						name={'call-outline'}
						color={'rgb(247 , 101 ,139 )'}
						size={wp(4)}
						style={{ paddingHorizontal: wp(3) }}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ ...styles.supportButton, backgroundColor: 'rgb(244 ,243 , 253)' }}>
					<Text style={{ ...styles.titleText, color: 'rgb(88 , 62 ,242 )' }}>مراسلة</Text>
					<Feather
						name={'headphones'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(4)}
						style={{ paddingHorizontal: wp(3) }}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ marginVertical: hp(1.5), width: wp(83), alignSelf: 'center' }}>
				<Text style={{ ...styles.titleText, color: deepBlue, fontFamily: fontSemiBold, fontSize: wp(3.5) }}>
					اسئلة مكررة
				</Text>
				<View style={styles.supportSegment}>
					<Text style={{ ...styles.titleText, fontFamily: fontSemiBold ,fontSize:wp(3.5) }}>ما هى العملية ؟</Text>
					<MaterialIcons
						name={'keyboard-arrow-down'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(6)}
					/>
				</View>
                <View style={{...styles.supportSegment, height:hp(20), alignItems:'flex-start', flexDirection:'column', justifyContent:'flex-start'}}>
                    <View style={{flexDirection:'row-reverse',justifyContent:'space-between', alignItems:'center', width:wp(76.5) , marginTop:hp(2)}}>
					<Text style={{ ...styles.titleText, fontFamily: fontSemiBold ,fontSize:wp(3.5) }}>كيف تسحب الخدمة ؟</Text>
					<MaterialIcons
						name={'keyboard-arrow-down'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(6)}
					/>
                    </View>
                    <View style={{alignSelf:'center' , marginTop:hp(3), width:wp(75)}}>
                    <Text style={{ ...styles.titleText,  fontFamily: fontLight, fontSize: wp(3.5) }}>
					هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
				</Text>
                    </View>
				</View>
                <View style={styles.supportSegment}>
					<Text style={{ ...styles.titleText, fontFamily: fontSemiBold ,fontSize:wp(3.5) }}>ما هى العملية ؟</Text>
					<MaterialIcons
						name={'keyboard-arrow-down'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(6)}
					/>
				</View><View style={styles.supportSegment}>
					<Text style={{ ...styles.titleText, fontFamily: fontSemiBold ,fontSize:wp(3.5) }}>ما هى العملية ؟</Text>
					<MaterialIcons
						name={'keyboard-arrow-down'}
						color={'rgb(88 , 62 ,242 )'}
						size={wp(6)}
					/>
				</View>
			</View>
		</View>
	);
};

export default technicalSupportScreen;
