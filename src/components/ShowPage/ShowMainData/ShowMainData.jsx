import React from 'react';
import IMG_PLACEHOLDER from '../../../assets/not-found.png';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';
import useGetShow from '../../hooks/useGetShow';

const ShowMainData = () => {
  const { name, rating, summary, genres, image } = useGetShow();

  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <span>{rating.average || 'N/A'}</span>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Genres:{' '}
          <TagList>
            {genres.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;
