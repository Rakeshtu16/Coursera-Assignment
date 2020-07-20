import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Container, Row} from 'reactstrap';

function RenderDishItem({dish, onClick}) {
    return(
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card onClick={() => onClick(dish.id)}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

const Menu = (props) => {
    const menu = props.dish.map((dish) => {
        return(
            // Here we have to enter props.onClick because in the props.dish we are only proping dish, not onclick so, props.onClick
            <RenderDishItem dish={dish} onClick={props.onClick} />
        )
    })

    //Main Return
    return(
        <Container>
            <Row>   
                {menu}
            </Row>
        </Container>
    )

}
        
export default Menu;