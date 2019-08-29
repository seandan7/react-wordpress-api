import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Posts = ({posts}) => {
    return (
        <div>
        <center><h1>Contact List</h1></center>
        <Row>
        {posts.map((post) => (
        <Col md={6} className="mt-3 mt-md-0">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{post.title.rendered}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.content.rendered}</h6>
                </div>
            </div>
        </Col>
        ))}
        </Row>
      </div>
    )
};

export default Posts;