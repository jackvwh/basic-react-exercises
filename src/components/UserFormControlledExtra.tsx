import { BaseProps } from "../types";
import { FormEvent, useState } from "react";
import { User, getNextId } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserFormControlledExtra({
  title,
  onSubmitUser,
}: UserFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: User = {
      id: getNextId(),
      name: name || "",
      email: email || "",
      isActive: isActive || false,
    };

    onSubmitUser(newUser);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name:{" "}
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Email:{" "}
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Active:{" "}
        <input
          type="checkbox"
          name="isActive"
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
