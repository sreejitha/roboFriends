import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map(r => {
        return <Card key={r.id} id={r.id} name={r.name} email={r.email}/>

    })
    return (
        <div>
        {cardComponent}
        </div>);
}

export default CardList;