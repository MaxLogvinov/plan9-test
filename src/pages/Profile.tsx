import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText
} from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/userSlice';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Профиль</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <p>
            Имя пользователя: <strong>{username}</strong>
          </p>
        </IonText>
        <IonButton expand="block" color="danger" onClick={() => dispatch(logout())}>
          Выйти
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
