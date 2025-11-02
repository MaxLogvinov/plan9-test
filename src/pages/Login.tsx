import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
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
      <IonContent className="ion-padding" style={{ '--background': 'var(--ion-color-light)' }}>
        <IonCard style={{ margin: '20px auto', maxWidth: '400px', borderRadius: '10px' }}>
          <IonCardHeader>
            <IonCardTitle>Вход</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonInput
              label="Логин"
              labelPlacement="floating"
              fill="outline"
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
              className="ion-margin-bottom"
            />
            <IonInput
              label="Пароль"
              type="password"
              labelPlacement="floating"
              fill="outline"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              className="ion-margin-bottom"
            />
            <IonText color="danger" style={{ display: 'flex', minHeight: '30px' }}>
              {error && <p>{error}</p>}
            </IonText>

            <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
              Войти
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
