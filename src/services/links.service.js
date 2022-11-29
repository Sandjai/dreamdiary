


const BASE_URL = 'https://dreamdiary-9cce6-default-rtdb.firebaseio.com/notesBase/Antony';      


  

export class LinksService {

    static getLinks(callbackSuccess, callbackFail) {

        fetch(`${BASE_URL}/notes.json`)
        .then((response) => response.json())
        .then((notes) => {
            callbackSuccess(notes);
        })
        .catch(() => {
          console.error("error in getLinks");
          callbackFail()
        });
    }


}