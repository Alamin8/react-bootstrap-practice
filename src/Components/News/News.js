import React from 'react';
import { Card, Button } from 'react-bootstrap'
const News = (props) => {
    const { publishedAt,urlToImage,title, description, url} = props.article
    return (
        <Card>
            <Card.Img variant="top" src={urlToImage} />
            <small className="text-muted">{publishedAt}</small>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" href={url}>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;

