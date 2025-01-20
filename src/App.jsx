import { useState, useEffect } from 'react';
import axios from 'axios';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNumber = (event) => {
    event.preventDefault();

    const names = persons.map((obj) => obj.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, num: newNumber };
      const updatedPersons = persons.concat(newPerson);
      setPersons(updatedPersons);

      // Send new person to backend
      axios
        .post('http://localhost:3001/persons', newPerson) // Fix the endpoint
        .then((response) => {
          console.log(response);
        });
    }

    setNewName('');
    setNewNumber('');
  };

  return (
    <form onSubmit={addNumber}>
      <div>
        Name: 
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        Number: 
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const Filter = ({ persons }) => {
  const [newKeywords, setNewKeywords] = useState('');

  const handleAddKeywords = (event) => {
    setNewKeywords(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person && person.name && person.name.toLowerCase().includes(newKeywords.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with{' '}
        <input
          value={newKeywords}
          onChange={handleAddKeywords}
        />
      </div>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} {person.num}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons') // Ensure the API endpoint is correct
      .then((response) => {
        console.log('Data fetched successfully');
        setPersons(response.data); // Store fetched data in persons state
      });
  }, []);

  return (
    <div>
      <h2>Add a New Entry</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <Filter persons={persons} />
    </div>
  );
};

export default App;