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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slices/userSlice';
import type { RootState } from '../store';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, FieldProps } from 'formik';
import { validationSchema } from '../utils/validationSchema';

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const initialValues: FormValues = {
    username: '',
    password: ''
  };

  const handleSubmit = (values: FormValues) => {
    dispatch(login(values));
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="username">
                    {({ field, meta }: FieldProps<string>) => (
                      <div>
                        <IonInput
                          label="Логин"
                          labelPlacement="floating"
                          fill="outline"
                          {...field}
                          className={`ion-margin-bottom ${
                            meta.touched && meta.error ? 'ion-invalid ion-touched' : ''
                          }`}
                        />
                        <IonText color="danger" style={{ display: 'flex', minHeight: '30px' }}>
                          {meta.touched && meta.error && <p>{meta.error}</p>}
                        </IonText>
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }: FieldProps<string>) => (
                      <div>
                        <IonInput
                          label="Пароль"
                          type="password"
                          labelPlacement="floating"
                          fill="outline"
                          {...field}
                          className={`ion-margin-bottom ${
                            meta.touched && meta.error ? 'ion-invalid ion-touched' : ''
                          }`}
                        />
                        <IonText color="danger" style={{ display: 'flex', minHeight: '30px' }}>
                          {meta.touched && meta.error && <p>{meta.error}</p>}
                        </IonText>
                      </div>
                    )}
                  </Field>
                  <IonButton
                    expand="block"
                    className="ion-margin-top"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Войти
                  </IonButton>
                </Form>
              )}
            </Formik>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
