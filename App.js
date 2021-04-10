import React from "react";
import Navigation from "./AppNavigation";
import { SearchRestContext } from "./servicws/locationContext";
import { RestContext } from "./servicws/RestaurantContext";
import { FavouriteProvider } from "./servicws/FavouriteContext";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZY9unmv9nfb-0XwcRoScCeziLnFcg9do",
  authDomain: "mealstogo-ba49c.firebaseapp.com",
  projectId: "mealstogo-ba49c",
  storageBucket: "mealstogo-ba49c.appspot.com",
  messagingSenderId: "768153614008",
  appId: "1:768153614008:web:b69926ac6dca0c1c56664d",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <FavouriteProvider>
      <SearchRestContext>
        <RestContext>
          <Navigation />
        </RestContext>
      </SearchRestContext>
    </FavouriteProvider>
  );
}
