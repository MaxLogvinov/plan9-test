import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonText
} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import type { RootState } from '../store';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, isAuthenticated } = useSelector((state: RootState) => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  if (isAuthenticated) {
    history.push('/tabs/home');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Авторизация</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonInput
          label="Логин"
          labelPlacement="floating"
          fill="outline"
          value={username}
          onIonChange={e => setUsername(e.detail.value!)}
        />
        <IonInput
          label="Пароль"
          type="password"
          labelPlacement="floating"
          fill="outline"
          value={password}
          onIonChange={e => setPassword(e.detail.value!)}
        />

        {error && (
          <IonText color="danger" className="ion-margin-top">
            <p>{error}</p>
          </IonText>
        )}

        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Войти
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
