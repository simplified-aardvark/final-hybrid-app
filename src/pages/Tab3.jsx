import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import './Tab3.css';

const Tab3 = () => {
  const [dataSet, setDataSet] = useState([]);
  const dataURL = "https://dev-week11-a11.pantheonsite.io/wp-json/twentytwentyone-child/v1/products";

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
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {
            dataSet.map((item, index) =>
              <IonItem lines='inset' key={index}>
                <IonLabel>
                  <h2>Product Name: {item.product_name}</h2>
                  <h3>Cost {item.product_cost}</h3>
                  <p>Product Number: {item.product_number}</p>
                  <img 
                    src={"https://dev-week11-a11.pantheonsite.io//wp-content/uploads/" + item.meta_value}
                    height={"150px"}
                    width={"150px"}
                  ></img>
                  

                </IonLabel>
              </IonItem>
            )
          }
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
