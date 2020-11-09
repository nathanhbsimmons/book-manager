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
          // this.props.history.push("/")
      });
  }, [])

  const noBooks = (
    <div styles={{ alignItems: 'center', justifyContent: 'center' }}>
      <h4>
        You don't have any books in your collection yet. Want to <Link to="/add_book">add one</Link> now?
      </h4>
    </div>
  );

  if (loading) {
    return <div styles={{ alignItems: 'center', justifyContent: 'center'}}>All we have to decide is what to do with the loading time this page has given us.</div>
  }

  return (
    <div style={{
          display:'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
         }}> {books.length > 0 ? books.map((book, i)=>{
              return  <React.Fragment key={i + book.isbn}>
                        <table
                          style={{
                            border: '3px solid black',
                            margin: '20px',
                            maxWidth: '300px'
                          }}>
                          <tbody>
                            {Object.keys(book).map((value, i)=> {
                              if (['created_at', 'updated_at', 'id'].includes(value)) return null

                              return (<tr style={{border: '2px solid black'}} key={i + value}>
                                        <td style={{border: '1px solid black'}}>{value}</td>
                                        <td style={{border: '1px solid black'}}>
                                          {value === 'title'
                                          ?  <Link to="/book">{book[value]}</Link>
                                          : book[value]}
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
                      </React.Fragment>
              }) : noBooks
            }
    </div>
  )
}
