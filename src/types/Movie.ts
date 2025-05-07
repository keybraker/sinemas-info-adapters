import { MovieGenre } from "../enum/MovieGenre";
import { TranslationEnum } from "../enum/TranslationEnum";

export type Movie = {
  id: number;
  imdbId?: string;

  title: string;
  originalTitle: string;
  originalLanguage?: string;

  img: string;
  youtubeKey?: string;

  plot: string;
  genres?: MovieGenre[];
  releaseDate?: Date;
  releaseYear?: number;
  runtime?: number;

  status?: string;
  budget?: number;
  revenue?: number;

  director?: string[];
  cast?: string[];

  voteAverage?: number;
  voteCount?: number;

  translationType?: TranslationEnum;
  is3d?: boolean,

  languages?: string[];
  languagesEng?: string[];

  comingSoon?: boolean;
  tagline?: string;

  popularity?: number;
};
