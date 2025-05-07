import { DemoCinemaManager } from './demoCinemaManager';

describe('DemoCinemaManager', () => {
  let cinemaManager: DemoCinemaManager;

  beforeEach(() => {
    cinemaManager = new DemoCinemaManager();
  });

  it('should create an instance', () => {
    expect(cinemaManager).toBeInstanceOf(DemoCinemaManager);
  });

  it('should fetch cinema details', async () => {
    const result = await cinemaManager.fetchCinemaDetails();

    expect(result).not.toBeNull();
    expect(Array.isArray(result)).toBe(true);
    expect(result!.length).toBeGreaterThan(0);
    const cinema = result![0];
    expect(cinema).toHaveProperty('id');
    expect(cinema).toHaveProperty('name');
    expect(cinema).toHaveProperty('movies');
    expect(Array.isArray(cinema.movies)).toBe(true);
    expect(cinema.movies.length).toBeGreaterThan(0);
    const movie = cinema.movies[0];
    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('sessions');
    expect(Array.isArray(movie.sessions)).toBe(true);
    expect(movie.sessions.length).toBeGreaterThan(0);
    const session = movie.sessions[0];
    expect(session).toHaveProperty('date');
    expect(session).toHaveProperty('theaters');
    expect(Array.isArray(session.theaters)).toBe(true);
    const theater = session.theaters[0];
    expect(theater).toHaveProperty('name');
    expect(theater).toHaveProperty('showSpecifications');
    expect(Array.isArray(theater.showSpecifications)).toBe(true);
  });

  it('should have a demo movie with correct details', async () => {
    const result = await cinemaManager.fetchCinemaDetails();
    const cinema = result![0];
    const movie = cinema.movies[0];

    expect(movie.title).toBe('Demo Movie');
    expect(movie.originalTitle).toBe('Demo Movie Original');
    expect(movie.releaseYear).toBe(2025);
  });

  it('should have valid show times in theater specifications', async () => {
    const result = await cinemaManager.fetchCinemaDetails();
    const cinema = result![0];
    const movie = cinema.movies[0];
    const session = movie.sessions[0];
    const theater = session.theaters[0];

    theater.showSpecifications.forEach(spec => {
      expect(spec).toHaveProperty('time');
      expect(spec).toHaveProperty('ticketLink');
      expect(spec).toHaveProperty('is3d');
      expect(spec).toHaveProperty('translationType');
      expect(spec.time).toMatch(/^\d{2}:\d{2}$/);
    });
  });
});