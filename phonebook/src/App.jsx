import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then((response)=>{
      let info = response.data
      setPersons(response.data)
      console.log(info)
    })
  },[])

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: phone,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName(" ");
    setPhone(" ");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          phone:
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>

      <ol>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
