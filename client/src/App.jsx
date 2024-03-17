import React from "react";
import { useGetData } from "./hooks/useGetData.jsx";

const App = () => {
  const { data, loading } = useGetData("/hello");

  if (loading) return <div>Loading...</div>;  //Cюди підставити loader

  return <div>This is data from server: {data}</div>;
};

export default App;
