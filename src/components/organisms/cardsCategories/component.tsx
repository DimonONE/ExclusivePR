import React, { FC, useState } from 'react';
import styled from './style.module.scss';
import categorie1 from '../../../images/background.jpg';
import testLogo from '../../../images/icon/testLogo.svg';
import { CardCategories } from '../../molecules/cardCategories/index';
import Button from '../../atoms/buttons/component';

interface CardsCategoriesType {
    id: number
    image: string
    logo: string
}

const CardsCategories: FC = () => {
    const [datas, setDatas] = useState<CardsCategoriesType[]>([
        { id: 1, image: categorie1, logo: testLogo },
        { id: 2, image: categorie1, logo: testLogo },
        { id: 3, image: categorie1, logo: testLogo },
        { id: 4, image: categorie1, logo: testLogo },
        { id: 5, image: categorie1, logo: testLogo },
        { id: 6, image: categorie1, logo: testLogo },
        { id: 7, image: categorie1, logo: testLogo },
        { id: 8, image: categorie1, logo: testLogo },
        { id: 9, image: categorie1, logo: testLogo },
        { id: 10, image: categorie1, logo: testLogo },
        { id: 11, image: categorie1, logo: testLogo },
    ]);

    return (
      <div className={styled.cardsWrapper}>
        <CardCategories categories={datas} />
        <Button
          submit
          onClick={() => setDatas((prev) =>
            [...prev, { id: 2, image: categorie1, logo: testLogo }])}
          className={styled.buttonLoadMore}
        >Load more
        </Button>
      </div>
    );
};

export default CardsCategories;
