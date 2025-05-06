import { CinemaWithMovies } from "../types/CinemaWithMovies";

export interface CinemaManagerInterface {
    fetchCinemaDetails(): Promise<CinemaWithMovies[] | null>;
}