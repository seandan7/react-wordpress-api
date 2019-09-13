import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Post = props => {
  
    return (
        <div className="py-5">
            <center><h1>Blog Posts</h1></center>
            <Row className="mt-5">
                <Col md={12} className="mt-3 mt-md-0">
                    <div className="card">
                        <div className="card-body">
                            <img alt={props.post.title.rendered} className="w-100" />
                            <h5 className="mt-3 card-title">{props.post.title.rendered}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><p dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }}></p></h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Post;