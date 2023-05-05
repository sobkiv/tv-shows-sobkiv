import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, rating }) => {
  return (
    <StyledShowCard>
      <Link className="btns" to={`/show/${id}`}>
        <div className="img-wrapper">
          <img src={image} alt="show" />
        </div>
      </Link>
      <h1>{name}</h1>
      <p>{rating || 'N/A'}</p>
    </StyledShowCard>
  );
};

export default memo(ShowCard);
