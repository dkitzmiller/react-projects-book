import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import MovieList from './containers/movie-list/movie-list';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <div className='container-fluid'>
      <nav className={'navbar sticky-top navbar-light bg-dar'}>
        <h1 className={'navbar-brand text-light'}>movieList</h1>
      </nav>
      <MovieList />
    </div>
  );
}

export default App;
