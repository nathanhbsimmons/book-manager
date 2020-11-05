import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Books() {
    const [books, setBooks] = useState([])
    const [hasError, setHasError] = useState(false)
    const {loading, setLoading} = useState(false)

    useEffect(() => {
      fetch("/api/books/index")
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(res => {
            console.log(res)
            setBooks(res);
            // setLoading(false)
        }
        ).catch(err => {
            // setHasError(true);
            // setLoading(false)
            this.props.history.push("/")
        });
    }, [])
    console.log(books)
    return (
        <div>
            {books.map( book => <div>{book.title}</div>)}
        </div>
    )
}

export default Books;
