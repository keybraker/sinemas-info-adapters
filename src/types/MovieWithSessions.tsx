import { Movie } from "./Movie";
import { Session } from "./Session";

export interface MovieWithSessions extends Movie {
  sessions: Session[];
}