interface UserCardListProps {
    UserData:UserType[]
}

import type { UserType } from "../types/UserType"
// import UserCard from "./UserCard"

const UserCardList = ({UserData}:UserCardListProps) => {
  return (
    <div className="flex" >
        {UserData.map((data)=>(
            <div className="flex flex-col px-10" key={data.id}>

                    <h1>{data.name}</h1>
                    <h1>{data.fatherName}</h1>
                    <h1>{data.email}</h1>
                    <h1>{data.phone}</h1>
            </div>
        ))}
        {/* {UserData.map((data)=>(
            // <UserCard key={data.id} 
            // user = {data}
            />
        ))} */}
    </div>
  )
}

export default UserCardList