export interface ICharacter {
    id: string,
    name: string,
    alternate_names: any[],
    species: string
    gender: string
    house: string
    dateOfBirth: string,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string
    hairColour: string
    wand: {
      wood: string
      core: string,
      length: number
    },
    patronus: string
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: any[],
    alive: boolean,
    image: string
  }