import React, { FC } from 'react';
import styled from './style.module.scss';
import Component from '../organisms/cardsCategories/component';

const CategoriesPage: FC = () => (
  <div className={styled.productPage}>
    <div className={styled.productPageBackground} />
    <div className={styled.component}>
      <Component />
    </div>
  </div>
);

export default CategoriesPage;
