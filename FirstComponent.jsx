const string = "This is a text"
const number = 123456
const array = "React course, 4, 1.000.000"
const boolean = true
const funcion = () => 1+1
const object = { name: 'Javascript course', duration: 4 }
const date = new Date()

export const FirstComponent = () => {
  return (
    <><h1>{JSON.stringify(object)}</h1><h1>{string}</h1><h1>{number}</h1><h1>{JSON.stringify(date)}</h1></>
  )
}
