import { faker } from "@faker-js/faker/locale/en";

// This file has nothing to do with Redux
// It exports functions that create random movies and songs

export const createRandomMovie = () => {
  return {
    title: `${faker.word.adjective()} ${faker.word.noun()}`,
    id: faker.number.int({ min: 1, max: 100 }), // ✅ Fix here
  };
};

export const createRandomSong = () => {
  return {
    title: faker.music.songName(),
    id: faker.number.int({ min: 1, max: 100 }), // ✅ Fix here
  };
};
