
import React, { useState } from "react";

const Form1 = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the 'name' value here, like sending it to a server or performing some action.
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form1;