import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      fetch(url,
        {
          headers: {
            "Content-type":"application/json",
            "Authorization":` Bearer ${localStorage.getItem("token")}`
          }
        }
        )
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoader(!loader)
        });
    }, [url]);
  
    return {data, loader};
  };
  