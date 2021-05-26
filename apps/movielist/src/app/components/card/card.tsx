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
    <div>
      <h2>{`#${props.movie.ranking} - ${props.movie.title} (${props.movie.year})`}</h2>
      <img src={props.movie.img.src} alt={props.movie.img.alt} width='200' />
      <p>{`Distributor: ${props.movie.distributor}`}</p>
      <p>{`Amount: ${props.movie.amount}`}</p>
    </div>
  );
}

export default Card;
