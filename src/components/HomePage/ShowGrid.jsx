import React from 'react';
import ShowCard from './ShowCard/ShowCard';
import IMAGE_NOT_FOUND from '../../assets/not-found.png';
import { useSelector } from 'react-redux';
import { FlexGrid } from '../styled';
import NoResult from './NoResult';

const ShowGrid = () => {
  const data = useSelector((state) => state.show.data);

  return (
    <FlexGrid>
      {data.length !== 0 ? (
        data.map(({ show }) => {
          const { id, name, image, rating: { average} } = show;
          return (
            <ShowCard
              key={id}
              id={id}
              name={name}
              image={image ? image.original : IMAGE_NOT_FOUND}
              rating={average}
            />
          );
        })
      ) : (
        <NoResult />
      )}
    </FlexGrid>
  );
};

export default ShowGrid;
