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
    try{
      const res = await axios.get('https://api.github.com/repos/facebook/react/issues');
      setIssues([...issues, ...res.data]);
    }
    catch(err){
      console.log(err.message);
      setIssues([...issues, ...data]);
    }
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <Fragment>
      <Header />
      <div className="container">
      <InfiniteScroll
          dataLength={issues.length}
          next={fetchData}
          hasMore={true}
          loader={<Loader />}
        >
        {issues.map((issue,idx) => (
          <Issue key={idx} issue={issue}/>
        ))}
      </InfiniteScroll>
      </div>
    </Fragment>
  );
}

export default App;
