import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { useDispatch } from 'react-redux';
import { ThemeState, changeTheme } from '@/store/theme';
import { CustomButton, CustomTextInput, SuccessModal } from '@/components';
import styles from './styles';

interface RegisterProps {
    navigation: any;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
    const { t } = useTranslation(['register']);
    const { Layout, Gutters, Fonts, Colors, darkMode: isDark } = useTheme();
    const { mainContainer, inputView, divider, termStyle, termsofservice, socialView, appleBtn } = styles();

    const [isModalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
        dispatch(changeTheme({ theme, darkMode }));
    };

    return (
        <ScrollView style={[Layout.fill, mainContainer]}>
            <View style={[Layout.fill, mainContainer]}>
                <Text style={[Gutters.largeTMargin, Fonts.textCenter, Fonts.textRegular, Fonts.textBold]}>{t('register:createAccount')}</Text>
                <View style={inputView}>
                    <CustomTextInput
                        inputPlaceholder={t('register:firstName')}
                        inputType={'default'}
                        onInputChange={(text: string) => { }}
                    />
                    <View style={divider} />
                    <CustomTextInput
                        inputPlaceholder={t('register:lastName')}
                        inputType={'default'}
                        onInputChange={(text: string) => { }}
                    />
                    <View style={divider} />
                    <CustomTextInput
                        inputPlaceholder={t('register:email')}
                        inputType={'email-address'}
                        onInputChange={(text: string) => { }}
                    />
                    <View style={divider} />
                    <CustomTextInput
                        inputPlaceholder={t('register:password')}
                        inputType={'default'}
                        onInputChange={(text: string) => { }}
                        typePass={true}
                    />
                    <View style={divider} />
                    <CustomTextInput
                        inputPlaceholder={t('register:confirmPassword')}
                        inputType={'default'}
                        onInputChange={(text: string) => { }}
                        typePass={true}
                    />
                    <Text style={[Fonts.textLeft, Fonts.textTiny, termStyle]}>{t('register:termText')} <Text onPress={() => console.log('term Press')} style={[termsofservice]} >{t('register:termsofservice')}</Text><Text> {t('register:and')} </Text><Text onPress={() => console.log('privacy Press')} style={[termsofservice]}>{t('register:privacyPolicy')}</Text>🔒
                    </Text>
                    <View style={divider} />
                    <CustomButton
                        onPress={() => setModalVisible(!isModalVisible)}
                        Title={t('register:createAccount')}
                    />
                    <View style={divider} />
                    <Text style={[Fonts.textCenter, Fonts.textSmall, { color: Colors.continueColor }]}>{t('register:continue')}</Text>
                    <View style={divider} />
                    <View style={divider} />
                    <View style={[Layout.row, socialView]}>
                        <TouchableOpacity style={appleBtn}>
                            <Text style={[Fonts.textCenter, Fonts.textSmall, { color: Colors.appleColor }]}>{t('register:apple')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...appleBtn, borderColor: Colors.googleColor }} onPress={() => onChangeTheme({ darkMode: !isDark })}>
                            <Text style={[Fonts.textCenter, Fonts.textSmall, { color: Colors.googleColor }]}>{t('register:google')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={divider} />
                    <View style={divider} />
                    <Text style={[Fonts.textCenter, Fonts.textSmall, { color: Colors.alreadyColor }]}>{t('register:alreadyAccount')} <Text onPress={() => console.log('login Press')} style={[Fonts.textBold]} >{t('register:login')}</Text>
                    </Text>
                </View>
                <Modal visible={isModalVisible} transparent={true} animationType={'fade'}>
                    <SuccessModal onPress={() => navigation.replace('RegisterSteps') + setModalVisible(!isModalVisible)} />
                </Modal>
            </View>
        </ScrollView>
    );
};

export default Register;