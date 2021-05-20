import React from 'react';
import { View, Text, Image, TextInput, ScrollView , Button, TouchableOpacity} from 'react-native';
import { styles, wp, hp, primaryColor } from '../components/Assets/style/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const signupScreen = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.signUpScreenPurpleView}>
				<View style={styles.profileSectionView}>
					<Text style={styles.profileText}>الملف الشخصي</Text>
					<View style={styles.iconHolder}>
						<Icon name={'minus'} color={'white'} size={wp(5)} />
					</View>
				</View>
				<View style={styles.firstStarContainer}>
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
            <View style={styles.userImageView}>
					<Image
						style={styles.camImage}
						resizeMode={'contain'}
						source={require('../components/Assets/photos/cam.png')}
					/>
				</View>

			<View style={styles.signupFormView}>
				<ScrollView contentContainerStyle={{height:hp(110)}}>
					<View style={styles.inputAndTitleComponent}>
						<View style={{ paddingHorizontal: wp(5) }}>
							<Text style={styles.titleText}>الاسم</Text>
						</View>
						<View style={styles.inputAndImage}>
							<TextInput style={styles.inputSinle} placeholder="اسم المستخدم" />
							<Image
								style={styles.inputImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/person.png')}
							/>
						</View>
					</View>
					<View style={styles.inputAndTitleComponent}>
						<View style={{ paddingHorizontal: wp(5) }}>
							<Text style={styles.titleText}>رقم الهاتف</Text>
						</View>
						<View style={styles.inputAndImage}>
							<TextInput style={styles.inputSinle} placeholder="رقم الهاتف" />
							<Image
								style={styles.inputImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/phone.png')}
							/>
						</View>
					</View>
					<View style={styles.inputAndTitleComponent}>
						<View style={{ paddingHorizontal: wp(5) }}>
							<Text style={styles.titleText}>البريد الالكترونى</Text>
						</View>
						<View style={styles.inputAndImage}>
							<TextInput style={styles.inputSinle} placeholder="اكتب البريد الالكترونى" />
							<Image
								style={styles.inputImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/email.png')}
							/>
						</View>
					</View>
					<View style={styles.inputAndTitleComponent}>
						<View style={{ paddingHorizontal: wp(5) }}>
							<Text style={styles.titleText}>كلمة المرور</Text>
						</View>
						<View style={styles.inputAndImage}>
							<View style={{ paddingRight: hp(10) }}>
								<Icon name={'eyeo'} color={'rgb(184 ,184 ,210)'} size={wp(5)} />
							</View>

							<TextInput style={styles.inputSinle} placeholder="كلمة المرور" />
							<Image
								style={styles.inputImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/password.png')}
							/>
						</View>
					</View>
					<View style={styles.inputAndTitleComponent}>
						<View style={{ paddingHorizontal: wp(5) }}>
							<Text style={styles.titleText}>كلمة المرور الجديدة</Text>
						</View>
						<View style={styles.inputAndImage}>
							<View style={{ paddingRight: hp(10) }}>
								<Icon name={'eyeo'} color={'rgb(184 ,184 ,210)'} size={wp(5)} />
							</View>

							<TextInput style={styles.inputSinle} placeholder="كلمة المرور الجديدة" />
							<Image
								style={styles.inputImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/password.png')}
							/>
						</View>
					</View>
					<View style={styles.inputAndTitleComponent}>
						<View style={{ paddingHorizontal: wp(5) }}>
							<Text style={styles.titleText}>اعادة كلمة المرور الجديدة</Text>
						</View>
						<View style={styles.inputAndImage}>
							<View style={{ paddingRight: hp(10) }}>
								<Icon name={'eyeo'} color={'rgb(184 ,184 ,210)'} size={wp(5)} />
							</View>

							<TextInput style={styles.inputSinle} placeholder="اعادة كلمة المرور الجديدة" />
							<Image
								style={styles.inputImage}
								resizeMode={'contain'}
								source={require('../components/Assets/photos/password.png')}
							/>
						</View>
					</View>
				</ScrollView>
                <View style={{...styles.saveView, top:hp(50)}}>
                    <View style={{width:wp(80)}}>
                  <TouchableOpacity style={styles.saveButtonStyle}>
                      <Text style={{...styles.titleText, color:'white'}}>حفظ</Text>
                  </TouchableOpacity>
                  </View>
                </View>
			</View>
		</View>
	);
};

export default signupScreen;
