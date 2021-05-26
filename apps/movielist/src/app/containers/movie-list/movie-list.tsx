import React, { useEffect, useState } from 'react';

import './movie-list.module.css';
import Card, { IMovie } from '../../components/card/card';

/* eslint-disable-next-line */
export interface MovieListProps {}

export function MovieList(props: MovieListProps) {
  const [ data , setData] = useState<IMovie[]>( [])
  const [ loading , setLoading] = useState<boolean>( true)
  const [ error, setError ] = useState<any|null>(null);

  useEffect(() => {
    fetch('/assets/data.json')
      .then( (resp) => resp.json())
      .then( movies => { setData(movies) })
      .catch( err => {
        console.log("Error fetching data");
        setError(err);
      })
      .finally(() => setLoading(false));

    }, []);

  if(loading) {
    return (<>
      <div>Loading ...</div>
    </>);
  } else {
    return (
      <>
        <h1>Movie List</h1>
        { data.map(movie => <Card key={movie.id} movie={movie} />) }
      </>
    )

  }
}

export default MovieList;
