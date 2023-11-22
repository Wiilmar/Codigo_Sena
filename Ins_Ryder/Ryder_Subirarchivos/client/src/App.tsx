import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers"
import './App.css'

function App() {
  const { users, refetchUsers } = useUsers()

  return (
    <>
      <main>
        {/* USER FORM */}
        <UserForm refetchUsers={users} />
        <UserList users={users} />
      </main>
    </>
  )
}

export default App
