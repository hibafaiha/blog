import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";


export default function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const incomingData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const formattedData = await incomingData.json();
      setBlogs(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
<center>
      <Container>
      <h1 className="title">Trending  Blogs</h1>
        {blogs.map((blog, i) => {
          return (
            <Card key={i} className="card">
              <Card.Body>
              <Card.Title>Blog num {i+1}</Card.Title>
              <hr />
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Button style={{backgroundColor: '#f6f6f6f', color: 'white'}}>Read More</Button>
              </Card.Body>
            </Card>
          );
        })}

      </Container>
      </center>
    </div>
  );
}
