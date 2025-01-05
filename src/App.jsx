const Part = ({name, exercises}) => {
  return <p>{name} {exercises}</p>
}
const Course = ({course_name, parts}) => {
  return (
      <div>
        <h3>{course_name}</h3>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
        <Total parts={parts} />
      </div>
  )
}
const Total = ({ parts }) => {
  return(
  <p><b>total of {parts.reduce((accumulator, part) => accumulator + part.exercises, 0)} exercises</b></p>
  )
}
const App = () => {
  const courses = [{
    course_name: 'Half Stack application development' , 
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },
  {
  course_name: 'Node.js',
  parts: [
    {
      name: 'Routing',
      exercises: 3
    },
    {
      name: 'Middlewares',
      exercises: 7
    }
  ]
}]

  return(
      <div>
        <h1>Web development curriculum</h1>
        {courses.map(Course)}
      </div>
  )
}
export default App