import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Issue from './components/Issue/Issue';
import axios from 'axios';
import data from './data.json';

function App() {
  const [issues, setIssues] = useState([]);

  const fetchData = async () => {
    // const res = await axios.get('https://api.github.com/repos/facebook/react/issues');
    console.log(data);
    setIssues([...issues, ...data]);
  }

  useEffect(() => {
    fetchData();
    console.log('hello');
  },[])
  return (
    <Fragment>
      <Header />
      <div className="container">
        {issues.map(issue => (
          <Issue issue={issue}/>
        ))}
        
      </div>
    </Fragment>
  );
}

export default App;
