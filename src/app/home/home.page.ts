import { Component, OnInit } from '@angular/core';
import { GROUPS, SQUADS, FLAG_CODES, Player, Group } from './worldcup.data';
import { MATCHES } from './matches.data';
import { COACHES, Coach } from './coaches.data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  // Tabs
  activeTab: 'jadwal' | 'grup' | 'pelatih' = 'jadwal';

  // Data imports
  groups = GROUPS;
  matches = MATCHES;
  coaches = COACHES;
  squads = SQUADS;
  flagCodes = FLAG_CODES;

  // Filter for Groups
  selectedGroup: string = 'A';

  // Search for Coaches
  coachSearchQuery: string = '';

  // Selected country for squad modal (still accessible via group/schedule clicks)
  selectedCountry: string | null = null;
  selectedSquad: Player[] = [];
  showSquadModal: boolean = false;

  // Stats Modals
  showCountriesModal: boolean = false;
  showVenuesModal: boolean = false;

  venues = [
    { city: 'Guadalajara', stadium: 'Estadio Akron', capacity: '48,071', country: 'Meksiko', flag: 'mx' },
    { city: 'Mexico City', stadium: 'Estadio Azteca', capacity: '87,523', country: 'Meksiko', flag: 'mx' },
    { city: 'Monterrey', stadium: 'Estadio BBVA', capacity: '53,500', country: 'Meksiko', flag: 'mx' },
    { city: 'Toronto', stadium: 'BMO Field', capacity: '30,000', country: 'Kanada', flag: 'ca' },
    { city: 'Vancouver', stadium: 'BC Place', capacity: '54,500', country: 'Kanada', flag: 'ca' },
    { city: 'Atlanta', stadium: 'Mercedes-Benz Stadium', capacity: '71,000', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Boston', stadium: 'Gillette Stadium', capacity: '65,878', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Dallas', stadium: 'AT&T Stadium', capacity: '80,000', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Houston', stadium: 'NRG Stadium', capacity: '72,220', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Kansas City', stadium: 'Arrowhead Stadium', capacity: '76,416', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Los Angeles', stadium: 'SoFi Stadium', capacity: '70,240', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Miami', stadium: 'Hard Rock Stadium', capacity: '64,767', country: 'Amerika Serikat', flag: 'us' },
    { city: 'New York/New Jersey', stadium: 'MetLife Stadium', capacity: '82,500', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Philadelphia', stadium: 'Lincoln Financial Field', capacity: '69,796', country: 'Amerika Serikat', flag: 'us' },
    { city: 'San Francisco', stadium: 'Levi\'s Stadium', capacity: '68,500', country: 'Amerika Serikat', flag: 'us' },
    { city: 'Seattle', stadium: 'Lumen Field', capacity: '69,000', country: 'Amerika Serikat', flag: 'us' }
  ];

  ngOnInit() {}

  // Switch navigation tabs smoothly
  switchToTab(tab: 'jadwal' | 'grup' | 'pelatih') {
    this.activeTab = tab;
    setTimeout(() => {
      const el = document.querySelector('.tabs-navigation-wrap');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  // Continent grouping for all 48 WC2026 countries
  continentGroups: { name: string; emoji: string; countries: string[] }[] = [
    {
      name: 'Amerika Utara & Tengah (CONCACAF)',
      emoji: '🌎',
      countries: ['Amerika Serikat', 'Kanada', 'Meksiko', 'Kosta Rika', 'Panama', 'Haiti', 'Honduras', 'Jamaika']
    },
    {
      name: 'Amerika Selatan (CONMEBOL)',
      emoji: '🌎',
      countries: ['Argentina', 'Brasil', 'Uruguay', 'Kolombia', 'Ekuador', 'Paraguay', 'Venezuela', 'Bolivia', 'Peru', 'Cile']
    },
    {
      name: 'Eropa (UEFA)',
      emoji: '🌍',
      countries: ['Jerman', 'Prancis', 'Spanyol', 'Inggris', 'Portugal', 'Belanda', 'Belgia', 'Kroasia', 'Austria', 'Swiss', 'Swedia', 'Norwegia', 'Skotlandia', 'Bosnia & Herzegovina', 'Turki', 'Ceko', 'Curacao']
    },
    {
      name: 'Afrika (CAF)',
      emoji: '🌍',
      countries: ['Maroko', 'Senegal', 'Afrika Selatan', 'Pantai Gading', 'Aljazair', 'Tunisia', 'Mesir', 'DR Kongo', 'Ghana', 'Tanjung Verde']
    },
    {
      name: 'Asia (AFC)',
      emoji: '🌏',
      countries: ['Korea Selatan', 'Jepang', 'Arab Saudi', 'Qatar', 'Iran', 'Irak', 'Uzbekistan', 'Yordania', 'Australia']
    },
    {
      name: 'Oseania (OFC)',
      emoji: '🌏',
      countries: ['Selandia Baru']
    }
  ];

  // Get continents that have at least one country present in flagCodes
  getCountriesByContinent(): { name: string; emoji: string; countries: string[] }[] {
    return this.continentGroups.map(group => ({
      ...group,
      countries: group.countries.filter(c => this.flagCodes[c] !== undefined)
    })).filter(group => group.countries.length > 0);
  }

  openCountriesModal() {
    this.showCountriesModal = true;
  }

  closeCountriesModal() {
    this.showCountriesModal = false;
  }

  openVenuesModal() {
    this.showVenuesModal = true;
  }

  closeVenuesModal() {
    this.showVenuesModal = false;
  }

  openSquadFromCountries(country: string) {
    this.showCountriesModal = false;
    this.openSquad(country);
  }

  // Get flag CDN url for country
  getFlagUrl(country: string): string {
    const code = this.flagCodes[country] || 'un';
    return `https://flagcdn.com/48x36/${code}.png`;
  }

  // Get flag from ISO code directly (for coach nationality flag)
  getFlagByCode(code: string): string {
    return `https://flagcdn.com/48x36/${code}.png`;
  }

  // Get filtered groups
  getFilteredGroups(): Group[] {
    if (this.selectedGroup === 'All') return this.groups;
    return this.groups.filter(g => g.name === this.selectedGroup);
  }

  // Get unique group labels from coaches data
  getCoachGroups(): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const c of this.coaches) {
      if (!seen.has(c.group)) { seen.add(c.group); result.push(c.group); }
    }
    return result;
  }

  // Get coaches belonging to a specific group, filtered by search
  getCoachesByGroup(group: string): Coach[] {
    const q = this.coachSearchQuery.trim().toLowerCase();
    return this.coaches.filter(c => {
      if (c.group !== group) return false;
      if (!q) return true;
      return (
        c.country.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.nationality.toLowerCase().includes(q)
      );
    });
  }

  // Get all group letters that have at least one result (for search filtering)
  getFilteredCoachGroups(): string[] {
    return this.getCoachGroups().filter(g => this.getCoachesByGroup(g).length > 0);
  }

  // Get filtered coaches by search query (flat list fallback)
  getFilteredCoaches(): Coach[] {
    const q = this.coachSearchQuery.trim().toLowerCase();
    if (!q) return this.coaches;
    return this.coaches.filter(c =>
      c.country.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.nationality.toLowerCase().includes(q)
    );
  }

  // Helper to get initials
  getInitials(name: string): string {
    if (!name) return 'WC';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  }

  // Simple seedable pseudo-random helper for reproducible generation
  seedRandom(seedStr: string): () => number {
    let h = 0;
    for (let i = 0; i < seedStr.length; i++) {
      h = Math.imul(31, h) + seedStr.charCodeAt(i) | 0;
    }
    return function() {
      h = Math.imul(h ^ h >>> 16, 2246822507);
      h = Math.imul(h ^ h >>> 13, 3266489909);
      return ((h ^= h >>> 16) >>> 0) / 4294967296;
    };
  }

  // Get name region key based on country
  getRegionKey(country: string): string {
    const c = country.toLowerCase();
    if (c.includes('meksiko') || c.includes('spanyol') || c.includes('uruguay') || c.includes('argentina') || c.includes('kolombia') || c.includes('ekuador') || c.includes('paraguay') || c.includes('panama') || c.includes('haiti')) {
      return 'spanish';
    }
    if (c.includes('brasil') || c.includes('portugal') || c.includes('tanjung verde')) {
      return 'portuguese';
    }
    if (c.includes('korea') || c.includes('jepang') || c.includes('qatar') || c.includes('arab saudi') || c.includes('yordania') || c.includes('irak') || c.includes('iran') || c.includes('uzbekistan')) {
      return 'asian';
    }
    if (c.includes('senegal') || c.includes('pantai gading') || c.includes('maroko') || c.includes('aljazair') || c.includes('tunisia') || c.includes('kongo') || c.includes('ghana') || c.includes('mesir')) {
      return 'african';
    }
    if (c.includes('inggris') || c.includes('amerika') || c.includes('kanada') || c.includes('australia') || c.includes('selandia baru') || c.includes('skotlandia') || c.includes('afrika selatan')) {
      return 'english';
    }
    return 'euro';
  }

  // Generate a full 23-player squad dynamically
  getFullSquad(country: string): Player[] {
    const baseSquad = this.squads[country] || [];
    if (baseSquad.length >= 23) return baseSquad;

    const region = this.getRegionKey(country);
    
    // Lists of names and clubs
    const regionNames: { [key: string]: { first: string[], last: string[], clubs: string[] } } = {
      spanish: {
        first: ['José', 'Carlos', 'Luis', 'Juan', 'Santiago', 'Mateo', 'Sebastián', 'Alejandro', 'Diego', 'Andrés', 'Gabriel', 'Ángel', 'Daniel', 'Lucas', 'Nicolás', 'Javier', 'Hugo', 'Enzo', 'Leonardo', 'Emilio'],
        last: ['González', 'Rodríguez', 'Gómez', 'Fernández', 'López', 'Díaz', 'Martínez', 'Pérez', 'García', 'Sánchez', 'Romero', 'Álvarez', 'Torres', 'Ruiz', 'Ramírez', 'Ortega', 'Castillo', 'Castro', 'Vargas', 'Rojas'],
        clubs: ['Real Madrid', 'Barcelona', 'Atlético Madrid', 'Sevilla', 'Real Betis', 'Villarreal', 'Bayer Leverkusen', 'PSG', 'Juventus', 'Boca Juniors', 'River Plate']
      },
      portuguese: {
        first: ['João', 'Pedro', 'Lucas', 'Matheus', 'Gabriel', 'Thiago', 'Felipe', 'Rafael', 'Bruno', 'Rodrigo', 'Arthur', 'Gustavo', 'Vitor', 'André', 'Caio', 'Bernardo', 'Diogo', 'Manuel', 'Afonso', 'Rui'],
        last: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Lopes', 'Pinto', 'Teixeira', 'Cardoso', 'Mendes', 'Fonseca'],
        clubs: ['Porto', 'Benfica', 'Sporting CP', 'Flamengo', 'Palmeiras', 'São Paulo', 'Corinthians', 'Braga', 'Wolves', 'Real Madrid', 'PSG']
      },
      asian: {
        first: ['Hiroto', 'Ren', 'Sota', 'Yuto', 'Haruto', 'Koki', 'Riku', 'Sora', 'Min-jun', 'Seo-jun', 'Ha-jun', 'Do-yun', 'Ahmed', 'Mohamed', 'Ali', 'Hassan', 'Youssef', 'Omar', 'Khalid', 'Fahad'],
        last: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Al-Dosari', 'Al-Shahrani', 'Al-Harbi', 'Al-Muwallad', 'Al-Ghamdi', 'Al-Hassan'],
        clubs: ['Al-Hilal', 'Al-Nassr', 'Al-Ittihad', 'Al-Ahli', 'Al-Sadd', 'Al-Duhail', 'Ulsan HD', 'Jeonbuk Hyundai', 'FC Seoul', 'Vissel Kobe', 'Yokohama F. Marinos']
      },
      african: {
        first: ['Moussa', 'Ibrahim', 'Ousmane', 'Cheikh', 'Amadou', 'Habib', 'Sadio', 'Kalidou', 'Boubacar', 'Idrissa', 'Salif', 'Abdoulaye', 'Moustapha', 'Souleymane', 'Mohamed', 'Yassine', 'Sofiane', 'Hakim', 'Achraf', 'Youssef'],
        last: ['Diop', 'Sow', 'Diallo', 'Gueye', 'Ndiaye', 'Sarr', 'Mendy', 'Ba', 'Sy', 'Fall', 'Cissé', 'Keita', 'Kouyaté', 'Camara', 'Traoré', 'Hassan', 'El-Sayed', 'Bouhaddouz', 'Bounou', 'En-Nesyri'],
        clubs: ['Al Ahly', 'Zamalek', 'Wydad Casablanca', 'Raja Casablanca', 'Espérance de Tunis', 'Mamelodi Sundowns', 'Marseille', 'Monaco', 'Nice', 'Lyon', 'Lille']
      },
      english: {
        first: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Harry', 'Jack', 'Oliver', 'Connor', 'George'],
        last: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Anderson', 'Taylor', 'Thomas', 'White', 'Harris', 'Martin', 'Jackson', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young'],
        clubs: ['Manchester United', 'Manchester City', 'Liverpool', 'Arsenal', 'Chelsea', 'Tottenham Hotspur', 'Aston Villa', 'Newcastle United', 'Everton', 'West Ham United', 'Celtic']
      },
      euro: {
        first: ['Lukas', 'Stefan', 'Kristian', 'Jan', 'Tomas', 'Milan', 'Ivan', 'Peter', 'Oliver', 'Jonas', 'Emil', 'Anton', 'Filip', 'Alexander', 'Martin', 'Dominik', 'Zvonimir', 'Andrej', 'Nikola', 'Mario'],
        last: ['Krejci', 'Kovacic', 'Novak', 'Svoboda', 'Hansen', 'Jensen', 'Larsson', 'Nilsson', 'Andersson', 'Weber', 'Müller', 'Schmidt', 'Fischer', 'Schneider', 'Modric', 'Brozovic', 'Kramaric', 'Perisic', 'Vida', 'Rakitic'],
        clubs: ['Bayern Munich', 'Borussia Dortmund', 'Bayer Leverkusen', 'Ajax', 'Feyenoord', 'PSV Eindhoven', 'AC Milan', 'Inter Milan', 'Juventus', 'Roma', 'Napoli']
      }
    };

    const data = regionNames[region] || regionNames['euro'];
    const squad = [...baseSquad];

    // Position targets
    const positions: ('GK' | 'DF' | 'MF' | 'FW')[] = ['GK', 'DF', 'MF', 'FW'];
    const targets = { GK: 3, DF: 8, MF: 7, FW: 5 };

    positions.forEach(pos => {
      const currentCount = squad.filter(p => p.pos === pos).length;
      const needed = targets[pos] - currentCount;

      for (let i = 0; i < needed; i++) {
        // Unique seed for reproducibility
        const rng = this.seedRandom(country + '_' + pos + '_' + i);
        
        // Pick names
        let first = data.first[Math.floor(rng() * data.first.length)];
        let last = data.last[Math.floor(rng() * data.last.length)];
        let fullName = `${first} ${last}`;

        // Ensure name uniqueness in squad
        let attempt = 0;
        while (squad.some(p => p.name === fullName) && attempt < 10) {
          first = data.first[Math.floor(rng() * data.first.length)];
          last = data.last[Math.floor(rng() * data.last.length)];
          fullName = `${first} ${last}`;
          attempt++;
        }

        // Pick club
        const club = data.clubs[Math.floor(rng() * data.clubs.length)];
        
        // Random stats
        const age = Math.floor(rng() * 15) + 20; // 20 to 34
        const caps = Math.floor(rng() * 60) + 5;  // 5 to 65
        const goals = pos === 'GK' ? 0 : Math.floor(rng() * 15); // 0 to 14

        squad.push({
          name: fullName,
          pos: pos,
          club: club,
          age: age,
          caps: caps,
          goals: goals
        });
      }
    });

    return squad;
  }

  // Open squad modal
  openSquad(country: string) {
    this.selectedCountry = country;
    this.selectedSquad = this.getFullSquad(country);
    this.showSquadModal = true;
  }

  // Close squad modal
  closeSquad() {
    this.showSquadModal = false;
    this.selectedCountry = null;
    this.selectedSquad = [];
  }

  // Get player avatar image based on position
  getPlayerAvatar(pos: 'GK' | 'DF' | 'MF' | 'FW'): string {
    switch (pos) {
      case 'GK': return 'assets/avatar_gk.png';
      case 'DF': return 'assets/avatar_df.png';
      case 'MF': return 'assets/avatar_mf.png';
      case 'FW': return 'assets/avatar_fw.png';
      default: return 'assets/avatar_fw.png';
    }
  }

  // Get players by position for modal grouping
  getPlayersByPosition(pos: 'GK' | 'DF' | 'MF' | 'FW'): Player[] {
    return this.selectedSquad.filter(p => p.pos === pos);
  }
}
