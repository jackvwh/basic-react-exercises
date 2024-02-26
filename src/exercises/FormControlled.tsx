import { BaseProps } from "../types";
import { useState } from "react";
import { User } from "../data/data";
import UserFormControlled from "../components/UserFormControlled";

export default function FormControlled({ title }: BaseProps) {
  const [submittedUser, setSubmittedUser] = useState<User | null>();

  const onSubmitUser = (newUser: User) => {
    setSubmittedUser(newUser);
  };

  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>
        <h2>{title}</h2>
        <div style={{ backgroundColor: "lightblue", margin: 20 }}>
          <UserFormControlled
            title="User Form Controlled"
            onSubmitUser={onSubmitUser}
          />
        </div>
        <p>{JSON.stringify(submittedUser)}</p>
      </div>
    </>
  );
}
