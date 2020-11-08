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

  // const deleteRecipe = () => {
  //   const {
  //     match: {
  //       params: { id }
  //     }
  //   } = this.props;
  //   const url = `/api/destroy/${id}`;
  //   const token = document.querySelector('meta[name="csrf-token"]').content;

  //   fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       "X-CSRF-Token": token,
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then(() => this.props.history.push("/"))
  //     .catch(error => console.log(error.message));
  // }

  if (loading) return <div>All we have to decide is what to do with the loading time this page has given us.</div>

  return (
    <div style={{ display:'flex', flexWrap: 'wrap' }}>
      {books.map((book, i)=>{
        return  <React.Fragment>
                  <table key={i + book.isbn} style={{border: '3px solid black', margin: '20px', maxWidth: '300px' }}>
                    <tbody>
                      {Object.keys(book).map((value, i)=> {
                        if (['created_at', 'updated_at', 'id'].includes(value)) return null

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
                </React.Fragment>
      })
    }
  </div>
  )
}
