import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useState, useEffect } from 'react';

const Tab1 = () => {
  const [dataSet, setDataSet] = useState([]);
  const dataURL = "https://dev-week11-a11.pantheonsite.io/wp-json/twentytwentyone-child/v1/contacts";

  useEffect(
    () => {
      fetch(dataURL)
        .then(response => response.json())
        .then(data => setDataSet(data))

    }, []
  )




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonList>
          {
            dataSet.map((item, index) =>
              <IonItem lines='inset' key={index}>
                <IonLabel>
                  <h2>Name: {item.first_name + " " + item.last_name}</h2>
                  <h3>Contact ID: {item.post_id}</h3>
                  <p>Phone: {item.phone}</p>
                  <img src={"https://dev-week11-a11.pantheonsite.io//wp-content/uploads/" + item.meta_value}></img>
                  

                </IonLabel>
              </IonItem>
            )
          }
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
