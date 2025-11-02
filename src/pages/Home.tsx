import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Главная</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90%',
          textAlign: 'center',
          fontWeight: 800,
          fontSize: '54px',
          lineHeight: '100%',
          fontFamily: 'Gilroy, sans-serif'
        }}
      >
        Добро пожаловать!
      </h1>
    </IonContent>
  </IonPage>
);

export default Home;
