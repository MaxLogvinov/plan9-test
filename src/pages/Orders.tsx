import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent
} from '@ionic/react';

const orders = [
  { id: 1, name: 'Установка плинтуса' },
  { id: 2, name: 'Проверка счетчиков' }
];

const Orders: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Заказы</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      {orders.map(order => (
        <IonCard key={order.id}>
          <IonCardContent>{order.name}</IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  </IonPage>
);

export default Orders;
