# Percy Jackson API
An API REST system providing data on characters, creatures, artifacts, and themes from the Percy Jackson &amp; the Olympians universe (Riordanverse).

The project aims to make data from the Percy Jackson universe available for programming studies using the REST API and for the development of applications for fans of the series, like a websites featuring character profiles, a glossary of terms and words from Greco-Roman mythology, and Camp Hail-Blood RPG games. 

The REST API was builded with the framework **Express** in the code language **TypeScript**. The data used in project from the official website of the saga author Rick Riordan [*Rickriordan.com*], (https://rickriordan.com/), the publisher of the Percy Jackson books [*Readriordan.com*](https://www.readriordan.com/) and the fans website [*Fandom.com*](https://www.fandom.com/).

[![Project tools](https://skillicons.dev/icons?i=express,ts)](https://skillicons.dev)

## Routes of API
- ``/api``: The main route that list of all data about characters, artifacts, cabins, places and books.
- ``/api/characters``: The route that list of all saga characters. 
- ``/api/characters/:name``: The route that list a only character by name. 
- ``/api/artifacts``: The route that list of all saga artifacts.
- ``/api/artifacts/:name``: The route that list a only artifact by name.
- ``/api/cabins``: The route that list of all cabins in Camo Hail-Blood.
- ``/api/cabins/:cabinNumber``: The route that list a only cabin by cabin number.
- ``/api/places``:
- ``/api/places/:name``:
- ``/api/books``:
- ``/api/books/sagas``:
- ``/api/books/:title``:
- ``/api/books/sagas/:name``:
