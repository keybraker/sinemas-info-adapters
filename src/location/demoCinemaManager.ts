import { CinemaManagerInterface } from "../interface/CinemaManager.interface";
import { CinemaWithMovies } from "../types/CinemaWithMovies";

export class CinelandpantelisManager implements CinemaManagerInterface {
    constructor() {}

    // @ts-ignore
    public async fetchCinemaDetails(): Promise<CinemaWithMovies[] | null> {
        return null;
    }
}