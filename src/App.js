import React, { useState } from "react";
import useFetch from "./Hooks/useFetch";
import { Container } from "react-bootstrap";
import JobsPagination from "./Components/JobsPagination";
import Jobs from "./Components/Jobs";
import Search from "./Components/Search";
import "./App.css";

function App() {
  // const URL =
  //   "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetch(params, page);

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setParams({ ...params, [name]: value });
    setPage(1);
  };

  return (
    <Container>
      <h1 className="mb-3">GitHub Jobs</h1>
      <Search change={onChange} />
      <JobsPagination page={page} setPage={setPage} />

      <p>{loading ? "Loading" : ""}</p>
      <p>{error ? "error" : ""}</p>
      {jobs.map((jobs) => {
        return <Jobs key={jobs.id} jobs={jobs} />;
      })}
      <JobsPagination page={page} setPage={setPage} />
    </Container>
  );
}

export default App;
