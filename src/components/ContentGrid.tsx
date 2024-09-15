import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import GridItem from './GridItem';
import SearchBar from './SearchBar';

const ContentGrid = () => {
  const [movies, setMovies] = useState<any>([]);
  const [filteredMovies, setFilteredMovies] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
  useEffect(() => {
    loadMovies(page);
  }, []);

  const loadMovies = async (page: any) => {
    try {
      const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
      const newMovies = response.data.page['content-items'].content;

      if (newMovies.length === 0) {
        setHasMore(false); 
        return;
      }

      setMovies((prev: any) => [...prev, ...newMovies]);
      setFilteredMovies((prev: any) => [...prev, ...newMovies]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
    loadMovies(page + 1);
  };

  const handleSearch = (query: string) => {
    const filtered = movies.filter((movie: any) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={page <=3 ? fetchMoreMovies : () => {}}
        hasMore={hasMore}
        loader={<p style={styles.loadingText}>{page <=3 ? "Loading..." :"No more movies to load."}</p>}
        endMessage={<p style={styles.loadingText}>No more movies to load.</p>}
      >
        <div style={styles.gridContainer}>
          {filteredMovies.map((movie: any, index: any) => (
            <GridItem key={index} title={movie.name} imageUrl={`https://test.create.diagnal.com/images/${movie['poster-image']}`} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    padding: '10px',
    marginTop:"50px"
  },
  loadingText: {
    color: '#ffffff',
    padding: '20px',
  },
};

export default ContentGrid;
