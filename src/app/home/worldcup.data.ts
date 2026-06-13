export interface Match {
  id: number;
  date: string;
  time: string;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  group: string;
  status: 'Selesai' | 'Live' | 'Mendatang';
  venue: string;
}

export interface TeamStanding {
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gd: number;
  pts: number;
}

export interface Group {
  name: string;
  teams: string[];
  stands: TeamStanding[];
}

export interface Player {
  name: string;
  pos: 'GK' | 'DF' | 'MF' | 'FW';
  club: string;
  age: number;
  caps: number;
  goals: number;
}

export const FLAG_CODES: { [key: string]: string } = {
  'Meksiko': 'mx',
  'Afrika Selatan': 'za',
  'Korea Selatan': 'kr',
  'Republik Ceko': 'cz',
  'Kanada': 'ca',
  'Bosnia & Herzegovina': 'ba',
  'Qatar': 'qa',
  'Swiss': 'ch',
  'Haiti': 'ht',
  'Skotlandia': 'gb-sct',
  'Brasil': 'br',
  'Maroko': 'ma',
  'Amerika Serikat': 'us',
  'Paraguay': 'py',
  'Australia': 'au',
  'Turki': 'tr',
  'Pantai Gading': 'ci',
  'Ekuador': 'ec',
  'Jerman': 'de',
  'Curaçao': 'cw',
  'Belanda': 'nl',
  'Jepang': 'jp',
  'Swedia': 'se',
  'Tunisia': 'tn',
  'Belgia': 'be',
  'Mesir': 'eg',
  'Iran': 'ir',
  'Selandia Baru': 'nz',
  'Spanyol': 'es',
  'Tanjung Verde': 'cv',
  'Arab Saudi': 'sa',
  'Uruguay': 'uy',
  'Prancis': 'fr',
  'Senegal': 'sn',
  'Irak': 'iq',
  'Norwegia': 'no',
  'Argentina': 'ar',
  'Aljazair': 'dz',
  'Austria': 'at',
  'Yordania': 'jo',
  'Portugal': 'pt',
  'DR Kongo': 'cd',
  'Uzbekistan': 'uz',
  'Kolombia': 'co',
  'Inggris': 'gb-eng',
  'Kroasia': 'hr',
  'Ghana': 'gh',
  'Panama': 'pa'
};

