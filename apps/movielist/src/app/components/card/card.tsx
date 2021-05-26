import React from 'react';

import './card.module.css';

export interface IMovie {
  id: number;
  title: string;
  distributor: string;
  year: number;
  amount: string;
  img: {
    src: string;
    alt: string;
  }
  ranking: number;
}

/* eslint-disable-next-line */
export interface CardProps { movie: IMovie}

export function Card(props: CardProps|any) {
  return (
    <div className={'card'}>
      <img className={'card-img-top'} src={props.movie.img.src} alt={props.movie.img.alt} width='200' />
      <div className={'card-body'}>
        <h2 className={'card-title'}>{`#${props.movie.ranking} - ${props.movie.title} (${props.movie.year})`}</h2>
      </div>
      <ul className={'list-group list-group-flush'}>
        <li className={'list-group-item'}>{`Distributor: ${props.movie.distributor}`}</li>
        <li className={'list-group-item'}>{`Amount: ${props.movie.amount}`}</li>
      </ul>

    </div>
  );
}

export default Card;
