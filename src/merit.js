export const categories = ['american-business', 'american-cultures']

export const userData = [
  {
    id: 'american-business-a',
    completionDate: '2014-01-01T23:28:56.782Z',
  },
  {
    id: 'american-business-b',
    completionDate: '2015-12-13T23:28:56.782Z',
  },
]

const colors = {
  pink: {
    foregrounColor: '#fbe3d3',
    backgroundColor: '#fcd3c1',
  },
  blue: {
    foregrounColor: '#c0ebe5',
    backgroundColor: '#a4e1d9',
  },
  green: {
    foregrounColor: '#f8f8b6',
    backgroundColor: '#e2ec93',
  },
  yellow: {
    foregrounColor: '#f9f3b9',
    backgroundColor: '#fedf8e',
  },
}

export const themes = {
  generalPink: {
    stampImage: '/stamp-complete.png',
    ...colors.pink,
  },
  generalBlue: {
    stampImage: '/stamp-complete.png',
    ...colors.blue,
  },
  generalGreen: {
    stampImage: '/stamp-complete.png',
    ...colors.green,
  },
  generalYellow: {
    stampImage: '/stamp-complete.png',
    ...colors.yellow,
  },
  design1: {
    stampImage: '/stamp-design.png',
    ...colors.pink,
  },
  design2: {
    stampImage: '/stamp-design2.png',
    ...colors.pink,
  },
  friend: {
    stampImage: '/stamp-friend.png',
    ...colors.yellow,
  },
  work: {
    stampImage: '/stamp-work.png',
    ...colors.green,
  },
  media: {
    stampImage: '/stamp-media.png',
    ...colors.green,
  },
  plants: {
    stampImage: '/stamp-plants.png',
    ...colors.green,
  },
  animals: {
    stampImage: '/stamp-animals.png',
    ...colors.green,
  },
  tree: {
    stampImage: '/stamp-tree.png',
    ...colors.green,
  },
  dig: {
    stampImage: '/stamp-dig.png',
    ...colors.yellow,
  },
  money: {
    stampImage: '/stamp-money.png',
    ...colors.yellow,
  },
}

