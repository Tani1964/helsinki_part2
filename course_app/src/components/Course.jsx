import Content from "./Content"
import Header from "./Header"

const Course = ({course}) => {
  return (
    <div>
        {course.map((course)=>(
          <div key={course.id}>
          <Header title={course.name}/>
          <Content parts={course.parts}/>
          </div >
          
        ))}
        
    </div>
  )
}

export default Course