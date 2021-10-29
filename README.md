# PokedexBackend

Poké API

Build an express server that provides an API for requests to Pokemon information. The server should first query its own database for the information and if the data is not present reach out to https://pokeapi.co/ for the information.

All requests to the official API should be cached locally on a postgres database for later consumption.

You may choose the shape in which the data is stored and should be able to present a schema that represents the way your data will be stored.

Minimum Requirements:
[]Build a schema to represent how your data will be stored in the database.
  []You only need to store data that you intend to use for queries or return to the requester.
[]Create a database
[]Build an express server that can connect to your database
[]Cache api calls on local database
[]Host these routes:
  [] /api/<pokemon name> - Return requested pokemons basic information.
  [] /api/<pokemon name>/img - Return that pokemons image
  [] /api/pokemon - Return a list of pokemon names which have already been queried.

Stretch Goals:
[] Host these routes:
  [] /api/pokemon/<attribute>
      Return top ten pokemon that have been queried already that have the highest stat in requested attribute.
  [] /api/random
      Return a random pokemons information
  [] Have it query pokeapi for a random pokemon if you have time.


![image](https://user-images.githubusercontent.com/27661560/139488395-41685d93-ad63-4944-8e4a-5d44c0c33f49.png)

