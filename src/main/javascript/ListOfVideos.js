import React, { useEffect, useState } from 'react';

export default function ListOfVideos () {
    const [data, setData] = useState([]);

    useEffect(() => {
      // declare the async data fetching function
      const fetchData = async () => {
        // get the data from the api
        const response = await fetch("/api/videos");
        // convert the data to json
        const json = await response.json();
        // set state with the result
        setData(json);
      }

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);;
    }, [])

    return (
        <ul>
            {data.map(item => <li>{item.name}</li>)}
        </ul>
    )
}
