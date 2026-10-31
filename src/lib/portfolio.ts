// Real Tótem work: websites built by the agency and brands whose social
// media it runs. Every section that shows projects or clients reads from here.

export type WebProject = {
  category: string;
  image: string;
  location: string;
  name: string;
  slug: string;
  summary: string;
  url: string;
};

export type SocialClient = {
  avatar: string;
  category: string;
  handle: string;
  image: string;
  name: string;
  slug: string;
  summary: string;
  url: string;
};

const webImage = (slug: string) => `/images/portfolio/web/${slug}.jpg`;
const socialImage = (slug: string) => `/images/portfolio/redes/${slug}.jpg`;
const socialAvatar = (slug: string) => `/images/portfolio/redes/${slug}-avatar.jpg`;

export const webProjects = {
  transcity: {
    category: "Plataforma de reservas",
    image: webImage("transcitynorwalk"),
    location: "Norwalk, Connecticut",
    name: "TransCity Norwalk",
    slug: "transcitynorwalk",
    summary:
      "Transporte privado a los aeropuertos de Nueva York con reservas en línea, rutas y tarifas en el mismo sitio.",
    url: "https://transcitynorwalk.com",
  },
  dumbo: {
    category: "Plataforma de reservas",
    image: webImage("dumbotravelluxury"),
    location: "Nueva York y Nueva Jersey",
    name: "Dumbo Travel Luxury",
    slug: "dumbotravelluxury",
    summary:
      "Servicio de chofer privado de alta gama con reserva de viajes al aeropuerto, corporativos y eventos.",
    url: "https://dumbotravelluxury.com",
  },
  aprendiendoJuntos: {
    category: "Sitio web y SEO local",
    image: webImage("aprendiendojuntos"),
    location: "Loja",
    name: "Aprendiendo Juntos",
    slug: "aprendiendojuntos",
    summary:
      "Centro neuropsicopedagógico: programas, proceso de evaluación y agenda directa por WhatsApp.",
    url: "https://www.aprendiendojuntos.ec",
  },
  lomasVision: {
    category: "One page",
    image: webImage("lomasvision"),
    location: "Loja",
    name: "Lomas Visión",
    slug: "lomasvision",
    summary:
      "Oftalmólogos en Loja: servicios, especialistas, preguntas frecuentes y agenda de citas en una sola página.",
    url: "https://lomasvision.com",
  },
  drLoyola: {
    category: "Sitio web",
    image: webImage("drluisleopoldoloyola"),
    location: "Loja y Zamora",
    name: "Dr. Leopoldo Loyola",
    slug: "drluisleopoldoloyola",
    summary:
      "Cirugía plástica, reconstructiva y estética: procedimientos explicados y contacto directo con el consultorio.",
    url: "https://drluisleopoldoloyola.com",
  },
  dermatologika: {
    category: "Sitio web",
    image: webImage("fundaciondermatologika"),
    location: "Sur del Ecuador",
    name: "Fundación Dermatológika",
    slug: "fundaciondermatologika",
    summary:
      "Fundación social y dermatológica: salud, educación y centros de desarrollo infantil para comunidades vulnerables.",
    url: "https://fundaciondermatologika.org",
  },
  cordillera: {
    category: "Sitio institucional",
    image: webImage("cordilleraloja"),
    location: "Loja",
    name: "Unidad Educativa Cordillera",
    slug: "cordilleraloja",
    summary:
      "Sitio institucional con oferta académica, servicios y solicitud de cupos para el año lectivo.",
    url: "https://cordilleraloja.edu.ec",
  },
  acunar: {
    category: "E-learning",
    image: webImage("centroacunar"),
    location: "Loja",
    name: "Centro Acunar",
    slug: "centroacunar",
    summary:
      "Acompañamiento a la maternidad y paternidad, con cursos y talleres en línea.",
    url: "https://centroacunar.com",
  },
  paolaBienstar: {
    category: "E-learning",
    image: webImage("paolabienstar"),
    location: "Loja",
    name: "Paola BienStar",
    slug: "paolabienstar",
    summary:
      "Wellness coach: programas de nutrición y manejo del estrés con productos y cursos en línea.",
    url: "https://paolabienstar.com",
  },
  rumicucho: {
    category: "One page",
    image: webImage("rumicuchocraftbrews"),
    location: "Quito",
    name: "Rumicucho Craft Brews",
    slug: "rumicuchocraftbrews",
    summary:
      "Cerveza artesanal inspirada en la cultura inca y los volcanes andinos, contada en una sola página.",
    url: "https://rumicuchocraftbrews.com",
  },
  alivinatu: {
    category: "Sitio web",
    image: webImage("alivinatu"),
    location: "Vilcabamba",
    name: "Alivinatu",
    slug: "alivinatu",
    summary:
      "Hospedaje, spa y alimentos naturales en Vilcabamba reunidos en un solo sitio.",
    url: "https://alivinatu.com",
  },
  proOrganizer: {
    category: "Sitio web",
    image: webImage("proorganizer"),
    location: "Machala y Guayaquil",
    name: "Pro Organizer",
    slug: "proorganizer",
    summary:
      "Organización profesional de espacios: servicios, asesorías y tienda en línea.",
    url: "https://proorganizer.com.ec",
  },
  mujeresInquebrantables: {
    category: "Sitio web",
    image: webImage("mujeresinquebrantables"),
    location: "Ecuador",
    name: "Mujeres Inquebrantables",
    slug: "mujeresinquebrantables",
    summary: "Fundación que impulsa el emprendimiento femenino con eventos y formación.",
    url: "https://mujeresinquebrantables.org",
  },
  soy: {
    category: "Sitio web",
    image: webImage("soyskinbodynutrition"),
    location: "Den Helder, Países Bajos",
    name: "SOY Skin Body Nutrition",
    slug: "soyskinbodynutrition",
    summary: "Estética y mejora personalizada de la piel, con tratamientos y agenda en línea.",
    url: "https://soyskinbodynutrition.com",
  },
  smileDesign: {
    category: "Sitio web",
    image: webImage("cbsaludybienestar"),
    location: "Buenos Aires",
    name: "Smile Design Center",
    slug: "cbsaludybienestar",
    summary: "Clínica odontológica de rehabilitación oral y estética.",
    url: "https://cbsaludybienestar.com",
  },
  tsapau: {
    category: "Catálogo",
    image: webImage("tsapau"),
    location: "Morona Santiago",
    name: "Asociación Tsapau",
    slug: "tsapau",
    summary: "Asociación agropecuaria shuar con catálogo de productos amazónicos.",
    url: "https://tsapau.com",
  },
} satisfies Record<string, WebProject>;

