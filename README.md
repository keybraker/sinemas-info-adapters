# ΣΙΝΕμας Community Adapters

The repository for all the third party adapters, made by the community for the community of the site _[sinemas.info](www.sinemas.info)_.

## Add your own region / city

To add your city you just need to create a file named `NameOfCinemaManager.ts`, that implements `CinemaManagerInterface` for each cinema in your location (region/city).

The interface only requires method `fetchCinemaDetails`, which returns `CinemaWithMovies`. This gives you the freedom to implement it in any way you want (browser crawler/API). Keep in mind though that only one file can be submitted with one test, testing its validity.

### Location to add your file

Both files (code/test) shall be added under `src/locations/NAME_OF_PREFECTURE/city` for example `src/locations/crete/heraklion`. This guideline is not enforced and shall be discussed, as for example Athens is a city of cities, and per location deviations may apply.
