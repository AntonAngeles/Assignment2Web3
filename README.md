# COMP 4513 (Winter 2025)
### Assignment #2: Node, SQL (via supabase), React, Tailwind

## Overview
This assignment was created for a user to be able to search for a specific Artist, Gallery, and Pinting.

The following pages include:
Login: User logs into website
Artist: A list of Artist the user can select to display information about the Artist and their works.
Paintings: This allows the user to find a specific painting based on the filters they choose to apply. 
            Filters include:
                            - Title
                            - Artist
                            - Gallery
                            - Year of Work
Gallery: A list of Galleries around the world that the user can select to display information about the Gallery, their location, and the paintings they hold.
Genre: A list of various genres that the user can select to display information about the specific genre and paintings that fall under that genre.
Favorites: Each of the previous pages allow for the user to add to their favorites. This page allows them to see which artists, galleries, and paintings that they have added to their favorites.

Additional information:
  The User is able to click on a painting, which will open a pop-up Modal which displays additional information about the painting they clicked. Here they are also able to add that painting to their favorites.

This is a React application using the API from Assignment 1

![NodeJS](https://badgen.net/static/NodeJS/22.11.0/green) ![Express](https://badgen.net/static/Express/4.21.2/blue) ![Supabase](https://badgen.net/static/Supabase/2.48.1/red) ![React](https://badgen.net/static/React/v19)

# API Endpoints

| API Endpoint  | Description |
| ------------- | ------------- |
| /api/eras  | Returns all eras  |
| /api/galleries  | Returns all galleries  |
| /api/galleries/```ref``` | Returns the specified gallery with  ``` galleryId ``` |
| /api/galleries/country/```substring```  | Returns the galleries whose country begins with the provided substring  |
| /api/artists  | Returns all artists |
| /api/artists/```ref```  | Returns the specified artist. Uses ```artistsId``` |
| /api/artists/search/```substring```| Returns the artists whose last name begins with the provided substring  |
| /api/artists/country/```substring```  | Returns the artists whose nationality begins with the provided substring  |
| /api/paintings  | Returns all the paintings |
| /api/paintings/sort/```title/year```  | Returns all paintings sorted by either ```title``` or ```yearOfWork```  |
| /api/paintings/```ref``` | Returns just the specified painting. Uses ```paintingId``` |
| /api/paintings/search/```substring```  | Returns the paintings whos title contains the provided substring  |
| /api/paintings/year/```start```/```end``` | Returns the paintings between two years ordered by ```yearOfWork```  |
| /api/paintings/galleries/```ref```  | Returns all the paintings in a given gallery. Uses ```galleryId```  |
| /api/paintings/artist/```ref```  | Returns all the paintings by a given artist. Uses ```artistId```  |
| /api/paintings/artists/country/```substring```  | Returns all the paintings by artists whose natinonality begins with the provided substring |
| /api/genres  | Returns all the genres  |
| /api/genres/```ref```  | Returns just the specified genre. Uses ```genreId```  |
| /api/genres/painting/```ref```  | Return the genre used in a given painting. Uses ```genreId``` |
| /api/paintings/genre/```ref```  | Returns all returns all the paintings for a given genre. Uses ```genreId``` |
| /api/paintings/era/```ref```  | Returns all paintings for a given era. Uses ```eraId``` |
| /api/counts/genres  | Returns the genre name and unubmer of paintings for each genre  |
| /api/counts/artists  | Returns the artist name and the number of paintings for each artist  |
| /api/counts/topgenres/```ref```  | Returns the genre name and number of paintings for each genre. Uses ```genreId``` |
