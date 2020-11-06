import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


export default function Books() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
    fetch("/api/books/index")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        setLoading(false)
        throw new Error("Network response was not ok.");
      })
      .then(res => {
          setBooks(res);
          setLoading(false)
      }
      ).catch(e => {
          setLoading(false)
      });
  }, [])

  if (loading) return <div>All we have to decide is what to do with the loading time this page has given us.</div>

  return (
    books.map((book, i)=>{
      console.log(book)
      return  <table key={i + book.isbn} style={{border: '3px solid black', margin: '20px', maxWidth: '300px' }}>
                <tbody>
                  {Object.keys(book).map((value, i)=> {
                    return (<tr style={{border: '2px solid black'}} key={i + value}>
                              <td style={{border: '1px solid black'}}>{value}</td>
                              <td style={{border: '1px solid black'}}>
                                {value === 'title' ?  <Link to="/bookpage">{book[value]}</Link> : book[value]}
                              </td>
                            </tr>)
                  })}
                  <tr>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                </tbody>
            </table>
    })
  );
}