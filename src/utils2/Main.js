import React from "react";

export default function Main({ children }) {
  return (
    <main
      className="main"
      data-bs-spy="scroll"
      data-bs-target="#sidebar"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
    >
      {children}
    </main>
  );
}
