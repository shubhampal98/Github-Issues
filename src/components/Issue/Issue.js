import React from 'react'
import './Issue.css';
import { IconContext } from "react-icons";
import { FaRegDotCircle } from "react-icons/fa";
import Badge from '../Badge/Badge';


export default function Issue({issue}) {
  
  return (
    <div className="issue">
      <div className="issue-info">
        <IconContext.Provider value={{className:"circle-icon" }}>
        <FaRegDotCircle /> 
        </IconContext.Provider>
        <p>{issue.title}</p>
        <div className="badges">
        {issue.labels && issue.labels.map((label,idx) => (
          <Badge key={idx} title={label.name} color={label.color}/>
        ))}
        </div>
      </div>
      <div className="user-info">
        <p>#{issue.number} opened on {new Date(issue.created_at).toLocaleDateString()} by ${issue.user.login}</p>
      </div>
    </div>
  )
}
