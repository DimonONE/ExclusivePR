import React, { FC } from 'react';
import styled from './style.module.scss';
import { Link } from 'react-router-dom';

interface CardsCategoriesType {
    id: number
    image: string
    logo: string
}

interface IProps {
    categories: CardsCategoriesType[]
}

export const CardCategories: FC<IProps> = ({ categories }) => (
  <div className={styled.cards}>
    {
        categories.map((card) => (
          <>
            <Link
              to="/ss"
              key={card.id}
              className={styled.cardsContainer}
            >
              <img className={styled.image} src={card.image} alt="img" />

              <div className={styled.cardsContent}>
                <img className={styled.logo} src={card.logo} alt="img" />
                <div className={styled.cardsInfo}>
                  <Link to="/title" className={styled.title}>super sale</Link>
                  <Link to="/subTitle" className={styled.subTitle}>Summer collection</Link>
                </div>
              </div>
            </Link>
          </>
        ))
     }
  </div>
);
