import { useState, useEffect } from "react";
import Phone from './Phone';
import Loading from './Loading';
import "./app.css"

function App() {
  const apiURL = "http://localhost:5005/phones/";

  const [phones, setPhones] = useState([]);
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);

  const selectPhone = (id) => {
    setSelectedPhoneId(selectedPhoneId === id ? null : id);
  }

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setPhones(data))
      .catch((err) => console.log(err));
  }, [apiURL]);

  if (!phones.length) {
    return <Loading />;
  } 

  return (
    <>
    <h1>Phones</h1>
    <div className="all">
      {phones.map((phone) => (
        <div key={phone.id} onClick={() => {selectPhone(phone.id) }}>
          <img
            src={`./../images/${phone.imageFileName}`}
            alt={phone.name}
          />
          <h1>{phone.name}</h1>
          {selectedPhoneId === phone.id && (<Phone id={phone.id} />)}
        </div>
      ))}
    </div>
    </>
  );
}

export default App;