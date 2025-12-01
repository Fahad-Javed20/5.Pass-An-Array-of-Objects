
import './App.css'
import UserCardList from './components/UserCardList'
import type { UserType } from './types/UserType';

function App() {
 

const usersList: UserType[] = [
  {
    id: 1,
    name: "Ali",
    fatherName: "Ahmed",
    email: "ali@example.com",
    phone: "03001234567"
  },
  {
    id: 2,
    name: "Fahad",
    fatherName: "Javed",
    email: "fahad@example.com",
    phone: "03007654321"
  },
  {
    id: 3,
    name: "Sara",
    fatherName: "Imran",
    email: "sara@example.com",
    phone: "03005556677"
  },
  {
    id: 4,
    name: "Hamza",
    fatherName: "Khalid",
    email: "hamza@example.com",
    phone: "03001112222"
  },
  {
    id: 5,
    name: "Ayesha",
    fatherName: "Aslam",
    email: "ayesha@example.com",
    phone: "03009998877"
  }
];


  return (
    <>
      <UserCardList UserData = {usersList}/>
    </>
  )
}

export default App
