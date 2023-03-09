import React from 'react'
import {useState, useEffect} from 'react';


function Manager() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
      fetch(`http://localhost:4000/getdata_byQuery`)
        .then(response => response.json())
        .then((usefulData) => {
          console.log(usefulData);
          setLoading(false);
          setData(usefulData);
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`)
        });
    }, []);
   
    return (
      <>
        <div className="App">
          {loading && <p>Loading...</p>}
          {!loading && <p>Fetched data</p>}

          {data.map((item) => (
          <div> 
            <ol key={item.ProductID}>
            ProductID: { item.ProductID }
              <br />
              Product: { item.Product }
              <br />
              num_units: { item.num_units }
              <br />
              supplier: { item.supplier }
              <br />
          </ol>
      </div>
        ))}

        </div>
      </>
    )
  }

export default Manager