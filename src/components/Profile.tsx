import { ProfileProps } from "../types";

export default function Profile({
  name,
  email,
  isActive,
  singleLine,
}: ProfileProps) {
  return (
    // if singleLine is true, return a single line with the name, email, and active status else return a div with the name, email, and active status on separate lines
    <div>
      {singleLine ? (
        <p>
          {name} - {email} - {isActive ? "Active" : "Inactive"}
        </p>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>Email: {email}</p>
          <p>Status: {isActive ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
}
