import { MovieGenre } from "../enum/MovieGenre";
import { TranslationEnum } from "../enum/TranslationEnum";
import { CinemaManagerInterface } from "../interface/CinemaManager.interface";
import { CinemaWithMovies } from "../types/CinemaWithMovies";

export class DemoCinemaManager implements CinemaManagerInterface {
    constructor() {}

    public async fetchCinemaDetails(): Promise<CinemaWithMovies[] | null> {
        const mockCinema: CinemaWithMovies = {
            id: 1,
            name: "Demo Cinema",
            nameEnglish: "Demo Cinema",
            phones: ["2100000000"],
            phonesTickets: ["2100000001"],
            address: "123 Demo Street, Athens",
            email: "contact@democinema.gr",
            img: "https://example.com/democinema.jpg",
            link: "https://democinema.gr",
            routePath: "demo-cinema",
            movies: [
                {
                    id: 101,
                    imdbId: "tt1234567",
                    title: "Demo Movie",
                    originalTitle: "Demo Movie Original",
                    img: "https://example.com/movie.jpg",
                    plot: "This is a demo movie for testing purposes.",
                    genres: [MovieGenre.Action, MovieGenre.Comedy],
                    releaseDate: new Date("2025-01-15"),
                    releaseYear: 2025,
                    runtime: 120,
                    director: ["John Director"],
                    cast: ["Actor One", "Actor Two"],
                    voteAverage: 7.5,
                    translationType: TranslationEnum.Subbed,
                    is3d: false,
                    sessions: [
                        {
                            date: new Date("2025-05-07"),
                            theaters: [
                                {
                                    name: "Theater 1",
                                    showSpecifications: [
                                        {
                                            time: "18:00",
                                            ticketLink: "https://democinema.gr/tickets/101/2025-05-07/18-00",
                                            is3d: false,
                                            translationType: TranslationEnum.Subbed
                                        },
                                        {
                                            time: "21:00",
                                            ticketLink: "https://democinema.gr/tickets/101/2025-05-07/21-00",
                                            is3d: false,
                                            translationType: TranslationEnum.Subbed
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        return [mockCinema];
    }
}