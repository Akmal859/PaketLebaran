export interface Coach {
  country: string;
  group: string;
  name: string;
  nationality: string;
  nationalityFlag: string; // flag CDN code
  bio: string;
  formation: string; // favorite formation
}

export const COACHES: Coach[] = [
  { 
    country: 'Meksiko', 
    group: 'A', 
    name: 'Javier Aguirre', 
    nationality: 'Meksiko', 
    nationalityFlag: 'mx',
    bio: 'Pelatih veteran Meksiko, dikenal dengan taktik pragmatis dan pengalaman melatih di Eropa.',
    formation: '5-3-2'
  },
  { 
    country: 'Korea Selatan', 
    group: 'A', 
    name: 'Hong Myung-bo', 
    nationality: 'Korea Selatan', 
    nationalityFlag: 'kr',
    bio: 'Legenda bek Korea Selatan, mantan kapten timnas dengan disiplin taktik tinggi.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Republik Ceko', 
    group: 'A', 
    name: 'Miroslav Koubek', 
    nationality: 'Republik Ceko', 
    nationalityFlag: 'cz',
    bio: 'Pelatih berpengalaman liga domestik Ceko yang mengutamakan kolektivitas tim.',
    formation: '3-4-2-1'
  },
  { 
    country: 'Afrika Selatan', 
    group: 'A', 
    name: 'Hugo Broos', 
    nationality: 'Belgia', 
    nationalityFlag: 'be',
    bio: 'Pelatih asal Belgia yang berpengalaman membawa tim Afrika meraih prestasi internasional.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Kanada', 
    group: 'B', 
    name: 'Jesse Marsch', 
    nationality: 'Amerika Serikat', 
    nationalityFlag: 'us',
    bio: 'Pelatih asal AS, penganut filosofi high-pressing dan sepak bola menyerang.',
    formation: '4-2-2-2'
  },
  { 
    country: 'Bosnia & Herzegovina', 
    group: 'B', 
    name: 'Sergej Barbarez', 
    nationality: 'Bosnia & Herzegovina', 
    nationalityFlag: 'ba',
    bio: 'Mantan kapten timnas, sosok inspiratif yang membangun fondasi baru bagi timnas Bosnia.',
    formation: '4-3-3'
  },
  { 
    country: 'Qatar', 
    group: 'B', 
    name: 'Julen Lopetegui', 
    nationality: 'Spanyol', 
    nationalityFlag: 'es',
    bio: 'Pelatih Spanyol berkelas dunia dengan fokus pada penguasaan bola (ball possession).',
    formation: '4-3-3'
  },
  { 
    country: 'Swiss', 
    group: 'B', 
    name: 'Murat Yakin', 
    nationality: 'Swiss', 
    nationalityFlag: 'ch',
    bio: 'Mantan bek tangguh, pelatih yang membangun pertahanan Swiss menjadi sangat solid.',
    formation: '3-4-2-1'
  },
  { 
    country: 'Brasil', 
    group: 'C', 
    name: 'Carlo Ancelotti', 
    nationality: 'Italia', 
    nationalityFlag: 'it',
    bio: 'Pelatih legendaris Italia, dikenal sebagai spesialis juara kompetisi elit.',
    formation: '4-3-3'
  },
  { 
    country: 'Maroko', 
    group: 'C', 
    name: 'Mohamed Ouahbi', 
    nationality: 'Maroko', 
    nationalityFlag: 'ma',
    bio: 'Pelatih muda berbakat yang fokus pada pengembangan bakat lokal Maroko.',
    formation: '4-3-3'
  },
  { 
    country: 'Haiti', 
    group: 'C', 
    name: 'Sébastien Migné', 
    nationality: 'Prancis', 
    nationalityFlag: 'fr',
    bio: 'Pelatih asal Prancis dengan pengalaman luas menangani timnas di Afrika dan Karibia.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Skotlandia', 
    group: 'C', 
    name: 'Steve Clarke', 
    nationality: 'Skotlandia', 
    nationalityFlag: 'gb-sct',
    bio: 'Pelatih pragmatis yang sukses membawa Skotlandia kembali ke level kompetitif.',
    formation: '3-4-2-1'
  },
  { 
    country: 'Amerika Serikat', 
    group: 'D', 
    name: 'Mauricio Pochettino', 
    nationality: 'Argentina', 
    nationalityFlag: 'ar',
    bio: 'Pelatih Argentina, dikenal dengan intensitas tinggi dan pengembangan pemain muda.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Turki', 
    group: 'D', 
    name: 'Vincenzo Montella', 
    nationality: 'Italia', 
    nationalityFlag: 'it',
    bio: 'Pelatih Italia yang membawa gaya bermain kreatif ke timnas Turki.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Australia', 
    group: 'D', 
    name: 'Tony Popovic', 
    nationality: 'Australia', 
    nationalityFlag: 'au',
    bio: 'Pelatih disiplin yang fokus pada organisasi pertahanan yang ketat.',
    formation: '3-4-2-1'
  },
  { 
    country: 'Paraguay', 
    group: 'D', 
    name: 'Gustavo Alfaro', 
    nationality: 'Argentina', 
    nationalityFlag: 'ar',
    bio: 'Pelatih Argentina yang ahli dalam strategi counter-attack dan disiplin.',
    formation: '5-4-1'
  },
  { 
    country: 'Jerman', 
    group: 'E', 
    name: 'Julian Nagelsmann', 
    nationality: 'Jerman', 
    nationalityFlag: 'de',
    bio: 'Pelatih muda jenius dengan pendekatan taktik modern dan sepak bola progresif.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Curaçao', 
    group: 'E', 
    name: 'Dick Advocaat', 
    nationality: 'Belanda', 
    nationalityFlag: 'nl',
    bio: 'Pelatih veteran Belanda yang membawa pengalaman segudang ke tim kecil.',
    formation: '4-3-3'
  },
  { 
    country: 'Pantai Gading', 
    group: 'E', 
    name: 'Emerse Faé', 
    nationality: 'Pantai Gading', 
    nationalityFlag: 'ci',
    bio: 'Mantan pemain timnas yang sukses mengangkat mentalitas juara Pantai Gading.',
    formation: '4-3-3'
  },
  { 
    country: 'Ekuador', 
    group: 'E', 
    name: 'Sebastián Beccacece', 
    nationality: 'Argentina', 
    nationalityFlag: 'ar',
    bio: 'Pelatih Argentina, dikenal dengan gaya sepak bola menyerang dan energik.',
    formation: '3-4-3'
  },
  { 
    country: 'Belanda', 
    group: 'F', 
    name: 'Ronald Koeman', 
    nationality: 'Belanda', 
    nationalityFlag: 'nl',
    bio: 'Legenda Belanda dengan pengalaman taktik di berbagai liga elit Eropa.',
    formation: '4-3-3'
  },
  { 
    country: 'Jepang', 
    group: 'F', 
    name: 'Hajime Moriyasu', 
    nationality: 'Jepang', 
    nationalityFlag: 'jp',
    bio: 'Pelatih tenang yang sangat memperhatikan detail dan kedisiplinan posisi.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Swedia', 
    group: 'F', 
    name: 'Graham Potter', 
    nationality: 'Inggris', 
    nationalityFlag: 'gb-eng',
    bio: 'Pelatih Inggris yang dikenal mahir merancang skema taktik yang fleksibel.',
    formation: '3-4-2-1'
  },
  { 
    country: 'Tunisia', 
    group: 'F', 
    name: 'Sabri Lamouchi', 
    nationality: 'Prancis', 
    nationalityFlag: 'fr',
    bio: 'Pelatih Prancis dengan pemahaman mendalam tentang gaya sepak bola Afrika.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Spanyol', 
    group: 'G', 
    name: 'Luis de la Fuente', 
    nationality: 'Spanyol', 
    nationalityFlag: 'es',
    bio: 'Pelatih yang mengutamakan penguasaan bola dan pemain muda berbakat.',
    formation: '4-3-3'
  },
  { 
    country: 'Tanjung Verde', 
    group: 'G', 
    name: 'Pedro Leitão Brito', 
    nationality: 'Tanjung Verde', 
    nationalityFlag: 'cv',
    bio: 'Pelatih lokal yang membangun tim dengan semangat kolektif tinggi.',
    formation: '4-3-3'
  },
  { 
    country: 'Belgia', 
    group: 'G', 
    name: 'Rudi Garcia', 
    nationality: 'Prancis', 
    nationalityFlag: 'fr',
    bio: 'Pelatih Prancis yang mengedepankan efektivitas serangan dan transisi cepat.',
    formation: '4-3-3'
  },
  { 
    country: 'Mesir', 
    group: 'G', 
    name: 'Hossam Hassan', 
    nationality: 'Mesir', 
    nationalityFlag: 'eg',
    bio: 'Legenda sepak bola Mesir yang sangat karismatik dan motivatif.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Arab Saudi', 
    group: 'H', 
    name: 'Giorgios Donis', 
    nationality: 'Yunani', 
    nationalityFlag: 'gr',
    bio: 'Pelatih asal Yunani dengan pengalaman panjang di sepak bola Timur Tengah.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Uruguay', 
    group: 'H', 
    name: 'Marcelo Bielsa', 
    nationality: 'Argentina', 
    nationalityFlag: 'ar',
    bio: 'Pelatih Argentina yang visioner, dikenal dengan gaya sepak bola intensitas ekstrem.',
    formation: '4-3-3'
  },
  { 
    country: 'Iran', 
    group: 'H', 
    name: 'Amir Ghalenoei', 
    nationality: 'Iran', 
    nationalityFlag: 'ir',
    bio: 'Sosok paling sukses dalam sejarah sepak bola Iran, sangat dihormati.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Selandia Baru', 
    group: 'H', 
    name: 'Darren Bazeley', 
    nationality: 'Inggris', 
    nationalityFlag: 'gb-eng',
    bio: 'Pelatih Inggris yang fokus pada pengembangan sistem permainan yang rapi.',
    formation: '4-3-3'
  },
  { 
    country: 'Prancis', 
    group: 'I', 
    name: 'Didier Deschamps', 
    nationality: 'Prancis', 
    nationalityFlag: 'fr',
    bio: 'Juara dunia sebagai pemain dan pelatih, ahli dalam memenangkan turnamen.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Senegal', 
    group: 'I', 
    name: 'Pape Thiaw', 
    nationality: 'Senegal', 
    nationalityFlag: 'sn',
    bio: 'Pelatih muda yang fokus pada kekuatan fisik dan kecepatan pemain Senegal.',
    formation: '4-3-3'
  },
  { 
    country: 'Irak', 
    group: 'I', 
    name: 'Graham Arnold', 
    nationality: 'Australia', 
    nationalityFlag: 'au',
    bio: 'Pelatih Australia dengan pengalaman panjang menangani tim di Asia.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Norwegia', 
    group: 'I', 
    name: 'Ståle Solbakken', 
    nationality: 'Norwegia', 
    nationalityFlag: 'no',
    bio: 'Pelatih berpengalaman yang menekankan pada organisasi permainan yang kuat.',
    formation: '4-3-3'
  },
  { 
    country: 'Argentina', 
    group: 'J', 
    name: 'Lionel Scaloni', 
    nationality: 'Argentina', 
    nationalityFlag: 'ar',
    bio: 'Pelatih muda yang sukses menyatukan skuad Argentina hingga menjadi juara.',
    formation: '4-3-3'
  },
  { 
    country: 'Aljazair', 
    group: 'J', 
    name: 'Vladimir Petković', 
    nationality: 'Bosnia & Herzegovina', 
    nationalityFlag: 'ba',
    bio: 'Pelatih asal Bosnia, dikenal ahli dalam membangun taktik pertahanan rapi.',
    formation: '4-3-3'
  },
  { 
    country: 'Austria', 
    group: 'J', 
    name: 'Ralf Rangnick', 
    nationality: 'Jerman', 
    nationalityFlag: 'de',
    bio: 'Bapak Gegenpressing asal Jerman, ahli dalam manajemen pemain dan taktik.',
    formation: '4-2-2-2'
  },
  { 
    country: 'Yordania', 
    group: 'J', 
    name: 'Jamal Sellami', 
    nationality: 'Maroko', 
    nationalityFlag: 'ma',
    bio: 'Pelatih Maroko yang membawa gaya permainan cerdas di liga Timur Tengah.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Portugal', 
    group: 'K', 
    name: 'Roberto Martínez', 
    nationality: 'Spanyol', 
    nationalityFlag: 'es',
    bio: 'Pelatih asal Spanyol yang ahli dalam manajemen skuad bintang dan taktik menyerang.',
    formation: '4-3-3'
  },
  { 
    country: 'DR Kongo', 
    group: 'K', 
    name: 'Sébastien Desabre', 
    nationality: 'Prancis', 
    nationalityFlag: 'fr',
    bio: 'Pelatih Prancis yang ahli dalam membangun tim kompetitif dengan sumber terbatas.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Uzbekistan', 
    group: 'K', 
    name: 'Fabio Cannavaro', 
    nationality: 'Italia', 
    nationalityFlag: 'it',
    bio: 'Legenda Italia, membawa mentalitas juara dunia ke sepak bola Asia.',
    formation: '4-3-3'
  },
  { 
    country: 'Kolombia', 
    group: 'K', 
    name: 'Néstor Lorenzo', 
    nationality: 'Argentina', 
    nationalityFlag: 'ar',
    bio: 'Pelatih Argentina yang berhasil membangun tim kolombia yang sulit dikalahkan.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Inggris', 
    group: 'L', 
    name: 'Thomas Tuchel', 
    nationality: 'Jerman', 
    nationalityFlag: 'de',
    bio: 'Pelatih taktis asal Jerman, spesialis dalam memenangkan pertandingan besar.',
    formation: '4-2-3-1'
  },
  { 
    country: 'Kroasia', 
    group: 'L', 
    name: 'Zlatko Dalić', 
    nationality: 'Kroasia', 
    nationalityFlag: 'hr',
    bio: 'Pelatih yang sangat tenang dan ahli dalam mengelola pemain senior Kroasia.',
    formation: '4-3-3'
  },
  { 
    country: 'Ghana', 
    group: 'L', 
    name: 'Carlos Queiroz', 
    nationality: 'Portugal', 
    nationalityFlag: 'pt',
    bio: 'Pelatih asal Portugal dengan pengalaman mendunia, spesialis taktik bertahan.',
    formation: '4-5-1'
  },
  { 
    country: 'Panama', 
    group: 'L', 
    name: 'Thomas Christiansen', 
    nationality: 'Spanyol / Denmark', 
    nationalityFlag: 'es',
    bio: 'Pelatih berdarah Spanyol-Denmark yang membawa disiplin Eropa ke tim Panama.',
    formation: '3-4-3'
  },
];