export const merits = [
  {
    id: 'american-business',
    name: 'American Business',
    theme: themes.money,
    steps: [
      {
        id: 'american-business-a',
      },
      {
        id: 'american-business-b',
      },
      {
        id: 'american-business-c',
      },
      {
        id: 'american-business-d',
      },
      {
        id: 'american-business-e',
      },
      {
        id: 'american-business-f',
      },
    ],
  },
  {
    id: 'american-cultures',
    name: 'American Cultures',
    theme: themes.friend,
    steps: [
      {
        id: 'american-cultures-a',
      },
      {
        id: 'american-cultures-b',
      },
      {
        id: 'american-cultures-c',
      },
      {
        id: 'american-cultures-d',
      },
      {
        id: 'american-cultures-e',
      },
    ],
  },
  {
    id: 'american-heritage',
    name: 'American Heritage',
    theme: themes.generalBlue,
    steps: [
      {
        id: 'american-heritage-a',
      },
      {
        id: 'american-heritage-b',
      },
      {
        id: 'american-heritage-c',
      },
      {
        id: 'american-heritage-d',
      },
      {
        id: 'american-heritage-e',
      },
    ],
  },
  {
    id: 'animal-science',
    name: 'Animal Science',
    theme: themes.animals,
    steps: [
      {
        id: 'animal-science-a',
      },
      {
        id: 'animal-science-b',
      },
      {
        id: 'animal-science-c',
      },
      {
        id: 'animal-science-d',
      },
      {
        id: 'animal-science-e',
      },
      {
        id: 'animal-science-f',
      },
    ],
  },
  {
    id: 'animation',
    name: 'Animation',
    theme: themes.design2,
    steps: [
      {
        id: 'animation-a',
      },
      {
        id: 'animation-b',
      },
      {
        id: 'animation-c',
      },
      {
        id: 'animation-d',
      },
    ],
  },
  {
    id: 'archaeology',
    name: 'Archaeology',
    theme: themes.dig,
    steps: [
      {
        id: 'archaeology-a',
      },
      {
        id: 'archaeology-e',
      },
      {
        id: 'archaeology-f',
      },
      {
        id: 'archaeology-g',
      },
      {
        id: 'archaeology-h',
      },
      {
        id: 'archaeology-i',
      },
      {
        id: 'archaeology-j',
      },
    ],
  },
  {
    id: 'archery',
    name: 'Archery',
    theme: themes.generalBlue,
    steps: [
      {
        id: 'archery-a',
      },
      {
        id: 'archery-b',
      },
      {
        id: 'archery-c',
      },
      {
        id: 'archery-d',
      },
      {
        id: 'archery-e',
      },
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture',
    theme: themes.work,
    steps: [
      {
        id: 'architecture-a',
      },
      {
        id: 'architecture-b',
      },
      {
        id: 'architecture-c',
      },
      {
        id: 'architecture-d',
      },
    ],
  },
  {
    id: 'art',
    name: 'Art',
    theme: themes.design1,
    steps: [
      {
        id: 'art-a',
      },
      {
        id: 'art-b',
      },
      {
        id: 'art-c',
      },
      {
        id: 'art-d',
      },
      {
        id: 'art-e',
      },
      {
        id: 'art-f',
      },
    ],
  },
  {
    id: 'athletics',
    name: 'Athletics',
    theme: themes.generalPink,
    steps: [
      {
        id: 'athletics-1',
      },
      {
        id: 'athletics-2',
      },
      {
        id: 'athletics-3',
      },
      {
        id: 'athletics-4',
      },
      {
        id: 'athletics-5',
      },
      {
        id: 'athletics-6',
      },
    ],
  },
  {
    id: 'aviation',
    name: 'Aviation',
    theme: themes.generalBlue,
    steps: [
      {
        id: 'aviation-1',
      },
      {
        id: 'aviation-2',
      },
      {
        id: 'aviation-3',
      },
      {
        id: 'aviation-4',
      },
    ],
  },
  {
    id: 'citizenship-community',
    name: 'Citizenship in the Community',
    theme: themes.friend,
    steps: [
      {
        id: 'citizenship-community-a',
      },
      {
        id: 'citizenship-community-b',
      },
      {
        id: 'citizenship-community-c',
      },
      {
        id: 'citizenship-community-d',
      },
      {
        id: 'citizenship-community-e',
      },
      {
        id: 'citizenship-community-f',
      },
      {
        id: 'citizenship-community-g',
      },
      {
        id: 'citizenship-community-h',
      },
    ],
  },
  {
    id: 'citizenship-nation',
    name: 'Citizenship in the Nation',
    theme: themes.friend,
    steps: [
      {
        id: 'citizenship-nation-a',
      },
      {
        id: 'citizenship-nation-b',
      },
      {
        id: 'citizenship-nation-c',
      },
      {
        id: 'citizenship-nation-d',
      },
      {
        id: 'citizenship-nation-e',
      },
      {
        id: 'citizenship-nation-f',
      },
      {
        id: 'citizenship-nation-g',
      },
      {
        id: 'citizenship-nation-h',
      },
    ],
  },
  {
    id: 'citizenship-world',
    name: 'Citizenship in the World',
    theme: themes.friend,
    steps: [
      {
        id: 'citizenship-world-a',
      },
      {
        id: 'citizenship-world-b',
      },
      {
        id: 'citizenship-world-c',
      },
      {
        id: 'citizenship-world-d',
      },
      {
        id: 'citizenship-world-e',
      },
      {
        id: 'citizenship-world-f',
      },
      {
        id: 'citizenship-world-g',
      },
    ],
  },
  {
    id: 'communication',
    name: 'Communication',
    theme: themes.friend,
    steps: [
      {
        id: 'communication-1',
      },
      {
        id: 'communication-2',
      },
      {
        id: 'communication-3',
      },
      {
        id: 'communication-4',
      },
      {
        id: 'communication-5',
      },
      {
        id: 'communication-6',
      },
      {
        id: 'communication-7',
      },
    ],
  },
  {
    id: 'cooking',
    name: 'Cooking',
    theme: themes.generalPink,
    steps: [
      {
        id: 'cooking-1',
      },
      {
        id: 'cooking-2',
      },
      {
        id: 'cooking-3',
      },
      {
        id: 'cooking-4',
      },
      {
        id: 'cooking-5',
      },
      {
        id: 'cooking-6',
      },
    ],
  },
  {
    id: 'composite',
    name: 'Composite Materials',
    theme: themes.plants,
    steps: [
      {
        id: 'composite-1',
      },
      {
        id: 'composite-2',
      },
      {
        id: 'composite-3',
      },
      {
        id: 'composite-4',
      },
      {
        id: 'composite-5',
      },
    ],
  },
  {
    id: 'crime-preventions',
    name: 'Crime Preventions',
    theme: themes.work,
    steps: [
      {
        id: 'crime-preventions-1',
      },
      {
        id: 'crime-preventions-2',
      },
      {
        id: 'crime-preventions-3',
      },
      {
        id: 'crime-preventions-4',
      },
      {
        id: 'crime-preventions-5',
      },
      {
        id: 'crime-preventions-6',
      },
      {
        id: 'crime-preventions-7',
      },
      {
        id: 'crime-preventions-8',
      },
    ],
  },
  {
    id: 'disabilities-awareness',
    name: 'Disabilities Awareness',
    theme: themes.generalBlue,
    steps: [
      {
        id: 'disabilities-awareness-1',
      },
      {
        id: 'disabilities-awareness-2',
      },
      {
        id: 'disabilities-awareness-3',
      },
      {
        id: 'disabilities-awareness-4',
      },
      {
        id: 'disabilities-awareness-5',
      },
      {
        id: 'disabilities-awareness-6',
      },
      {
        id: 'disabilities-awareness-7',
      },
      {
        id: 'disabilities-awareness-8',
      },
      {
        id: 'disabilities-awareness-9',
      },
    ],
  },
  {
    id: 'moviemaking',
    name: 'Moviemaking',
    theme: themes.media,
    steps: [
      {
        id: 'moviemaking-1',
      },
      {
        id: 'moviemaking-2',
      },
      {
        id: 'moviemaking-3',
      },
    ],
  },
  {
    id: 'music',
    name: 'Music',
    theme: themes.media,
    steps: [
      {
        id: 'music-1',
      },
      {
        id: 'music-2',
      },
      {
        id: 'music-3',
      },
      {
        id: 'music-4',
      },
      {
        id: 'music-5',
      },
    ],
  },
  {
    id: 'pets',
    name: 'Pets',
    theme: themes.animals,
    steps: [
      {
        id: 'pets-1',
      },
      {
        id: 'pets-2',
      },
      {
        id: 'pets-3',
      },
      {
        id: 'pets-4',
      },
    ],
  },
  {
    id: 'reading',
    name: 'Reading',
    theme: themes.generalYellow,
    steps: [
      {
        id: 'reading-1',
      },
      {
        id: 'reading-2',
      },
      {
        id: 'reading-3',
      },
      {
        id: 'reading-4',
      },
      {
        id: 'reading-5',
      },
      {
        id: 'reading-6',
      },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    theme: themes.generalPink,
    steps: [
      {
        id: 'programming-1',
      },
      {
        id: 'programming-2',
      },
      {
        id: 'programming-3',
      },
      {
        id: 'programming-4',
      },
    ],
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    theme: themes.tree,
    steps: [
      {
        id: 'sustainability-1',
      },
      {
        id: 'sustainability-2',
      },
      {
        id: 'sustainability-3',
      },
      {
        id: 'sustainability-4',
      },
      {
        id: 'sustainability-5',
      },
    ],
  },
]
