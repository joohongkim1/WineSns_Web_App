import axios from "axios";
import react from "react";

function Response(): any {
  axios
    .get("http://54.180.9.92:8090/WineProject/wine/readAll/1")
    .then(response => {
      return console.log(response);
    })
    .catch(response => {
      return console.log(response);
    });
}

export default Response;
