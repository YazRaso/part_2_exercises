import { useState } from 'react';

const PersonForm = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const addNumber = (event) => {
    event.preventDefault();
    const names = persons.map((obj) => obj.name);

    if (names.includes(newName)) {
      alert(`${newName} is already selected. Please choose a different name.`);
    } else {
      const book = persons.concat({ name: newName, num: newNumber });
      setPersons(book);
    }

    setNewName('');
    setNewNumber('');
  };
  return(
  <form onSubmit={addNumber}>
  <div>
    Name: <input value={newName} onChange={handleAddName} />
  </div>
  <div>
    Number: <input value={newNumber} onChange={handleAddNumber} />
  </div>
  <div>
    <button type="submit">Add</button>
  </div>
  </form>
  )
}

const Filter = () => {
  const [newKeywords, setNewKeywords] = useState('');
  const handleAddKeywords = (event) => {
    setNewKeywords(event.target.value);
  };
    // Render individual list item
    const show = ({ name, num }, index) => (
      <li key={index}>
        {name} {num}
      </li>
    );
  
    // Filter and display items
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(newKeywords.toLowerCase())
    );
  
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          Filter shown with{' '}
          <input value={newKeywords} onChange={handleAddKeywords} />
        </div>
        <h2>Add a New Entry</h2>
        <form onSubmit={addNumber}>
          <div>
            Name: <input value={newName} onChange={handleAddName} />
          </div>
          <div>
            Number: <input value={newNumber} onChange={handleAddNumber} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>{filteredPersons.map(show)}</ul>
      </div>
    );
  };
const App = () => {
  return(
  <div>
  <PersonForm />
  <Filter />
  </div>
  )
}
export default App;