export const GROUPS: Group[] = [
  {
    name: 'A',
    teams: ['Meksiko', 'Afrika Selatan', 'Korea Selatan', 'Republik Ceko'],
    stands: [
      { name: 'Meksiko', played: 2, won: 2, drawn: 0, lost: 0, gd: 3, pts: 6 },
      { name: 'Korea Selatan', played: 2, won: 1, drawn: 1, lost: 0, gd: 1, pts: 4 },
      { name: 'Republik Ceko', played: 2, won: 0, drawn: 1, lost: 1, gd: -1, pts: 1 },
      { name: 'Afrika Selatan', played: 2, won: 0, drawn: 0, lost: 2, gd: -3, pts: 0 }
    ]
  },
  {
    name: 'B',
    teams: ['Kanada', 'Bosnia & Herzegovina', 'Qatar', 'Swiss'],
    stands: [
      { name: 'Swiss', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
      { name: 'Kanada', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
      { name: 'Bosnia & Herzegovina', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
      { name: 'Qatar', played: 2, won: 0, drawn: 1, lost: 1, gd: -1, pts: 1 }
    ]
  },
  {
    name: 'C',
    teams: ['Haiti', 'Skotlandia', 'Brasil', 'Maroko'],
    stands: [
      { name: 'Brasil', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
      { name: 'Maroko', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },
      { name: 'Skotlandia', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
      { name: 'Haiti', played: 2, won: 0, drawn: 0, lost: 2, gd: -4, pts: 0 }
    ]
  },
  {
    name: 'D',
    teams: ['Amerika Serikat', 'Paraguay', 'Australia', 'Turki'],
    stands: [
      { name: 'Amerika Serikat', played: 2, won: 2, drawn: 0, lost: 0, gd: 5, pts: 6 },
      { name: 'Turki', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
      { name: 'Australia', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
      { name: 'Paraguay', played: 2, won: 0, drawn: 1, lost: 1, gd: -3, pts: 1 }
    ]
  },
  {
    name: 'E',
    teams: ['Pantai Gading', 'Ekuador', 'Jerman', 'Curaçao'],
    stands: [
      { name: 'Jerman', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
      { name: 'Pantai Gading', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },
      { name: 'Ekuador', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
      { name: 'Curaçao', played: 2, won: 0, drawn: 0, lost: 2, gd: -5, pts: 0 }
    ]
  },
  {
    name: 'F',
    teams: ['Belanda', 'Jepang', 'Swedia', 'Tunisia'],
    stands: [
      { name: 'Belanda', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
      { name: 'Jepang', played: 2, won: 1, drawn: 1, lost: 0, gd: 1, pts: 4 },
      { name: 'Swedia', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
      { name: 'Tunisia', played: 2, won: 0, drawn: 0, lost: 2, gd: -3, pts: 0 }
    ]
  },
  {
    name: 'G',
    teams: ['Belgia', 'Mesir', 'Iran', 'Selandia Baru'],
    stands: [
      { name: 'Belgia', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
      { name: 'Mesir', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },
      { name: 'Iran', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
      { name: 'Selandia Baru', played: 2, won: 0, drawn: 0, lost: 2, gd: -4, pts: 0 }
    ]
  },
  {
    name: 'H',
    teams: ['Spanyol', 'Tanjung Verde', 'Arab Saudi', 'Uruguay'],
    stands: [
      { name: 'Spanyol', played: 2, won: 2, drawn: 0, lost: 0, gd: 3, pts: 6 },
      { name: 'Uruguay', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
      { name: 'Arab Saudi', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
      { name: 'Tanjung Verde', played: 2, won: 0, drawn: 0, lost: 2, gd: -3, pts: 0 }
    ]
  },
  {
    name: 'I',
    teams: ['Prancis', 'Senegal', 'Irak', 'Norwegia'],
    stands: [
      { name: 'Prancis', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
      { name: 'Norwegia', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
      { name: 'Senegal', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
      { name: 'Irak', played: 2, won: 0, drawn: 0, lost: 2, gd: -4, pts: 0 }
    ]
  },
  {
    name: 'J',
    teams: ['Argentina', 'Aljazair', 'Austria', 'Yordania'],
    stands: [
      { name: 'Argentina', played: 2, won: 2, drawn: 0, lost: 0, gd: 5, pts: 6 },
      { name: 'Austria', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
      { name: 'Aljazair', played: 2, won: 0, drawn: 2, lost: 0, gd: 0, pts: 2 },
      { name: 'Yordania', played: 2, won: 0, drawn: 1, lost: 1, gd: -4, pts: 1 }
    ]
  },
  {
    name: 'K',
    teams: ['Portugal', 'DR Kongo', 'Uzbekistan', 'Kolombia'],
    stands: [
      { name: 'Portugal', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
      { name: 'Kolombia', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
      { name: 'Uzbekistan', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
      { name: 'DR Kongo', played: 2, won: 0, drawn: 0, lost: 2, gd: -4, pts: 0 }
    ]
  },
  {
    name: 'L',
    teams: ['Inggris', 'Kroasia', 'Ghana', 'Panama'],
    stands: [
      { name: 'Inggris', played: 2, won: 2, drawn: 0, lost: 0, gd: 5, pts: 6 },
      { name: 'Kroasia', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
      { name: 'Ghana', played: 2, won: 0, drawn: 1, lost: 1, gd: -3, pts: 1 },
      { name: 'Panama', played: 2, won: 0, drawn: 0, lost: 2, gd: -4, pts: 0 }
    ]
  }
];



export const SQUADS: { [key: string]: Player[] } = {
  'Meksiko': [
    { name: 'Luis Malagón', pos: 'GK', club: 'Club América', age: 29, caps: 12, goals: 0 },
    { name: 'Alex Padilla', pos: 'GK', club: 'Athletic Bilbao', age: 22, caps: 1, goals: 0 },
    { name: 'César Montes', pos: 'DF', club: 'Lokomotiv Moscow', age: 29, caps: 48, goals: 1 },
    { name: 'Johan Vásquez', pos: 'DF', club: 'Genoa', age: 27, caps: 25, goals: 1 },
    { name: 'Edson Álvarez', pos: 'MF', club: 'West Ham United', age: 28, caps: 80, goals: 5 },
    { name: 'Luis Chávez', pos: 'MF', club: 'Dynamo Moscow', age: 30, caps: 33, goals: 4 },
    { name: 'Santiago Giménez', pos: 'FW', club: 'Feyenoord', age: 25, caps: 30, goals: 4 },
    { name: 'Hirving Lozano', pos: 'FW', club: 'San Diego FC', age: 30, caps: 70, goals: 18 }
  ],
  'Afrika Selatan': [
    { name: 'Ronwen Williams', pos: 'GK', club: 'Mamelodi Sundowns', age: 34, caps: 46, goals: 0 },
    { name: 'Khuliso Mudau', pos: 'DF', club: 'Mamelodi Sundowns', age: 31, caps: 15, goals: 1 },
    { name: 'Aubrey Modiba', pos: 'DF', club: 'Mamelodi Sundowns', age: 30, caps: 28, goals: 3 },
    { name: 'Teboho Mokoena', pos: 'MF', club: 'Mamelodi Sundowns', age: 29, caps: 35, goals: 6 },
    { name: 'Sphephelo Sithole', pos: 'MF', club: 'Gil Vicente', age: 27, caps: 19, goals: 0 },
    { name: 'Themba Zwane', pos: 'MF', club: 'Mamelodi Sundowns', age: 36, caps: 52, goals: 9 },
    { name: 'Percy Tau', pos: 'FW', club: 'Al Ahly', age: 32, caps: 48, goals: 15 },
    { name: 'Evidence Makgopa', pos: 'FW', club: 'Orlando Pirates', age: 26, caps: 16, goals: 4 }
  ],
  'Korea Selatan': [
    { name: 'Jo Hyeon-woo', pos: 'GK', club: 'Ulsan HD', age: 34, caps: 36, goals: 0 },
    { name: 'Kim Min-jae', pos: 'DF', club: 'Bayern Munich', age: 29, caps: 65, goals: 4 },
    { name: 'Seol Young-woo', pos: 'DF', club: 'Red Star Belgrade', age: 27, caps: 20, goals: 0 },
    { name: 'Hwang In-beom', pos: 'MF', club: 'Feyenoord', age: 29, caps: 60, goals: 6 },
    { name: 'Lee Kang-in', pos: 'MF', club: 'Paris Saint-Germain', age: 25, caps: 31, goals: 10 },
    { name: 'Son Heung-min', pos: 'FW', club: 'Tottenham Hotspur', age: 33, caps: 127, goals: 48 },
    { name: 'Hwang Hee-chan', pos: 'FW', club: 'Wolverhampton Wanderers', age: 30, caps: 66, goals: 15 },
    { name: 'Joo Min-kyu', pos: 'FW', club: 'Ulsan HD', age: 36, caps: 6, goals: 2 }
  ],
  'Republik Ceko': [
    { name: 'Jindřich Staněk', pos: 'GK', club: 'Slavia Prague', age: 30, caps: 14, goals: 0 },
    { name: 'Ladislav Krejčí', pos: 'DF', club: 'Girona', age: 27, caps: 15, goals: 3 },
    { name: 'Vladimír Coufal', pos: 'DF', club: 'West Ham United', age: 33, caps: 47, goals: 1 },
    { name: 'Tomáš Souček', pos: 'MF', club: 'West Ham United', age: 31, caps: 75, goals: 13 },
    { name: 'Antonín Barák', pos: 'MF', club: 'Fiorentina', age: 31, caps: 44, goals: 11 },
    { name: 'Patrik Schick', pos: 'FW', club: 'Bayer Leverkusen', age: 30, caps: 40, goals: 20 },
    { name: 'Adam Hložek', pos: 'FW', club: 'TSG Hoffenheim', age: 23, caps: 34, goals: 2 },
    { name: 'Tomáš Chorý', pos: 'FW', club: 'Slavia Prague', age: 31, caps: 8, goals: 2 }
  ],
  'Kanada': [
    { name: 'Maxime Crépeau', pos: 'GK', club: 'Portland Timbers', age: 32, caps: 22, goals: 0 },
    { name: 'Alphonso Davies', pos: 'DF', club: 'Bayern Munich', age: 25, caps: 53, goals: 15 },
    { name: 'Alistair Johnston', pos: 'DF', club: 'Celtic', age: 27, caps: 48, goals: 1 },
    { name: 'Moïse Bombito', pos: 'DF', club: 'Nice', age: 26, caps: 12, goals: 0 },
    { name: 'Stephen Eustáquio', pos: 'MF', club: 'Porto', age: 29, caps: 42, goals: 4 },
    { name: 'Ismaël Koné', pos: 'MF', club: 'Marseille', age: 24, caps: 24, goals: 2 },
    { name: 'Jonathan David', pos: 'FW', club: 'Lille', age: 26, caps: 54, goals: 28 },
    { name: 'Cyle Larin', pos: 'FW', club: 'Mallorca', age: 31, caps: 73, goals: 29 }
  ],
  'Bosnia & Herzegovina': [
    { name: 'Nikola Vasilj', pos: 'GK', club: 'St. Pauli', age: 30, caps: 10, goals: 0 },
    { name: 'Sead Kolašinac', pos: 'DF', club: 'Atalanta', age: 32, caps: 58, goals: 0 },
    { name: 'Anel Ahmedhodžić', pos: 'DF', club: 'Sheffield United', age: 27, caps: 24, goals: 1 },
    { name: 'Rade Krunić', pos: 'MF', club: 'Red Star Belgrade', age: 32, caps: 34, goals: 4 },
    { name: 'Benjamin Tahirović', pos: 'MF', club: 'Ajax', age: 23, caps: 12, goals: 0 },
    { name: 'Edin Džeko', pos: 'FW', club: 'Fenerbahçe', age: 40, caps: 134, goals: 65 },
    { name: 'Ermedin Demirović', pos: 'FW', club: 'Stuttgart', age: 28, caps: 26, goals: 2 }
  ],
  'Qatar': [
    { name: 'Meshaal Barsham', pos: 'GK', club: 'Al-Sadd', age: 28, caps: 42, goals: 0 },
    { name: 'Lucas Mendes', pos: 'DF', club: 'Al-Wakrah', age: 35, caps: 18, goals: 0 },
    { name: 'Boualem Khoukhi', pos: 'DF', club: 'Al-Sadd', age: 35, caps: 115, goals: 21 },
    { name: 'Akram Afif', pos: 'MF', club: 'Al-Sadd', age: 29, caps: 112, goals: 37 },
    { name: 'Hassan Al-Haydos', pos: 'MF', club: 'Al-Sadd', age: 35, caps: 182, goals: 41 },
    { name: 'Almoez Ali', pos: 'FW', club: 'Al-Duhail', age: 29, caps: 110, goals: 54 }
  ],
  'Swiss': [
    { name: 'Yann Sommer', pos: 'GK', club: 'Inter Milan', age: 37, caps: 94, goals: 0 },
    { name: 'Gregor Kobel', pos: 'GK', club: 'Borussia Dortmund', age: 28, caps: 6, goals: 0 },
    { name: 'Manuel Akanji', pos: 'DF', club: 'Manchester City', age: 30, caps: 65, goals: 3 },
    { name: 'Fabian Schär', pos: 'DF', club: 'Newcastle United', age: 34, caps: 86, goals: 8 },
    { name: 'Granit Xhaka', pos: 'MF', club: 'Bayer Leverkusen', age: 33, caps: 125, goals: 14 },
    { name: 'Remo Freuler', pos: 'MF', club: 'Bologna', age: 34, caps: 68, goals: 9 },
    { name: 'Breel Embolo', pos: 'FW', club: 'Monaco', age: 29, caps: 68, goals: 15 },
    { name: 'Dan Ndoye', pos: 'FW', club: 'Bologna', age: 25, caps: 17, goals: 1 }
  ],
  'Haiti': [
    { name: 'Johny Placide', pos: 'GK', club: 'Bastia', age: 38, caps: 65, goals: 0 },
    { name: 'Ricardo Adé', pos: 'DF', club: 'LDU Quito', age: 36, caps: 38, goals: 2 },
    { name: 'Carlens Arcus', pos: 'DF', club: 'Angers', age: 30, caps: 35, goals: 1 },
    { name: 'Bryan Alceus', pos: 'MF', club: 'Doxa Katokopias', age: 30, caps: 32, goals: 0 },
    { name: 'Leverton Pierre', pos: 'MF', club: 'Avranches', age: 28, caps: 15, goals: 0 },
    { name: 'Frantzdy Pierrot', pos: 'FW', club: 'AEK Athens', age: 31, caps: 30, goals: 21 },
    { name: 'Duckens Nazon', pos: 'FW', club: 'Kayserispor', age: 32, caps: 54, goals: 28 }
  ],
  'Skotlandia': [
    { name: 'Angus Gunn', pos: 'GK', club: 'Norwich City', age: 30, caps: 13, goals: 0 },
    { name: 'Andy Robertson', pos: 'DF', club: 'Liverpool', age: 32, caps: 74, goals: 3 },
    { name: 'Kieran Tierney', pos: 'DF', club: 'Real Sociedad', age: 29, caps: 47, goals: 1 },
    { name: 'Jack Hendry', pos: 'DF', club: 'Al-Ettifaq', age: 31, caps: 34, goals: 3 },
    { name: 'Scott McTominay', pos: 'MF', club: 'Napoli', age: 29, caps: 52, goals: 9 },
    { name: 'John McGinn', pos: 'MF', club: 'Aston Villa', age: 31, caps: 69, goals: 18 },
    { name: 'Billy Gilmour', pos: 'MF', club: 'Napoli', age: 25, caps: 30, goals: 2 },
    { name: 'Che Adams', pos: 'FW', club: 'Torino', age: 29, caps: 33, goals: 6 }
  ],
  'Brasil': [
    { name: 'Alisson Becker', pos: 'GK', club: 'Liverpool', age: 33, caps: 65, goals: 0 },
    { name: 'Ederson Moraes', pos: 'GK', club: 'Manchester City', age: 32, caps: 25, goals: 0 },
    { name: 'Marquinhos', pos: 'DF', club: 'Paris Saint-Germain', age: 32, caps: 85, goals: 7 },
    { name: 'Gabriel Magalhães', pos: 'DF', club: 'Arsenal', age: 28, caps: 16, goals: 1 },
    { name: 'Éder Militão', pos: 'DF', club: 'Real Madrid', age: 28, caps: 35, goals: 2 },
    { name: 'Bruno Guimarães', pos: 'MF', club: 'Newcastle United', age: 28, caps: 26, goals: 1 },
    { name: 'Lucas Paquetá', pos: 'MF', club: 'West Ham United', age: 28, caps: 46, goals: 10 },
    { name: 'Vinícius Júnior', pos: 'FW', club: 'Real Madrid', age: 25, caps: 33, goals: 5 },
    { name: 'Rodrygo Goes', pos: 'FW', club: 'Real Madrid', age: 25, caps: 27, goals: 6 },
    { name: 'Neymar Jr.', pos: 'FW', club: 'Al-Hilal', age: 34, caps: 128, goals: 79 }
  ],
  'Maroko': [
    { name: 'Yassine Bounou', pos: 'GK', club: 'Al-Hilal', age: 35, caps: 65, goals: 0 },
    { name: 'Achraf Hakimi', pos: 'DF', club: 'Paris Saint-Germain', age: 27, caps: 77, goals: 9 },
    { name: 'Nayef Aguerd', pos: 'DF', club: 'Real Sociedad', age: 30, caps: 44, goals: 1 },
    { name: 'Sofyan Amrabat', pos: 'MF', club: 'Fenerbahçe', age: 29, caps: 57, goals: 0 },
    { name: 'Azzedine Ounahi', pos: 'MF', club: 'Panathinaikos', age: 26, caps: 30, goals: 5 },
    { name: 'Brahim Díaz', pos: 'FW', club: 'Real Madrid', age: 26, caps: 6, goals: 2 },
    { name: 'Hakim Ziyech', pos: 'FW', club: 'Galatasaray', age: 33, caps: 62, goals: 22 },
    { name: 'Youssef En-Nesyri', pos: 'FW', club: 'Fenerbahçe', age: 29, caps: 73, goals: 20 }
  ],
  'Amerika Serikat': [
    { name: 'Matt Turner', pos: 'GK', club: 'Crystal Palace', age: 31, caps: 44, goals: 0 },
    { name: 'Antonee Robinson', pos: 'DF', club: 'Fulham', age: 28, caps: 46, goals: 4 },
    { name: 'Chris Richards', pos: 'DF', club: 'Crystal Palace', age: 26, caps: 21, goals: 1 },
    { name: 'Weston McKennie', pos: 'MF', club: 'Juventus', age: 27, caps: 53, goals: 11 },
    { name: 'Tyler Adams', pos: 'MF', club: 'Bournemouth', age: 27, caps: 40, goals: 2 },
    { name: 'Gio Reyna', pos: 'MF', club: 'Borussia Dortmund', age: 23, caps: 31, goals: 8 },
    { name: 'Christian Pulisic', pos: 'FW', club: 'AC Milan', age: 27, caps: 68, goals: 29 },
    { name: 'Folarin Balogun', pos: 'FW', club: 'Monaco', age: 24, caps: 15, goals: 5 }
  ],
  'Paraguay': [
    { name: 'Carlos Coronel', pos: 'GK', club: 'New York Red Bulls', age: 29, caps: 9, goals: 0 },
    { name: 'Gustavo Gómez', pos: 'DF', club: 'Palmeiras', age: 33, caps: 74, goals: 4 },
    { name: 'Junior Alonso', pos: 'DF', club: 'Atlético Mineiro', age: 33, caps: 53, goals: 2 },
    { name: 'Andrés Cubas', pos: 'MF', club: 'Vancouver Whitecaps', age: 30, caps: 21, goals: 0 },
    { name: 'Mathías Villasanti', pos: 'MF', club: 'Grêmio', age: 29, caps: 39, goals: 0 },
    { name: 'Julio Enciso', pos: 'FW', club: 'Brighton & Hove Albion', age: 22, caps: 17, goals: 1 },
    { name: 'Miguel Almirón', pos: 'FW', club: 'Newcastle United', age: 32, caps: 58, goals: 7 }
  ],
  'Australia': [
    { name: 'Mathew Ryan', pos: 'GK', club: 'Roma', age: 34, caps: 93, goals: 0 },
    { name: 'Harry Souttar', pos: 'DF', club: 'Sheffield United', age: 27, caps: 30, goals: 11 },
    { name: 'Kye Rowles', pos: 'DF', club: 'Hearts', age: 27, caps: 21, goals: 1 },
    { name: 'Jackson Irvine', pos: 'MF', club: 'St. Pauli', age: 33, caps: 70, goals: 11 },
    { name: 'Connor Metcalfe', pos: 'MF', club: 'St. Pauli', age: 26, caps: 23, goals: 0 },
    { name: 'Craig Goodwin', pos: 'FW', club: 'Al-Wehda', age: 34, caps: 25, goals: 6 },
    { name: 'Nestory Irankunda', pos: 'FW', club: 'Bayern Munich', age: 20, caps: 2, goals: 1 }
  ],
  'Turki': [
    { name: 'Mert Günok', pos: 'GK', club: 'Beşiktaş', age: 37, caps: 35, goals: 0 },
    { name: 'Merih Demiral', pos: 'DF', club: 'Al-Ahli', age: 28, caps: 48, goals: 4 },
    { name: 'Ferdi Kadıoğlu', pos: 'DF', club: 'Brighton & Hove Albion', age: 26, caps: 20, goals: 1 },
    { name: 'Hakan Çalhanoğlu', pos: 'MF', club: 'Inter Milan', age: 32, caps: 92, goals: 19 },
    { name: 'Arda Güler', pos: 'MF', club: 'Real Madrid', age: 21, caps: 12, goals: 2 },
    { name: 'Barış Alper Yılmaz', pos: 'FW', club: 'Galatasaray', age: 26, caps: 18, goals: 2 },
    { name: 'Kenan Yıldız', pos: 'FW', club: 'Juventus', age: 21, caps: 10, goals: 1 }
  ],
  'Pantai Gading': [
    { name: 'Yahia Fofana', pos: 'GK', club: 'Angers', age: 25, caps: 15, goals: 0 },
    { name: 'Evan Ndicka', pos: 'DF', club: 'Roma', age: 26, caps: 14, goals: 0 },
    { name: 'Wilfried Singo', pos: 'DF', club: 'Monaco', age: 25, caps: 21, goals: 0 },
    { name: 'Franck Kessié', pos: 'MF', club: 'Al-Ahli', age: 29, caps: 78, goals: 11 },
    { name: 'Seko Fofana', pos: 'MF', club: 'Al-Ettifaq', age: 31, caps: 20, goals: 6 },
    { name: 'Sébastien Haller', pos: 'FW', club: 'Leganés', age: 31, caps: 26, goals: 10 },
    { name: 'Simon Adingra', pos: 'FW', club: 'Brighton & Hove Albion', age: 24, caps: 14, goals: 2 }
  ],
  'Ekuador': [
    { name: 'Alexander Domínguez', pos: 'GK', club: 'LDU Quito', age: 38, caps: 78, goals: 0 },
    { name: 'Piero Hincapié', pos: 'DF', club: 'Bayer Leverkusen', age: 24, caps: 37, goals: 2 },
    { name: 'Willian Pacho', pos: 'DF', club: 'Paris Saint-Germain', age: 24, caps: 16, goals: 2 },
    { name: 'Moisés Caicedo', pos: 'MF', club: 'Chelsea', age: 24, caps: 44, goals: 3 },
    { name: 'Kendry Páez', pos: 'MF', club: 'Independiente del Valle', age: 19, caps: 13, goals: 2 },
    { name: 'Enner Valencia', pos: 'FW', club: 'Internacional', age: 36, caps: 89, goals: 41 },
    { name: 'Jeremy Sarmiento', pos: 'FW', club: 'Burnley', age: 23, caps: 21, goals: 2 }
  ],
  'Jerman': [
    { name: 'Marc-André ter Stegen', pos: 'GK', club: 'Barcelona', age: 34, caps: 40, goals: 0 },
    { name: 'Antonio Rüdiger', pos: 'DF', club: 'Real Madrid', age: 33, caps: 74, goals: 3 },
    { name: 'Joshua Kimmich', pos: 'DF', club: 'Bayern Munich', age: 31, caps: 91, goals: 6 },
    { name: 'Florian Wirtz', pos: 'MF', club: 'Bayer Leverkusen', age: 23, caps: 23, goals: 4 },
    { name: 'Jamal Musiala', pos: 'MF', club: 'Bayern Munich', age: 23, caps: 34, goals: 5 },
    { name: 'Kai Havertz', pos: 'FW', club: 'Arsenal', age: 27, caps: 51, goals: 18 },
    { name: 'Niclas Füllkrug', pos: 'FW', club: 'West Ham United', age: 33, caps: 22, goals: 14 }
  ],
  'Curaçao': [
    { name: 'Eloy Room', pos: 'GK', club: 'Vitesse', age: 37, caps: 46, goals: 0 },
    { name: 'Cuco Martina', pos: 'DF', club: 'NAC Breda', age: 36, caps: 60, goals: 1 },
    { name: 'Juriën Gaari', pos: 'DF', club: 'RKC Waalwijk', age: 32, caps: 32, goals: 1 },
    { name: 'Vurnon Anita', pos: 'MF', club: 'Al-Orobah', age: 37, caps: 15, goals: 0 },
    { name: 'Leandro Bacuna', pos: 'MF', club: 'Groningen', age: 34, caps: 48, goals: 14 },
    { name: 'Rangelo Janga', pos: 'FW', club: 'Nea Salamis', age: 34, caps: 35, goals: 18 }
  ],
  'Belanda': [
    { name: 'Bart Verbruggen', pos: 'GK', club: 'Brighton & Hove Albion', age: 23, caps: 13, goals: 0 },
    { name: 'Virgil van Dijk', pos: 'DF', club: 'Liverpool', age: 34, caps: 74, goals: 9 },
    { name: 'Nathan Aké', pos: 'DF', club: 'Manchester City', age: 31, caps: 50, goals: 5 },
    { name: 'Frenkie de Jong', pos: 'MF', club: 'Barcelona', age: 29, caps: 54, goals: 2 },
    { name: 'Tijjani Reijnders', pos: 'MF', club: 'AC Milan', age: 27, caps: 15, goals: 3 },
    { name: 'Memphis Depay', pos: 'FW', club: 'Corinthians', age: 32, caps: 98, goals: 46 },
    { name: 'Cody Gakpo', pos: 'FW', club: 'Liverpool', age: 27, caps: 30, goals: 12 }
  ],
  'Jepang': [
    { name: 'Zion Suzuki', pos: 'GK', club: 'Parma', age: 23, caps: 10, goals: 0 },
    { name: 'Ko Itakura', pos: 'DF', club: 'Borussia Mönchengladbach', age: 29, caps: 29, goals: 1 },
    { name: 'Yukinari Sugawara', pos: 'DF', club: 'Southampton', age: 25, caps: 13, goals: 1 },
    { name: 'Wataru Endo', pos: 'MF', club: 'Liverpool', age: 33, caps: 62, goals: 3 },
    { name: 'Takumi Minamino', pos: 'MF', club: 'Monaco', age: 31, caps: 59, goals: 21 },
    { name: 'Kaoru Mitoma', pos: 'FW', club: 'Brighton & Hove Albion', age: 29, caps: 20, goals: 7 },
    { name: 'Takefusa Kubo', pos: 'FW', club: 'Real Sociedad', age: 25, caps: 35, goals: 4 }
  ],
  'Swedia': [
    { name: 'Robin Olsen', pos: 'GK', club: 'Aston Villa', age: 36, caps: 73, goals: 0 },
    { name: 'Victor Lindelöf', pos: 'DF', club: 'Manchester United', age: 31, caps: 68, goals: 3 },
    { name: 'Ludwig Augustinsson', pos: 'DF', club: 'Anderlecht', age: 32, caps: 55, goals: 2 },
    { name: 'Dejan Kulusevski', pos: 'MF', club: 'Tottenham Hotspur', age: 26, caps: 39, goals: 3 },
    { name: 'Emil Forsberg', pos: 'MF', club: 'New York Red Bulls', age: 34, caps: 86, goals: 21 },
    { name: 'Alexander Isak', pos: 'FW', club: 'Newcastle United', age: 26, caps: 46, goals: 11 },
    { name: 'Viktor Gyökeres', pos: 'FW', club: 'Sporting CP', age: 28, caps: 22, goals: 10 }
  ],
  'Tunisia': [
    { name: 'Bechir Ben Saïd', pos: 'GK', club: 'Espérance de Tunis', age: 31, caps: 14, goals: 0 },
    { name: 'Montassir Talbi', pos: 'DF', club: 'Lorient', age: 28, caps: 36, goals: 2 },
    { name: 'Ali Abdi', pos: 'DF', club: 'Nice', age: 32, caps: 24, goals: 2 },
    { name: 'Ellyes Skhiri', pos: 'MF', club: 'Eintracht Frankfurt', age: 31, caps: 65, goals: 3 },
    { name: 'Aïssa Laïdouni', pos: 'MF', club: 'Al-Wakrah', age: 29, caps: 44, goals: 2 },
    { name: 'Youssef Msakni', pos: 'FW', club: 'Al-Arabi', age: 35, caps: 102, goals: 23 }
  ],
  'Belgia': [
    { name: 'Thibaut Courtois', pos: 'GK', club: 'Real Madrid', age: 34, caps: 102, goals: 0 },
    { name: 'Timothy Castagne', pos: 'DF', club: 'Fulham', age: 30, caps: 47, goals: 2 },
    { name: 'Wout Faes', pos: 'DF', club: 'Leicester City', age: 28, caps: 19, goals: 0 },
    { name: 'Kevin De Bruyne', pos: 'MF', club: 'Manchester City', age: 34, caps: 105, goals: 28 },
    { name: 'Youri Tielemans', pos: 'MF', club: 'Aston Villa', age: 29, caps: 70, goals: 8 },
    { name: 'Romelu Lukaku', pos: 'FW', club: 'Napoli', age: 33, caps: 119, goals: 85 },
    { name: 'Jérémy Doku', pos: 'FW', club: 'Manchester City', age: 24, caps: 26, goals: 2 }
  ],
  'Mesir': [
    { name: 'Mohamed El Shenawy', pos: 'GK', club: 'Al Ahly', age: 37, caps: 55, goals: 0 },
    { name: 'Mohamed Abdelmonem', pos: 'DF', club: 'Nice', age: 27, caps: 29, goals: 2 },
    { name: 'Ahmed Hegazi', pos: 'DF', club: 'Neom', age: 35, caps: 88, goals: 2 },
    { name: 'Mohamed Elneny', pos: 'MF', club: 'Al-Jazira', age: 33, caps: 101, goals: 8 },
    { name: 'Emam Ashour', pos: 'MF', club: 'Al Ahly', age: 28, caps: 18, goals: 0 },
    { name: 'Mohamed Salah', pos: 'FW', club: 'Liverpool', age: 33, caps: 100, goals: 56 },
    { name: 'Omar Marmoush', pos: 'FW', club: 'Eintracht Frankfurt', age: 27, caps: 34, goals: 6 }
  ],
  'Iran': [
    { name: 'Alireza Beiranvand', pos: 'GK', club: 'Tractor', age: 33, caps: 68, goals: 0 },
    { name: 'Milad Mohammadi', pos: 'DF', club: 'Persepolis', age: 32, caps: 56, goals: 1 },
    { name: 'Hossein Kanaanizadegan', pos: 'DF', club: 'Persepolis', age: 32, caps: 47, goals: 4 },
    { name: 'Saman Ghoddos', pos: 'MF', club: 'Ittihad Kalba', age: 32, caps: 45, goals: 3 },
    { name: 'Saeed Ezatolahi', pos: 'MF', club: 'Shabab Al-Ahli', age: 29, caps: 64, goals: 1 },
    { name: 'Sardar Azmoun', pos: 'FW', club: 'Shabab Al-Ahli', age: 31, caps: 83, goals: 53 },
    { name: 'Mehdi Taremi', pos: 'FW', club: 'Inter Milan', age: 33, caps: 85, goals: 50 }
  ],
  'Selandia Baru': [
    { name: 'Alex Paulsen', pos: 'GK', club: 'Auckland FC', age: 23, caps: 1, goals: 0 },
    { name: 'Libby Cacace', pos: 'DF', club: 'Empoli', age: 25, caps: 25, goals: 1 },
    { name: 'Tyler Bindon', pos: 'DF', club: 'Reading', age: 21, caps: 8, goals: 0 },
    { name: 'Marko Stamenic', pos: 'MF', club: 'Olympiacos', age: 24, caps: 21, goals: 1 },
    { name: 'Sarpreet Singh', pos: 'MF', club: 'Unattached', age: 27, caps: 13, goals: 1 },
    { name: 'Chris Wood', pos: 'FW', club: 'Nottingham Forest', age: 34, caps: 74, goals: 34 }
  ],
  'Spanyol': [
    // Goalkeepers
    { name: 'Unai Simón', pos: 'GK', club: 'Athletic Bilbao', age: 28, caps: 46, goals: 0 },
    { name: 'David Raya', pos: 'GK', club: 'Arsenal', age: 30, caps: 20, goals: 0 },
    { name: 'Álex Remiro', pos: 'GK', club: 'Real Sociedad', age: 31, caps: 1, goals: 0 },
    // Defenders
    { name: 'Dani Carvajal', pos: 'DF', club: 'Real Madrid', age: 34, caps: 49, goals: 0 },
    { name: 'Aymeric Laporte', pos: 'DF', club: 'Al-Nassr', age: 32, caps: 35, goals: 1 },
    { name: 'Robin Le Normand', pos: 'DF', club: 'Atlético Madrid', age: 29, caps: 17, goals: 1 },
    { name: 'Marc Cucurella', pos: 'DF', club: 'Chelsea', age: 27, caps: 10, goals: 0 },
    { name: 'Alejandro Grimaldo', pos: 'DF', club: 'Bayer Leverkusen', age: 30, caps: 6, goals: 0 },
    { name: 'Dani Vivian', pos: 'DF', club: 'Athletic Bilbao', age: 26, caps: 4, goals: 0 },
    { name: 'Pau Cubarsí', pos: 'DF', club: 'Barcelona', age: 19, caps: 3, goals: 0 },
    { name: 'Pedro Porro', pos: 'DF', club: 'Tottenham Hotspur', age: 26, caps: 5, goals: 0 },
    // Midfielders
    { name: 'Rodri Hernández', pos: 'MF', club: 'Manchester City', age: 29, caps: 56, goals: 4 },
    { name: 'Pedri González', pos: 'MF', club: 'Barcelona', age: 23, caps: 24, goals: 2 },
    { name: 'Martín Zubimendi', pos: 'MF', club: 'Real Sociedad', age: 27, caps: 20, goals: 0 },
    { name: 'Fabián Ruiz', pos: 'MF', club: 'Paris Saint-Germain', age: 30, caps: 29, goals: 4 },
    { name: 'Mikel Merino', pos: 'MF', club: 'Arsenal', age: 29, caps: 28, goals: 2 },
    { name: 'Dani Olmo', pos: 'MF', club: 'Barcelona', age: 28, caps: 39, goals: 11 },
    { name: 'Álex Baena', pos: 'MF', club: 'Villarreal', age: 24, caps: 5, goals: 1 },
    // Forwards
    { name: 'Lamine Yamal', pos: 'FW', club: 'Barcelona', age: 18, caps: 14, goals: 3 },
    { name: 'Nico Williams', pos: 'FW', club: 'Athletic Bilbao', age: 23, caps: 20, goals: 4 },
    { name: 'Álvaro Morata', pos: 'FW', club: 'AC Milan', age: 33, caps: 80, goals: 36 },
    { name: 'Mikel Oyarzabal', pos: 'FW', club: 'Real Sociedad', age: 29, caps: 37, goals: 11 },
    { name: 'Ferran Torres', pos: 'FW', club: 'Barcelona', age: 26, caps: 46, goals: 20 },
    { name: 'Ayoze Pérez', pos: 'FW', club: 'Villarreal', age: 32, caps: 3, goals: 1 }
  ],
  'Tanjung Verde': [
    { name: 'Vozinha', pos: 'GK', club: 'Trenčín', age: 40, caps: 68, goals: 0 },
    { name: 'Logan Costa', pos: 'DF', club: 'Villarreal', age: 25, caps: 19, goals: 0 },
    { name: 'Roberto Lopes', pos: 'DF', club: 'Shamrock Rovers', age: 33, caps: 26, goals: 0 },
    { name: 'Jamiro Monteiro', pos: 'MF', club: 'Zwolle', age: 32, caps: 38, goals: 4 },
    { name: 'Kevin Pina', pos: 'MF', club: 'Krasnodar', age: 29, caps: 18, goals: 2 },
    { name: 'Ryan Mendes', pos: 'FW', club: 'Fatih Karagümrük', age: 36, caps: 77, goals: 18 },
    { name: 'Bebé', pos: 'FW', club: 'Rayo Vallecano', age: 35, caps: 22, goals: 6 }
  ],
  'Arab Saudi': [
    { name: 'Mohammed Al-Owais', pos: 'GK', club: 'Al-Hilal', age: 34, caps: 44, goals: 0 },
    { name: 'Saud Abdulhamid', pos: 'DF', club: 'Roma', age: 26, caps: 34, goals: 1 },
    { name: 'Ali Al-Bulaihi', pos: 'DF', club: 'Al-Hilal', age: 36, caps: 52, goals: 2 },
    { name: 'Mohamed Kanno', pos: 'MF', club: 'Al-Hilal', age: 31, caps: 51, goals: 2 },
    { name: 'Salem Al-Dawsari', pos: 'FW', club: 'Al-Hilal', age: 34, caps: 82, goals: 22 },
    { name: 'Firas Al-Buraikan', pos: 'FW', club: 'Al-Ahli', age: 26, caps: 41, goals: 9 }
  ],
  'Uruguay': [
    { name: 'Sergio Rochet', pos: 'GK', club: 'Internacional', age: 32, caps: 24, goals: 0 },
    { name: 'Ronald Araújo', pos: 'DF', club: 'Barcelona', age: 27, caps: 20, goals: 1 },
    { name: 'Mathías Olivera', pos: 'DF', club: 'Napoli', age: 28, caps: 21, goals: 0 },
    { name: 'Federico Valverde', pos: 'MF', club: 'Real Madrid', age: 27, caps: 60, goals: 7 },
    { name: 'Manuel Ugarte', pos: 'MF', club: 'Manchester United', age: 25, caps: 22, goals: 0 },
    { name: 'Darwin Núñez', pos: 'FW', club: 'Liverpool', age: 26, caps: 29, goals: 13 },
    { name: 'Luis Suárez', pos: 'FW', club: 'Inter Miami', age: 39, caps: 142, goals: 69 }
  ],
  'Prancis': [
    { name: 'Mike Maignan', pos: 'GK', club: 'AC Milan', age: 30, caps: 22, goals: 0 },
    { name: 'William Saliba', pos: 'DF', club: 'Arsenal', age: 25, caps: 21, goals: 0 },
    { name: 'Theo Hernandez', pos: 'DF', club: 'AC Milan', age: 28, caps: 32, goals: 2 },
    { name: 'Aurélien Tchouaméni', pos: 'MF', club: 'Real Madrid', age: 26, caps: 36, goals: 3 },
    { name: 'Eduardo Camavinga', pos: 'MF', club: 'Real Madrid', age: 23, caps: 21, goals: 2 },
    { name: 'Kylian Mbappé', pos: 'FW', club: 'Real Madrid', age: 27, caps: 84, goals: 48 },
    { name: 'Antoine Griezmann', pos: 'FW', club: 'Atlético Madrid', age: 35, caps: 137, goals: 44 }
  ],
  'Senegal': [
    { name: 'Édouard Mendy', pos: 'GK', club: 'Al-Ahli', age: 34, caps: 39, goals: 0 },
    { name: 'Kalidou Koulibaly', pos: 'DF', club: 'Al-Hilal', age: 34, caps: 82, goals: 3 },
    { name: 'Ismail Jakobs', pos: 'DF', club: 'Galatasaray', age: 26, caps: 19, goals: 0 },
    { name: 'Pape Matar Sarr', pos: 'MF', club: 'Tottenham Hotspur', age: 23, caps: 24, goals: 1 },
    { name: 'Lamine Camara', pos: 'MF', club: 'Monaco', age: 22, caps: 10, goals: 3 },
    { name: 'Sadio Mané', pos: 'FW', club: 'Al-Nassr', age: 34, caps: 107, goals: 43 },
    { name: 'Nicolas Jackson', pos: 'FW', club: 'Chelsea', age: 24, caps: 14, goals: 0 }
  ],
  'Irak': [
    { name: 'Jalal Hassan', pos: 'GK', club: 'Al-Zawraa', age: 34, caps: 82, goals: 0 },
    { name: 'Rebin Sulaka', pos: 'DF', club: 'FC Seoul', age: 34, caps: 40, goals: 1 },
    { name: 'Amir Al-Ammari', pos: 'MF', club: 'Cracovia', age: 28, caps: 28, goals: 2 },
    { name: 'Zidane Iqbal', pos: 'MF', club: 'Utrecht', age: 23, caps: 11, goals: 1 },
    { name: 'Aymen Hussein', pos: 'FW', club: 'Al-Khor', age: 30, caps: 75, goals: 27 },
    { name: 'Ali Al-Hamadi', pos: 'FW', club: 'Ipswich Town', age: 24, caps: 14, goals: 3 }
  ],
  'Norwegia': [
    { name: 'Ørjan Nyland', pos: 'GK', club: 'Sevilla', age: 35, caps: 54, goals: 0 },
    { name: 'Leo Østigård', pos: 'DF', club: 'Rennes', age: 26, caps: 26, goals: 1 },
    { name: 'Julian Ryerson', pos: 'DF', club: 'Borussia Dortmund', age: 28, caps: 24, goals: 0 },
    { name: 'Martin Ødegaard', pos: 'MF', club: 'Arsenal', age: 27, caps: 59, goals: 3 },
    { name: 'Sander Berge', pos: 'MF', club: 'Fulham', age: 28, caps: 46, goals: 1 },
    { name: 'Erling Haaland', pos: 'FW', club: 'Manchester City', age: 25, caps: 33, goals: 31 },
    { name: 'Alexander Sørloth', pos: 'FW', club: 'Atlético Madrid', age: 30, caps: 53, goals: 18 }
  ],
  'Argentina': [
    { name: 'Emiliano Martínez', pos: 'GK', club: 'Aston Villa', age: 33, caps: 45, goals: 0 },
    { name: 'Cristian Romero', pos: 'DF', club: 'Tottenham Hotspur', age: 28, caps: 36, goals: 3 },
    { name: 'Lisandro Martínez', pos: 'DF', club: 'Manchester United', age: 28, caps: 23, goals: 0 },
    { name: 'Rodrigo De Paul', pos: 'MF', club: 'Atlético Madrid', age: 32, caps: 67, goals: 2 },
    { name: 'Alexis Mac Allister', pos: 'MF', club: 'Liverpool', age: 27, caps: 31, goals: 3 },
    { name: 'Enzo Fernández', pos: 'MF', club: 'Chelsea', age: 25, caps: 28, goals: 4 },
    { name: 'Lionel Messi', pos: 'FW', club: 'Inter Miami', age: 38, caps: 187, goals: 109 },
    { name: 'Julián Álvarez', pos: 'FW', club: 'Atlético Madrid', age: 26, caps: 36, goals: 9 }
  ],
  'Aljazair': [
    { name: 'Anthony Mandrea', pos: 'GK', club: 'Caen', age: 29, caps: 18, goals: 0 },
    { name: 'Ramy Bensebaini', pos: 'DF', club: 'Borussia Dortmund', age: 31, caps: 64, goals: 8 },
    { name: 'Rayan Aït-Nouri', pos: 'DF', club: 'Wolverhampton Wanderers', age: 25, caps: 13, goals: 0 },
    { name: 'Ismaël Bennacer', pos: 'MF', club: 'AC Milan', age: 28, caps: 50, goals: 2 },
    { name: 'Houssem Aouar', pos: 'MF', club: 'Al-Ittihad', age: 27, caps: 11, goals: 3 },
    { name: 'Riyad Mahrez', pos: 'FW', club: 'Al-Ahli', age: 35, caps: 93, goals: 31 },
    { name: 'Amine Gouiri', pos: 'FW', club: 'Rennes', age: 26, caps: 10, goals: 3 }
  ],
  'Austria': [
    { name: 'Patrick Pentz', pos: 'GK', club: 'Brøndby', age: 29, caps: 10, goals: 0 },
    { name: 'David Alaba', pos: 'DF', club: 'Real Madrid', age: 33, caps: 105, goals: 15 },
    { name: 'Stefan Posch', pos: 'DF', club: 'Bologna', age: 29, caps: 36, goals: 2 },
    { name: 'Marcel Sabitzer', pos: 'MF', club: 'Borussia Dortmund', age: 32, caps: 82, goals: 18 },
    { name: 'Konrad Laimer', pos: 'MF', club: 'Bayern Munich', age: 29, caps: 40, goals: 4 },
    { name: 'Marko Arnautović', pos: 'FW', club: 'Inter Milan', age: 37, caps: 116, goals: 37 },
    { name: 'Christoph Baumgartner', pos: 'FW', club: 'RB Leipzig', age: 26, caps: 42, goals: 16 }
  ],
  'Yordania': [
    { name: 'Yazeed Abulaila', pos: 'GK', club: 'Al-Hussein', age: 33, caps: 40, goals: 0 },
    { name: 'Yazan Al-Arab', pos: 'DF', club: 'FC Seoul', age: 30, caps: 56, goals: 1 },
    { name: 'Nizar Al-Rashdan', pos: 'MF', club: 'Al-Faisaly', age: 26, caps: 18, goals: 2 },
    { name: 'Mousa Al-Tamari', pos: 'FW', club: 'Montpellier', age: 28, caps: 70, goals: 22 },
    { name: 'Yazan Al-Naimat', pos: 'FW', club: 'Al-Arabi', age: 26, caps: 44, goals: 18 }
  ],
  'Portugal': [
    { name: 'Diogo Costa', pos: 'GK', club: 'Porto', age: 26, caps: 27, goals: 0 },
    { name: 'Rúben Dias', pos: 'DF', club: 'Manchester City', age: 29, caps: 60, goals: 3 },
    { name: 'João Cancelo', pos: 'DF', club: 'Al-Hilal', age: 32, caps: 54, goals: 10 },
    { name: 'Bruno Fernandes', pos: 'MF', club: 'Manchester United', age: 31, caps: 71, goals: 23 },
    { name: 'Bernardo Silva', pos: 'MF', club: 'Manchester City', age: 31, caps: 93, goals: 12 },
    { name: 'Cristiano Ronaldo', pos: 'FW', club: 'Al-Nassr', age: 41, caps: 212, goals: 130 },
    { name: 'Rafael Leão', pos: 'FW', club: 'AC Milan', age: 26, caps: 31, goals: 4 }
  ],
  'DR Kongo': [
    { name: 'Dimitry Bertaud', pos: 'GK', club: 'Montpellier', age: 28, caps: 6, goals: 0 },
    { name: 'Chancel Mbemba', pos: 'DF', club: 'Marseille', age: 31, caps: 85, goals: 6 },
    { name: 'Arthur Masuaku', pos: 'DF', club: 'Beşiktaş', age: 32, caps: 26, goals: 2 },
    { name: 'Samuel Moutoussamy', pos: 'MF', club: 'Sivasspor', age: 29, caps: 35, goals: 0 },
    { name: 'Yoane Wissa', pos: 'FW', club: 'Brentford', age: 29, caps: 25, goals: 5 },
    { name: 'Cédric Bakambu', pos: 'FW', club: 'Real Betis', age: 35, caps: 54, goals: 16 }
  ],
  'Uzbekistan': [
    { name: 'Utkir Yusupov', pos: 'GK', club: 'Foolad', age: 35, caps: 31, goals: 0 },
    { name: 'Abdukodir Khusanov', pos: 'DF', club: 'Lens', age: 22, caps: 14, goals: 0 },
    { name: 'Otabek Shukurov', pos: 'MF', club: 'Al-Fayha', age: 29, caps: 67, goals: 4 },
    { name: 'Abbosbek Fayzullaev', pos: 'MF', club: 'CSKA Moscow', age: 22, caps: 17, goals: 4 },
    { name: 'Eldor Shomurodov', pos: 'FW', club: 'Roma', age: 30, caps: 73, goals: 40 }
  ],
  'Kolombia': [
    { name: 'Camilo Vargas', pos: 'GK', club: 'Atlas', age: 37, caps: 23, goals: 0 },
    { name: 'Davinson Sánchez', pos: 'DF', club: 'Galatasaray', age: 29, caps: 62, goals: 2 },
    { name: 'Daniel Muñoz', pos: 'DF', club: 'Crystal Palace', age: 30, caps: 27, goals: 3 },
    { name: 'James Rodríguez', pos: 'MF', club: 'Rayo Vallecano', age: 34, caps: 106, goals: 29 },
    { name: 'Richard Ríos', pos: 'MF', club: 'Palmeiras', age: 26, caps: 13, goals: 2 },
    { name: 'Luis Díaz', pos: 'FW', club: 'Liverpool', age: 29, caps: 49, goals: 14 },
    { name: 'Jhon Durán', pos: 'FW', club: 'Aston Villa', age: 22, caps: 10, goals: 2 }
  ],
  'Inggris': [
    { name: 'Jordan Pickford', pos: 'GK', club: 'Everton', age: 32, caps: 68, goals: 0 },
    { name: 'John Stones', pos: 'DF', club: 'Manchester City', age: 32, caps: 79, goals: 3 },
    { name: 'Kyle Walker', pos: 'DF', club: 'Manchester City', age: 36, caps: 90, goals: 1 },
    { name: 'Declan Rice', pos: 'MF', club: 'Arsenal', age: 27, caps: 58, goals: 3 },
    { name: 'Jude Bellingham', pos: 'MF', club: 'Real Madrid', age: 22, caps: 36, goals: 5 },
    { name: 'Cole Palmer', pos: 'MF', club: 'Chelsea', age: 24, caps: 9, goals: 2 },
    { name: 'Harry Kane', pos: 'FW', club: 'Bayern Munich', age: 32, caps: 98, goals: 66 },
    { name: 'Bukayo Saka', pos: 'FW', club: 'Arsenal', age: 24, caps: 40, goals: 12 }
  ],
  'Kroasia': [
    { name: 'Dominik Livaković', pos: 'GK', club: 'Fenerbahçe', age: 31, caps: 54, goals: 0 },
    { name: 'Joško Gvardiol', pos: 'DF', club: 'Manchester City', age: 24, caps: 30, goals: 2 },
    { name: 'Josip Šutalo', pos: 'DF', club: 'Ajax', age: 26, caps: 17, goals: 0 },
    { name: 'Luka Modrić', pos: 'MF', club: 'Real Madrid', age: 40, caps: 178, goals: 25 },
    { name: 'Mateo Kovačić', pos: 'MF', club: 'Manchester City', age: 32, caps: 104, goals: 5 },
    { name: 'Andrej Kramarić', pos: 'FW', club: 'TSG Hoffenheim', age: 34, caps: 93, goals: 28 },
    { name: 'Ivan Perišić', pos: 'FW', club: 'Hajduk Split', age: 37, caps: 134, goals: 33 }
  ],
  'Ghana': [
    { name: 'Lawrence Ati-Zigi', pos: 'GK', club: 'St. Gallen', age: 29, caps: 22, goals: 0 },
    { name: 'Mohammed Salisu', pos: 'DF', club: 'Monaco', age: 27, caps: 13, goals: 2 },
    { name: 'Thomas Partey', pos: 'MF', club: 'Arsenal', age: 32, caps: 49, goals: 13 },
    { name: 'Mohammed Kudus', pos: 'MF', club: 'West Ham United', age: 25, caps: 34, goals: 11 },
    { name: 'Jordan Ayew', pos: 'FW', club: 'Leicester City', age: 34, caps: 104, goals: 24 },
    { name: 'Inaki Williams', pos: 'FW', club: 'Athletic Bilbao', age: 31, caps: 17, goals: 1 }
  ],
  'Panama': [
    { name: 'Orlando Mosquera', pos: 'GK', club: 'Al-Fayha', age: 31, caps: 24, goals: 0 },
    { name: 'José Córdoba', pos: 'DF', club: 'Norwich City', age: 25, caps: 14, goals: 0 },
    { name: 'Adalberto Carrasquilla', pos: 'MF', club: 'Houston Dynamo', age: 27, caps: 57, goals: 2 },
    { name: 'Aníbal Godoy', pos: 'MF', club: 'Nashville SC', age: 36, caps: 137, goals: 4 },
    { name: 'Ismael Díaz', pos: 'FW', club: 'Universidad Católica', age: 29, caps: 39, goals: 9 },
    { name: 'José Fajardo', pos: 'FW', club: 'Universidad Católica', age: 32, caps: 46, goals: 11 }
  ]
};
