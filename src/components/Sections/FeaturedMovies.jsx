import React from "react";
import { Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import MovieCard from "../MovieCard";

const listOfMovies = Array.from(Array(10).keys());
const FeaturedMovies = () => {
  const listOfMoviesCards = listOfMovies.map((el) => <MovieCard />);
  return (
    <div className="feature">
      <div className="feature_header">
        <h1>Featured Movie</h1>
        <Button
          style={{
            color: "#BE123C",
          }}
          rightIcon={<IconChevronRight color="#BE123C" />}
          variant="outline"
        >
          See more
        </Button>
      </div>
      <div className="card_container">{listOfMoviesCards}</div>
    </div>
  );
};

export default FeaturedMovies;
