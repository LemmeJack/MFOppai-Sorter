dataSetVersion = "2025-03-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Title",
    key: "title",
    tooltip: "Check this to restrict to game title.",
    checked: false,
    sub: [
      { name: "Mahou", key: "mahou", checked: true },
      { name: "EroApp", key: "eroapp", checked: true },
      { name: "Succubus", key: "succubus", checked: true },
      { name: "Maid", key: "maid", checked: true },
      { name: "Bunny", key: "bunny", checked: true },
    ]
  },
  {
    name: "Filter by Heroine Status",
    key: "status",
    tooltip: "Check this to restrict to the specific status of heroines.",
    checked: false,
    sub: [
      { name: "Main Heroines", key: "main", checked: true },
      { name: "Mother Heroines", key: "mother", checked: true },
      { name: "Side Heroines", key: "side", checked: true },
    ]
  },
];


dataSet[dataSetVersion].characterData = [
  {
    name: "Anastasia Mysterante",
    img: "Maid-Ana.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
  {
    name: "Arka Hellmare",
    img: "Maid-Arka.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
  {
   name: "Brynhildr Valhanna",
    img: "Maid-Bryn.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
  {
    name: "Dyzenia Dracour",
    img: "Maid-Dyze.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
  {
    name: "Eibel Haurisia",
    img: "Maid-Eibel.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
 {
    name: "Elizabeth Mysterante",
    img: "Maid-Elizabeth.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
 {
    name: "Elma Saventilla",
    img: "Maid-Elma.png",
    opts: {
      title: ["maid"],
      status: ["side"],
    },
  },
 {
    name: "Fáfnira Dracour",
    img: "Maid-Fafnira.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
 {
    name: "Fran Franchir",
    img: "Maid-Fran.png",
    opts: {
      title: ["maid"],
      status: ["side"],
    },
  },
 {
    name: "Kriemhild Valhanna",
    img: "Maid-Kriem.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
 {
    name: "Laurecia Lu Blanchette",
    img: "Maid-Laurecia.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
 {
    name: "Liliera Loveknot",
    img: "Maid-Lili.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
 {
    name: "Lixual Hellmare",
    img: "Maid-Lixual.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
 {
    name: "Lunalilia Loveknot",
    img: "Maid-Luna.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
 {
    name: "Myoudou Maasa",
    img: "Maid-Maasa.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
 {
    name: "Makina Lu Blanchette",
    img: "Maid-Makina.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
 {
    name: "Meena 1919",
    img: "Maid-Meena.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
{
    name: "Myoudou Mei",
    img: "Maid-Mei.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
{
    name: "MyunMyun Lafleur",
    img: "Maid-MyunMyun.png",
    opts: {
      title: ["maid"],
      status: ["main"],
    },
  },
{
    name: "NunNun Lafleur",
    img: "Nunnun.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
{
    name: "Parthia Ramsey",
    img: "Parthia.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
{
    name: "Saizel Haurisia",
    img: "Saizel.png",
    opts: {
      title: ["maid"],
      status: ["mother"],
    },
  },
];
