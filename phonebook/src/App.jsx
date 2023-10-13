import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const isName = (person) => {
    // return person.name === newName;
    return false;
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log();
      setPersons(response.data);
    });
  }, []);

  const addName = () => {
    const personObject = {
      name: newName,
      number: phone,
    };
    setMessage(`Added ${newName} to phonebook !!!`)
      .post("http://localhost:3001/persons", personObject)
      .then((response) => {
        console.log(response.data);
        setPersons(persons.concat(response.data));
        setNewName(" ");
        setPhone(" ");
      });
  };

  const updateName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: phone,
    };

    console.log(personObject.name, "thesame");

    // axios
    //   .post("http://localhost:3001/persons", personObject)
    //   .then((response) => {
    //     setPersons(persons.concat(response.data));
    //     setNewName(" ");
    //     setPhone(" ");
    //   });
  };

  const deleteName = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
      axios.get(`http://localhost:3001/persons`).then((response) => {
        setPersons(response.data);
      });
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h1>{message}</h1>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          phone:
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              addName();
            }}
          >
            add
          </button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>

      <ol>
        {persons.map((person) => (
          <div key={person.id}>
            <li>
              {person.name} - {person.number}
            </li>
            <button
              onClick={() => {
                console.log("first");
                if (window.confirm(`Delete ${person.name} ?`)) {
                  window.alert(`${person.name} has been deleted!`);
                  deleteName(person.id);
                }
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default App;
