import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Routes from '~/routes';
import OneSignal from 'react-native-onesignal';
import {ONESIGNAL_APP_ID} from '@env';
import {setUserPushInformations} from './store/modules/user/actions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    OneSignal.init(ONESIGNAL_APP_ID);
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
  });

  const onReceived = (notification) => {
    console.log('Notification received: ', notification);
  };

  const onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = (device) => {
    dispatch(setUserPushInformations(device.pushToken, device.userId));
  };

  return <Routes />;
}
