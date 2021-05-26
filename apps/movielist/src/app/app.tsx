import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import MovieList from './containers/movie-list/movie-list';

export function App() {
  return (
    <div className={styles.app}>
      <MovieList />
    </div>
  );
}

export default App;
