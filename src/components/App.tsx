import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { home, list, person } from 'ionicons/icons';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import PrivateRoute from './PrivateRoute';
import '@ionic/react/css/core.css';
import '../styles/global.css';

setupIonicReact();

const App: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Login} />
          {isAuthenticated ? (
            <Route path="/tabs">
              <IonTabs>
                <IonRouterOutlet>
                  <PrivateRoute exact path="/tabs/home" component={Home} />
                  <PrivateRoute exact path="/tabs/orders" component={Orders} />
                  <PrivateRoute exact path="/tabs/profile" component={Profile} />
                  <Redirect exact from="/tabs" to="/tabs/home" />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                  <IonTabButton tab="home" href="#/tabs/home">
                    <IonIcon icon={home} />
                    <IonLabel>Главная</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="orders" href="#/tabs/orders">
                    <IonIcon icon={list} />
                    <IonLabel>Заказы</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="profile" href="#/tabs/profile">
                    <IonIcon icon={person} />
                    <IonLabel>Профиль</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </Route>
          ) : (
            <Redirect to="/" />
          )}
        </IonRouterOutlet>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
