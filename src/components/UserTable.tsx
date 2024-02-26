import { User } from "../data/data";

export default function UserTable({ users }: { users: User[] }) {
  return (
    <table className="simple-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <a href="dr.dk">{user.email}</a>
            </td>
            <td>{user.isActive ? "Yes" : "No"}</td>
            <td>
              <button>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
