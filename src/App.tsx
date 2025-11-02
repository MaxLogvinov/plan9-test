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
import { IonReactRouter } from '@ionic/react-router';
import { home, list, person } from 'ionicons/icons';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {!isAuthenticated ? (
            <Route exact path="/">
              <Login />
            </Route>
          ) : (
            <Route path="/tabs">
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/tabs/home" component={Home} />
                  <Route exact path="/tabs/orders" component={Orders} />
                  <Route exact path="/tabs/profile" component={Profile} />
                  <Redirect exact from="/tabs" to="/tabs/home" />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                  <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon icon={home} />
                    <IonLabel>Главная</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="orders" href="/tabs/orders">
                    <IonIcon icon={list} />
                    <IonLabel>Заказы</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon icon={person} />
                    <IonLabel>Профиль</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </Route>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
