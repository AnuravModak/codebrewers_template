import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "./actions/posts";
const App = () => {
  const [data, setData] = useState({ fname: null, lname: null, image: null });
  const dispatch = useDispatch();
  console.log(data.fname, data.lname);
  const submit = async (e) => {
    e.preventDefault();
    console.log(data.fname, data.lname, data.image);
    dispatch(createPost(data));
  };

  const filehandler = (e) => {
    const [file] = e.target.files;
    setData({ ...data, image: URL.createObjectURL(file) });
  };

  return (
    <form>
      <label>
        First Name:
        <input
          placeholder="First name"
          type="text"
          onChange={(e) => setData({ ...data, fname: e.target.value })}
        />
      </label>
      <label>
        Last Name:
        <input
          placeholder="Last name"
          type="text"
          onChange={(e) => setData({ ...data, lname: e.target.value })}
        />
      </label>
      <input type="submit" value="Submit" onClick={submit} />

      <input type="file" onChange={filehandler} />
      <img src={data.image} alt="" />
    </form>
  );
};
export default App;
