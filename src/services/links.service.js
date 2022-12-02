import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, push, update } from "firebase/database";
import { BASE_URL } from "../constants/URLs";

//const BASE_URL = 'https://dreamdiary-9cce6-default-rtdb.firebaseio.com/notesBase/Antony';  
//const BASE_URL2 = 'https://dreamdiary-9cce6-default-rtdb.firebaseio.com/users/user1'; 

const user = 'user1';

const firebaseConfig = {
    apiKey: "AIzaSyAkXkBhcH-hC-6peFbwBoPmIlRSe0Glw2c",
    authDomain: "dreamdiary-9cce6.firebaseapp.com",
    projectId: "dreamdiary-9cce6",
    storageBucket: "dreamdiary-9cce6.appspot.com",
    messagingSenderId: "989760806926",
    appId: "1:989760806926:web:95d8cf2efbf60a7b8b9c5f"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);


export class LinksService {

  constructor (month, year) {
    this.year=year;
    this.month=month;

  }
  

    static _makeRequest(type, data, callbackSuccess, callbackFail, url, month, year) {

        fetch(`${url}/dreams/${year}/${month}.json`, {
            method: type,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
          })
        .then((response) => response.json())
        .then((notes) => {
            callbackSuccess(notes);
        })
        .catch(() => {
          console.log("error in " + type);
          callbackFail()
        });

    }

    static getData({callbackSuccess, callbackFail, month, year}) {

            this._makeRequest('GET', undefined, callbackSuccess, callbackFail, BASE_URL, month, year);
    }

    static putData(data, callbackSuccess, callbackFail, year, month) {
        // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  set(ref(db, `users/${user}/dreams/${year}/${month+1}/` + newPostKey), data)
  .then(() => {  
    //this._makeRequest('GET', undefined, ()=>{}, ()=>{}, `${`users/${user}/dreams/${year}/${month+1}/` + newPostKey}`)
    callbackSuccess(newPostKey);
  })
  .catch((error) => {
    callbackFail(error);
  });
  





       // this._makeRequest('PUT', data, callbackSuccess, callbackFail, path);
}
  



}