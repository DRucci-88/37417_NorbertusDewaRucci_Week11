import React from "react";
import {IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {add} from "ionicons/icons";

const BadMemories: React.FC = () => {

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={'start'}>
            <IonMenuButton/>
          </IonButtons>
          <IonButtons slot={'end'}>
            <IonButton href={'/student-memory/new-memory'}>
              <IonIcon slot={'start'} icon={add}/>
              Add Memory
            </IonButton>
          </IonButtons>
          <IonTitle>Bad Memories</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  )
}

export default BadMemories;