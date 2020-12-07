import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Root, Toast } from 'popup-ui';

import Input from "~/components/Input";
import SquaredButton from "~/components/SquaredButton";
import ButtonLight from "~/components/ButtonLight";
import KeyboardScrollView from "~/components/KeyboardScrollView";

import colors from "~/styles/colors";

import {
  Background,
  Container,
  AppIconContainer,
} from "./styles";

import AppIcon from '~/assets/svgs/icon.svg';
import { signInRequest } from "~/store/modules/auth/actions";

const SignIn: React.FC<React.Component> = ({navigation}) => {

  const dispatch = useDispatch();
  const loading  = useSelector(state => state.auth.loading);

  const FormSchema = Yup.object().shape({
    email: Yup.string().required('Informe seu email.'),
    password: Yup.string().required('Informe sua senha.'),
  });

  const toast = (title, message, color) => {
    Toast.show({
      title,
      text: message,
      color,
    })
  }

  return (
    <Root>
      <Background>
        <Container>
          <KeyboardScrollView keyboardShouldPersistTaps="handled">
            <AppIconContainer>
              <AppIcon />
            </AppIconContainer>

            <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={(values) => dispatch(signInRequest(values.email, values.password, toast))}
                validationSchema={() => FormSchema}>
                {({values, handleChange, handleSubmit, errors, touched}) => (
                  <>
                    <Input 
                      color={colors.white}
                      title="Email"
                      keyboardType="email-address"
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      errorText={
                        errors.email && touched.email ? errors.email : null
                      }
                    />

                    <Input 
                      color={colors.white}
                      title="Senha"
                      secureTextEntry={true}
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      errorText={
                        errors.password && touched.password ? errors.password : null
                      }
                    />

                    <SquaredButton
                      onPress={handleSubmit}
                      text="Entrar"
                      loading={false}
                      iconType="Ionicons"
                      iconName="chevron-forward"
                      color={colors.white}
                    />

                    <ButtonLight
                      style={{marginTop: 10}}
                      color={colors.white}
                      onPress={() => navigation.navigate('Register')}
                      text="Não possui uma conta? Cadastre-se"
                    />
                  </>
                )}

                
              </Formik>
            </KeyboardScrollView>
        </Container>
      </Background>
    </Root>
  );
}

export default SignIn;