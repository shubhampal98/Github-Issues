import React from 'react'

export default function Badge ({title,color}) {
  const styles = {
    display: "inline-block",
    padding: "0 7px",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "18px",
    whiteSpace: "nowrap",
    border: "1px solid transparent",
    borderRadius: "2em",
    color: `#${color}`,
    backgroundColor: `rgba(red(#${color}),green(#${color}),blue(#${color}),0.3)`,
    borderColor: `#${color}`
  }
  return (
    <div style={styles}>{title}</div>
  )
}
