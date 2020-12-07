import React from 'react';
import SquaredButton from '~/components/SquaredButton';
import colors from '~/styles/colors';
import {ModalContainer, Alert, Title} from './styles';

export default function Dialog({
  visible,
  close,
  title,
  loading,
  btnTitle,
  btnAction,
  children,
}) {
  return (
    <ModalContainer
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      onRequestClose={close}
      animationInTiming={300}
      onBackdropPress={close}
      supportedOrientations={['portrait', 'landscape']}>
      <Alert>
        <Title>{title}</Title>
        {children}
        <SquaredButton
          text={btnTitle}
          onPress={btnAction}
          loading={loading}
          color={colors.white}
          background={colors.secondaryColor}
          iconType="Ionicons"
          iconName="checkmark-sharp"
        />
      </Alert>
    </ModalContainer>
  );
}
