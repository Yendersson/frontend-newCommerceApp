import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoader(!loader)
        });
    }, [url]);
  
    return {data, loader};
  };
  