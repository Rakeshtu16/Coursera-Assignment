import React, { Component } from 'react';
import {Card} from 'react-bootstrap';


function RenderDish({dish}) {
    return(
        <Card>
            <Card.Img width="100%" src={dish.image} alt={dish.name} />
            <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

class DishDetail extends Component {

    

    render() {
        const dish = this.props.dish;
        if(dish == null) {
            return(
                <div></div>
            )
        }

        const comments = dish.comments.map((comment) => {
            return(
                    <li key={comment.id}>
                        <p>{comment.comment} <br/> --{comment.author} -{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
        )});

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-md-6">
                        <p className="text-center">Comments</p>
                        <ul className="list-unstyled">
                            {comments}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DishDetail;