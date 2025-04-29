dataSetVersion = "2025-03-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game Title",
    key: "game",
    tooltip: "Check this to restrict characters from certain games.",
    checked: false,
    sub: [
      { name: "Oppai Isekai Ero Mahou Gakuen!", key: "mahou" },
      { name: "Oppai Chou Ero ♥ Appli Gakuen!", key: "appli" },
      { name: "Oppai Isekai Chou Ero ♥ Succubus Gakuen!", key: "succubus" },
      { name: "Oppai Isekai Oppai Maid Gakuen!", key: "maid" },
      { name: "Oppai Isekai Oppai Bunny Gakuen!", key: "bunny" },
    ]
  },
  {
    name: "Disable Main Heroines",
    key: "main",
    tooltip: "Check this to remove Main Heroines.",
    checked: false
  },
  {
    name: "Disable Mother Heroines",
    key: "mother",
    tooltip: "Check this to remove Mother Heroines.",
    checked: false
  },
  {
    name: "Disable Side Heroines",
    key: "side",
    tooltip: "Check this to remove Side Heroines.",
    checked: false
  },
   {
    name: "Disable Alternate Heroines",
    key: "alternate",
    tooltip: "Check this to filter alternate duplicates.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Amatsuka Erena",
    img: "Mahou-Amatsuka Erena.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Catherine E. Romancia",
    img: "Mahou-Catherine E. Romancia.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Kashnia Blood Claussell",
    img: "Mahou-Kashnia Blood Claussell.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Lydia Luitgard",
    img: "Mahou-Lydia Luitgard.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Myau Orphel",
    img: "Mahou-Myau Orphel.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Naomin Ibah Lucile",
    img: "Mahou-Naomin Ibah Lucile.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Olga",
    img: "Mahou-Olga.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Phee Kissthermite",
    img: "Mahou-Phee Kissthermite.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Uzuki Kaguya",
    img: "Mahou-Uzuki Kaguya.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Yukinokouji Mizore",
    img: "Mahou-Yukinokouji Mizore.png",
    opts: {
      game: ["mahou"],
      main: true
    }
  },
  {
    name: "Mizore (Adult Mode)",
    img: "Mahou-Yukinokouji Mizore (Adult Mode).png",
    opts: {
      game: ["mahou"],
      alternate: true
    }
  },
  {
    name: "Asami",
    img: "Mahou-Asami.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
  {
    name: "Celica",
    img: "Mahou-Celica.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
  {
    name: "Ellen",
    img: "Mahou-Ellen.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
  {
    name: "Gildas",
    img: "Mahou-Gildas.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
  {
    name: "Lumia",
    img: "Mahou-Lumia.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
  {
    name: "Marie",
    img: "Mahou-Marie.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
{
    name: "Milfa",
    img: "Mahou-Milfa.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
{
    name: "Sarah",
    img: "Mahou-Sarah.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
{
    name: "Sistine",
    img: "Mahou-Sistine.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
{
    name: "Tiana",
    img: "Mahou-Tiana.png",
    opts: {
      game: ["mahou"],
      side: true
    }
  },
{
    name: "Iizuki Riria",
    img: "App-Iizuki Riria.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Jougasaki Rio",
    img: "App-Jougasaki Rio.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Kuromorihime Akira",
    img: "App-Kuromorihime Akane.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Liescha",
    img: "App-Liescha.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Midou Kaede",
    img: "App-Midou Kaede.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Minase Maya",
    img: "App-Minase Maya.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Misaki Konoka",
    img: "App-Misaki Konoka.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Nanoka",
    img: "App-Nanoka.png",
    opts: {
      game: ["appli"],
      alternate: true
    }
  },
  {
    name: "Saionji Nanako",
    img: "App-Saionji Nanako.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Sonomiya Yukari",
    img: "App-Sonomiya Yukari.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Yutani Hinata",
    img: "App-Yutani Hinata.png",
    opts: {
      game: ["appli"],
      main: true
    }
  },
  {
    name: "Barato Reiko",
    img: "App-Barato Reiko.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
  {
    name: "Fujino Kaoru",
    img: "App-Fujino Kaoru.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
  {
    name: "Fushiko Kaname",
    img: "App-Fushiko Kaname.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
  {
    name: "Hiraoka Tamako",
    img: "App-Hiraoka Tamako.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
  {
    name: "Hoshioki Megumi",
    img: "App-Hoshioki Megumi.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
  {
    name: "Ishiyama Michiko",
    img: "App-Ishiyama Michiko.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
{
    name: "Kawazoe Rena",
    img: "App-Kawazoe Rena.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
{
    name: "Satozuka Mai",
    img: "App-Satozuka Mai.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
{
    name: "Shimojou Emiri",
    img: "App-Shimojou Emiri.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
{
    name: "Shinomichi Haruka",
    img: "App-Shinomichi Haruka.png",
    opts: {
      game: ["appli"],
      side: true
    }
  },
{
    name: "Calulu Restram",
    img: "Succ-Calulu Restram.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Celestia Lashiel",
    img: "Succ-Celestia Lashiel.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Chartina Luitgard",
    img: "Succ-Chartina Luitgard.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Elze Eve Dianta",
    img: "Succ-Elze Eve Dianta.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Fam",
    img: "Succ-Fam.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "QunQun Na Organite",
    img: "Succ-QunQun Na Organite.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Rosalina Rafaelos",
    img: "Succ-Rosalina Rafaelos.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Sophia Von Managras",
    img: "Succ-Sophia Von Managras.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Washimiya Takami",
    img: "Succ-Washimiya Takami.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Yumegasaki Mako",
    img: "Succ-Yumegasaki Mako.png",
    opts: {
      game: ["succubus"],
      main: true
    }
  },
  {
    name: "Alvinera",
    img: "Succ-Alvinera.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
  {
    name: "Angelica",
    img: "Succ-Angelica.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
  {
    name: "Citra Lockheart",
    img: "Succ-Citra Lockheart.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
  {
    name: "Harpyness",
    img: "Succ-Harpyness.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
  {
    name: "Lijee",
    img: "Succ-Lijee.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
  {
    name: "Lila Snowell",
    img: "Succ-Lila Snowell.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
{
    name: "Luxual Hellmare",
    img: "Succ-Luxual Hellmare.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
{
    name: "Maron",
    img: "Succ-Maron.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
{
    name: "Philis",
    img: "Succ-Philis.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
{
    name: "Velda Augustus",
    img: "Succ-Velda Augustus.png",
    opts: {
      game: ["succubus"],
      side: true
    }
  },
{
    name: "Anastasia Mysterante",
    img: "Maid-Anastasia Mysterante.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
 {
    name: "Ana (Doppelganger)",
    img: "Maid-Anastasia Mysterante (Doppelganger).png",
    opts: {
      game: ["maid"],
      alternate: true
    }
  },
 {
    name: "Dyzenia Dracour",
    img: "Maid-Dyzenia Dracour.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Eibel Haurisia",
    img: "Maid-Eibel Haurisia.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Kriemhild Valhanna",
    img: "Maid-Kriemhild Valhanna.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Liliera Loveknot",
    img: "Maid-Liliera Loveknot.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Lixual Hellmare",
    img: "Maid-Lixual Hellmare.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Makina Lu Blanchette",
    img: "Maid-Makina Lu Blanchette.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Meena 1919",
    img: "Maid-Meena 1919.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Myoudou Mei",
    img: "Maid-Myoudou Mei.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "MyunMyun Lafleur",
    img: "Maid-MyunMyun Lafleur.png",
    opts: {
      game: ["maid"],
      main: true
    }
  },
  {
    name: "Arka Hellmare",
    img: "Maid-Arka Hellmare.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
  {
    name: "Brynhildr Valhanna",
    img: "Maid-Brynhildr Valhanna.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
  {
    name: "Elizabeth Mysterante",
    img: "Maid-Elizabeth Mysterante.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
  {
    name: "Fáfnira Dracour",
    img: "Maid-Fáfnira Dracour.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
  {
    name: "Laurecia Lu Blanchette",
    img: "Maid-Laurecia Lu Blanchette.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
  {
    name: "Lunalilia Loveknot",
    img: "Maid-Lunalilia Loveknot.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
{
    name: "Myoudou Maasa",
    img: "Maid-Myoudou Maasa.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
{
    name: "NunNun Lafleur",
    img: "Maid-NunNun Lafleur.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
{
    name: "Parthia Ramsey",
    img: "Maid-Parthia Ramsey.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
{
    name: "Saizel Haurisia",
    img: "Maid-Saizel Haurisia.png",
    opts: {
      game: ["maid"],
      mother: true
    }
  },
{
    name: "Elma Saventilla",
    img: "Maid-Elma Saventilla.png",
    opts: {
      game: ["maid"],
      side: true
    }
  },
{
    name: "Fran Franchir",
    img: "Maid-Fran Franchir.png",
    opts: {
      game: ["maid"],
      side: true
    }
  },
{
    name: "Alistine Mi Rosiel",
    img: "Bunny-Alistine Mi Rosiel.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Chichizaki Momina",
    img: "Bunny-Chichizaki Momina.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Felicia La Nacuras",
    img: "Bunny-Felicia La Nacuras.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Giltia Lu Dorud",
    img: "Bunny-Giltia Lu Dorud.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
   {
    name: "Giltia (B-Cup)",
    img: "Bunny-Giltia (B-Cup).png",
    opts: {
      game: ["bunny"],
      alternate: true
    }
  },
  {
    name: "Karla Lil Earthian",
    img: "Bunny-Karla Lil Earthian.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Meamea Fo Rusalka",
    img: "Bunny-Meamea Fo Rusalka.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Miinya Prenavas8102",
    img: "Bunny-Miinya Prenavas8102.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Raelda Le Failda",
    img: "Bunny-Raelda Le Failda.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Raphiel Grimlight",
    img: "Bunny-Raphiel Grimlight.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Usami Runa",
    img: "Bunny-Usami Runa.png",
    opts: {
      game: ["bunny"],
      main: true
    }
  },
  {
    name: "Agnesia Fo Rusalka",
    img: "Bunny-Agnesia Fo Rusalka.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
  {
    name: "Chichizaki Suina",
    img: "Bunny-Chichizaki Suina.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
  {
    name: "Felaris Grimlight",
    img: "Bunny-Felaris Grimlight.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
  {
    name: "Laveze Le Nacuras",
    img: "Bunny-Laveze Le Nacuras.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
  {
    name: "Lindsey La Rosiel",
    img: "Bunny-Lindsey La Rosiel.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
  {
    name: "Lumiera Lil Earthian",
    img: "Bunny-Lumiera Lil Earthian.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
{
    name: "Mamaria Le Failda",
    img: "Bunny-Mamaria Le Failda.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
{
    name: "Mariel Nyun8181",
    img: "Bunny-Mariel Nyun8181.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
{
    name: "Savine Lu Dorud",
    img: "Bunny-Savine Lu Dorud.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
{
    name: "Usami Yuzuki",
    img: "Bunny-Usami Yuzuki.png",
    opts: {
      game: ["bunny"],
      mother: true
    }
  },
{
    name: "Heles Flamberge Rabia",
    img: "Bunny-Heles Flamberge Rabia.png",
    opts: {
      game: ["bunny"],
      side: true
    }
  },
{
    name: "Maginabeige Blume",
    img: "Bunny-Maginabeige Blume.png",
    opts: {
      game: ["bunny"],
      side: true
    }
  },
{
    name: "Chichino Kaori",
    img: "Bunny-Chichino Kaori.png",
    opts: {
      game: ["bunny"],
      side: true
    }
  },
];
