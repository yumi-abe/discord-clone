import React, { useEffect, useState } from 'react'
import { CollectionReference, DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';

interface Channels {
  id: string,
  channel: DocumentData;
}

const useCollection = (data: string) => {

    const [ documents, setDocuments ] = useState<Channels[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db, data));

    useEffect(() => {

      onSnapshot(collectionRef, (querySnapshot) => {
        const channelResults: Channels[] = [];
        querySnapshot.docs.forEach((doc) =>
          channelResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelResults);
      });
    }, []);
  

  return { documents };
}

export default useCollection