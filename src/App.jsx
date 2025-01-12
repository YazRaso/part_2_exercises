import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState('');
  const [newName, setNewName] = useState('');
  const [newKeywords, setNewKeywords] = useState('');

  // Handlers for inputs
  const handleAddName = (event) => {
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddKeywords = (event) => {
    setNewKeywords(event.target.value);
  };

  // Add new person to the list
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

export default App;
