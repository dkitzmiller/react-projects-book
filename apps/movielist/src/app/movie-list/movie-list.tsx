import React from 'react';

import './movie-list.module.css';
import Card from '../card/card';

/* eslint-disable-next-line */
export interface MovieListProps {}

export function MovieList(props: MovieListProps) {
  return (
    <div>
      <h1>Movie List</h1>
      <Card />
    </div>
  );
}

export default MovieList;
