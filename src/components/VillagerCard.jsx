// const BASE_URL = "https://api.nookipedia.com/villagers";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Demo() {
  const getAPI = () => {
    var myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "47a0a8f3-580f-44c8-ba78-4bd1fdaafc26");
    myHeaders.append("Accept-Version", "1.0.0");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const [villagers, setVillagers] = useState(null);

    useEffect(() => {
      const url = "https://api.nookipedia.com/villagers";
      axios.get(url).then((res) => {
        setVillagers(res.data);
      });
    }, []);

    fetch("https://api.nookipedia.com/villagers", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        const villagersArray = data;
        console.log(villagersArray);
      });
  };

  return (
    <div>
      MY API
      <br />
      <button onClick={getAPI}>FETCH API</button>
    </div>
  );
}
