const request = require("supertest");
const app = require("./index.js");

describe("Movie Endpoints", () => {
  it("should create a new movie", async () => {
    const res = await request(app).post("/movies").send({
      title: "Pengabdi Setan 2 Comunion",
      description:
        "dalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekue dari film tahun 2017, Pengabdi Setan",
      rating: 7.0,
      image: "",
      created_at: "2022-08-01 10:56:31",
      updated_at: "2022-08-13 09:30:23",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual(true);
  });

  it("should fetch a single movie", async () => {
    const movieId = 1;
    const res = await request(app).get(`/movies/${movieId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual(true);
  });

  it("should fetch all movie", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual(true);
  });

  it("should update a movie", async () => {
    const movieId = 1;
    const res = await request(app).patch(`/movies/${movieId}`).send({
      title: "Pengabdi Setan 2 Comunion",
      description: "dalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekue dari film tahun 2017, Pengabdi Setan",
      rating: 7.0,
      image: "",
      created_at: "2022-08-01 10:56:31",
      updated_at: "2022-08-13 09:30:23",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual(true);
  });

  it("should delete a movie", async () => {
    const movieId = 1;
    const res = await request(app).delete(`/movies/${movieId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual(true);
  });
});
