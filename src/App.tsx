
import './App.css'
import { User } from './person'
import { UserProvider } from './UserContextProvider'

function App() {


  return (
    <UserProvider>
      <User name={"Atreyu"} age={15} isMarried={false}/>
      <User name={"Damon"} age={36} isMarried={false}/>
    </UserProvider>
  )
}

export default App
