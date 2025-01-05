import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')
  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addNumber = (event) => {
    event.preventDefault()
    const book = persons.concat(newName)
    setPersons(book)
    console.log(persons.length)
  }
  const show = (person, index) => {
    return(
    <li key={index}>
      {person}
    </li>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input onChange={handleAddName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map((person, index) => show(person,index))}
      </ul>
    </div>
  )
}

export default App