import { BaseProps } from "../types";
import { useState } from "react";
import { User } from "../data/data";
import UserFormControlledExtra from "../components/UserFormControlledExtra";

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
          <UserFormControlledExtra
            title="User Form Controlled"
            onSubmitUser={onSubmitUser}
          />
        </div>
        <p>{JSON.stringify(submittedUser)}</p>
      </div>
    </>
  );
}
