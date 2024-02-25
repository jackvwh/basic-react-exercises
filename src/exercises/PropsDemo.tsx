import Profile from "../components/Profile";
import { BaseProps } from "../types";
import { useState } from "react";

export default function Propsdemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      <h3>
        Simple exercise to demonstrates how to use props, and props with
        Typescript{" "}
      </h3>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
    </>
  );
}
