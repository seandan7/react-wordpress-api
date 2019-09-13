import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Posts = props => {


    return (
        <div className="py-5">
            <center><h1>Blog Posts</h1></center>
            <Row className="mt-5">
                {props.posts.map((post, index) => (
                    <Col md={6} onClick={props.goToPost} className="mt-3 mt-md-0" id={post.id} key={index}>
                        <div className="card" >
                            <div className="card-body">
                                <img alt={post.title.rendered} className="w-100" />
                                <h5 className="mt-3 card-title">{post.title.rendered}</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p></h6>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

/*const Posts = ({props, posts}) => {
    

};*/

export default Posts;