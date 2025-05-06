# ΣΙΝΕμας adapters

This is a repository for all the third party adapters, made by the community for the site [sinemas.info](www.sinemas.info).

## Add your own city

To add your city you just need to add a file named `NameOfCinemaManager.ts` that implements `CinemaManagerInterface` for each cinema in your location.

These files shall be added under `src/locations/NAME_OF_PREFECTURE/city` for example `src/locations/crete/heraklion`. These rule is not enforced and shall be discussed, as for example Athens is a city of cities, for per location deviations may apply.

---

The interface only requires method `fetchCinemaDetails`, which returns `CinemaWithMovies`. This gives you the freedom (browser crawler/API) to implement it in any way you want. Keep in mind though that only one file can be submitted.