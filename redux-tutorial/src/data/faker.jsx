import { faker } from "@faker-js/faker/locale/en";

// This file has nothing to do with Redux
// It exports functions that create random
// movies and song

export const createRandomMovie = () => {
  return {
    title: `${faker.word.adjective()} ${faker.word.noun()}`,
    id: faker.datatype.number(),
  };
};

export const createRandomSong = () => {
  return {
    title: faker.music.songName(),
    id: faker.datatype.number(),
  };
};
