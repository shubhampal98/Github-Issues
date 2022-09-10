import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Issue from './components/Issue/Issue';
import axios from 'axios';
import data from './data.json';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './components/Loader/Loader';


function App() {
  const [issues, setIssues] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('https://api.github.com/repos/facebook/react/issues');
    setIssues([...issues, ...res.data]);
  }

  useEffect(() => {
    fetchData();
    console.log('hello');
  },[])
  return (
    <Fragment>
      <Header />
      <div className="container">
      <InfiniteScroll
          dataLength={issues.length}
          next={fetchData}
          hasMore={true}
          loader={<h1 style={{textAlign: "center"}}>Loading...</h1>}
        >
        {issues.map(issue => (
          <Issue issue={issue}/>
        ))}
      </InfiniteScroll>
      </div>
    </Fragment>
  );
}

export default App;
