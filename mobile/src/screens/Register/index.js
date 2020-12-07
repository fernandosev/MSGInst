import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Root, Toast } from 'popup-ui';

import Input from "~/components/Input";
import SquaredButton from "~/components/SquaredButton";
import KeyboardScrollView from "~/components/KeyboardScrollView";

import colors from "~/styles/colors";

import {
  Background,
  Container,
  AppIconContainer,
} from "./styles";

import AppIcon from '~/assets/svgs/icon.svg';
import { createUserRequest } from "~/store/modules/user/actions";

export default function Register ({}){
  const dispatch = useDispatch();
  const loading  = useSelector(state => state.user.loading);

  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Informe seu nome.'),
    email: Yup.string().required('Informe seu email.'),
    password: Yup.string().required('Informe sua senha.'),
    confirmPassword: Yup.string().required('Confirme sua senha.').oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.'),
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
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                }}
                onSubmit={(values) => dispatch(createUserRequest(values.name, values.email, values.password, toast))}
                validationSchema={() => FormSchema}>
                {({values, handleChange, handleSubmit, errors, touched}) => (
                  <>
                    <Input 
                      color={colors.white}
                      title="Nome"
                      autoCorrect={false}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      errorText={
                        errors.name && touched.name ? errors.name : null
                      }
                    />

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

                    <Input 
                      color={colors.white}
                      title="Confirme sua senha"
                      secureTextEntry={true}
                      autoCorrect={false}
                      autoCapitalize="none"
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      errorText={
                        errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null
                      }
                    />        

                    <SquaredButton
                      onPress={handleSubmit}
                      text="Salvar"
                      loading={loading}
                      iconType="Ionicons"
                      iconName="checkmark-sharp"
                      color={colors.white}
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
