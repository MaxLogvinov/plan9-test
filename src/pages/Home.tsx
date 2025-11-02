import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Главная</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">Добро пожаловать!</IonContent>
  </IonPage>
);

export default Home;
