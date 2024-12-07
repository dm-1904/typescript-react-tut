import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const User = (props: Props) => {

  const {users} = useContext(UserContext)

  const [personBio, serPersonBio] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    serPersonBio(e.target.value)
  }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  // }

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person {props.isMarried ? "is married" : "is single"}</p>
      <p>
        {" "}
        {props.name} Bio: {personBio === null ? "No Bio" : personBio}
      </p>
      <input
        type="text"
        onChange={handleChange}
        />
    </div>
  )
}
