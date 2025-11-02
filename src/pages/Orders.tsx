import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonContent
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Заказы</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ '--background': 'var(--ion-color-light)' }}>
        <IonGrid style={{ maxWidth: '800px', placeItems: 'center' }}>
          <IonRow>
            {orders.map(order => (
              <IonCol size="12" sizeMd="10" sizeLg="8" key={order.id} style={{ margin: '0 auto' }}>
                <IonCard>
                  <IonCardContent>{order.name}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Orders;
