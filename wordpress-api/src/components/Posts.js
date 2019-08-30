import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Posts = ({posts}) => {
    return (
        <div className="py-5">
        <center><h1>Contact List</h1></center>
        <Row className="mt-5">
        {posts.map((post) => (
        <Col md={6} className="mt-3 mt-md-0">
            <div className="card">
                <div className="card-body">
                    <img alt={post.title.rendered} className="w-100" src={post.acf.post_image} />
                    <h5 className="mt-3 card-title">{post.title.rendered}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"><p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p></h6>
                </div>
            </div>
        </Col>
        ))}
        </Row>
      </div>
    )
};

export default Posts;