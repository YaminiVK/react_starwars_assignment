import { rest } from "msw";
export const handlers = [
  rest.get("https://swapi.dev/api/people", (req, res, ctx) => {
    return res(
      ctx.json({
        "count": 82,
        "next": "https://swapi.dev/api/people/?page=2",
        "previous": null,
        "results": [
            {
                "name": "Leia Organa",
                "height": "150",
                "mass": "49",
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "19BBY",
                "gender": "female",
                "homeworld": "https://swapi.dev/api/planets/2/",
                "films": [
                    "https://swapi.dev/api/films/1/",
                ],
                "species": ["https://swapi.dev/api/species/2/"],
                "vehicles": [
                    "https://swapi.dev/api/vehicles/30/"
                ],
                "starships": ["https://swapi.dev/api/starships/13/"],
                "created": "2014-12-10T15:20:09.791000Z",
                "edited": "2014-12-20T21:17:50.315000Z",
                "url": "https://swapi.dev/api/people/5/"
            },
        ]
    })
    );
  }),
  rest.get("https://swapi.dev/api/films/*/", (req, res, ctx) => {
    return res(
      ctx.json({
        "title": "A New Hope",
        "episode_id": 4,
    })
    );
  }),rest.get("https://swapi.dev/api/species/*/", (req, res, ctx) => {
    return res(
      ctx.json({
          "name" : 'Droid'
      })
    );
  }),rest.get("https://swapi.dev/api/starships/*/", (req, res, ctx) => {
    return res(
      ctx.json({"name" : 'star'})
    );
  }),rest.get("https://swapi.dev/api/planets/2/", (req, res, ctx) => {
    return res(
      ctx.json({"name":'home world'})
    );
  }),
  rest.get("https://swapi.dev/api/vehicles/*/", (req, res, ctx) => {
    return res(
      ctx.json({"name":'vehicle'})
    );
  }),
]