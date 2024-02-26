import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable";
//import UserTable from "../components/UserTable";
type Props = BaseProps;

export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <p>
        Simple exercise to demonstrate Rendering Lists and the mandatory use of
        keys
      </p>
      <UserTable users={users} />
    </>
  );
}