export const socialClients = {
  silvermax: {
    avatar: socialAvatar("silvermax"),
    category: "Estética automotriz",
    handle: "silvermax.ec",
    image: socialImage("silvermax"),
    name: "Silvermax",
    slug: "silvermax",
    summary: "Blindaje, láminas de seguridad, wrap y detailing para vehículos.",
    url: "https://www.instagram.com/silvermax.ec/",
  },
  europeek: {
    avatar: socialAvatar("europeek"),
    category: "Academia de inglés",
    handle: "europeek.inglesloja",
    image: socialImage("europeek"),
    name: "EUROpeek",
    slug: "europeek",
    summary: "Academia de inglés en Loja con certificación de niveles A1 a B2.",
    url: "https://www.instagram.com/europeek.inglesloja/",
  },
  opticaLoja: {
    avatar: socialAvatar("optica-loja"),
    category: "Lentes y salud visual",
    handle: "optica.loja",
    image: socialImage("optica-loja"),
    name: "Óptica Loja",
    slug: "optica-loja",
    summary: "Examen visual, diagnóstico oftalmológico, cirugía ocular y lentes.",
    url: "https://www.instagram.com/optica.loja/",
  },
  draGabrielaSanchez: {
    avatar: socialAvatar("dra-gabriela-sanchez"),
    category: "Endocrinología",
    handle: "endocrinodragabrielasanchez",
    image: socialImage("dra-gabriela-sanchez"),
    name: "Dra. Gabriela Sánchez",
    slug: "dra-gabriela-sanchez",
    summary: "Hormonas, tiroides, osteoporosis y diabetes.",
    url: "https://www.instagram.com/endocrinodragabrielasanchez/",
  },
  draKatherineMontalvan: {
    avatar: socialAvatar("dra-katherine-montalvan"),
    category: "Podiatría",
    handle: "dra.katherinemontalvan",
    image: socialImage("dra-katherine-montalvan"),
    name: "Dra. Katherine Montalván",
    slug: "dra-katherine-montalvan",
    summary: "Patologías del pie: uñeros, pie diabético, hongos y plantillas.",
    url: "https://www.instagram.com/dra.katherinemontalvan/",
  },
  audisens: {
    avatar: socialAvatar("audisens"),
    category: "Audición y lenguaje",
    handle: "audicionylenguaje_audisens",
    image: socialImage("audisens"),
    name: "Audisens",
    slug: "audisens",
    summary: "Audiometrías, audífonos, terapia de lenguaje y psicopedagogía.",
    url: "https://www.instagram.com/audicionylenguaje_audisens/",
  },
  draClaudiaMunoz: {
    avatar: socialAvatar("dra-claudia-munoz"),
    category: "Endocrinología",
    handle: "dra_claudiamunoz",
    image: socialImage("dra-claudia-munoz"),
    name: "Dra. Claudia Muñoz",
    slug: "dra-claudia-munoz",
    summary: "Hormonas, metabolismo y peso para mujeres de 35 años en adelante.",
    url: "https://www.instagram.com/dra_claudiamunoz/",
  },
  draDianaAuquilla: {
    avatar: socialAvatar("dra-diana-auquilla"),
    category: "Pediatría",
    handle: "pediatra.diana.auquilla",
    image: socialImage("dra-diana-auquilla"),
    name: "Dra. Diana Auquilla",
    slug: "dra-diana-auquilla",
    summary: "Pediatría integral y lactancia en Loja.",
    url: "https://www.instagram.com/pediatra.diana.auquilla/",
  },
} satisfies Record<string, SocialClient>;

export const heroReels = [
  {
    client: socialClients.opticaLoja,
    poster: "/images/hero/hero-optica-loja.jpg",
    src: "/videos/hero-optica-loja.mp4",
  },
  {
    client: socialClients.draDianaAuquilla,
    poster: "/images/hero/hero-pediatra-diana-auquilla.jpg",
    src: "/videos/hero-pediatra-diana-auquilla.mp4",
  },
  {
    client: socialClients.silvermax,
    poster: "/images/hero/hero-silvermax.jpg",
    src: "/videos/hero-silvermax.mp4",
  },
] as const;

export const allClientNames = [
  ...Object.values(webProjects).map((project) => project.name),
  ...Object.values(socialClients).map((client) => client.name),
];
