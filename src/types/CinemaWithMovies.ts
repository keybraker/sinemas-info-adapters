import { Cinema } from "./Cinema";
import { MovieWithSessions } from "./MovieWithSessions";

export type CinemaWithMovies = Cinema & {
  movies: MovieWithSessions[];
};
