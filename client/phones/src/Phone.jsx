import { useState, useEffect } from "react";

function Phone (props) {

    const id =  props.id

    const [phone, setPhone] = useState([])

    const apiURL = `http://localhost:5005/phones/${id}`

    useEffect(() => {
        fetch(apiURL)
          .then((res) => res.json())
          .then((data) => setPhone(data))
          .catch((err) => console.log(err));
      }, [apiURL]);

    if(phone === undefined || phone === null) {
        return (<p>loading</p>)
    } 

    return (
        <>
            <p>{phone.manufacturer}</p>
            <p>{phone.description}</p>
            <p>{phone.color}</p>
            <p>{phone.price}</p>
            <p>{phone.screen}</p>
            <p>{phone.processor}</p>
            <p>{phone.ram}</p>
        </>
    )
}

export default Phone;