export const projects = [
  {
    name: 'Kadr',
    group: 'main',
    tag: 'SaaS vidéo',
    meta: 'Projet principal',
    description:
      'Plateforme SaaS de review vidéo collaborative qui centralise les projets, les médias et les échanges entre créateurs, monteurs et collaborateurs.',
    highlights: [
      'projets et espaces partagés',
      'upload et lecture vidéo',
      'commentaires timecodés et annotations',
      'suivi des versions et des décisions de montage',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'Cloudflare R2'],
    links: [
      { type: 'site', label: 'Voir le site', href: 'https://kadr.space' },
    ],
    image: 'projects/kadr-landing.png',
    imageAlt: 'Interface de la plateforme de review vidéo Kadr',
    imageWidth: 1440,
    imageHeight: 1000,
  },
  {
    name: 'Was It There?',
    group: 'main',
    tag: 'Jeu 3D navigateur',
    meta: 'Projet en développement',
    description:
      'Jeu d’observation 3D dans lequel le joueur mémorise des pièces, traverse une extinction puis identifie les objets qui ont changé pour progresser dans une maison qui reconstruit mal ses souvenirs.',
    highlights: [
      'parcours de quatre salles 3D connectées',
      'anomalies déterministes à observer et signaler',
      'modes narratif et contre-la-montre',
      'collisions FPS et éditeur de niveaux intégré',
    ],
    stack: ['Three.js', 'TypeScript', 'Vite', 'WebGL', 'Vitest'],
    links: [
      {
        type: 'source',
        label: 'Code source',
        href: 'https://github.com/a52cents/was-it-there',
      },
    ],
    image: 'projects/wasitthere.png',
    imageAlt: 'Pièce intérieure du jeu d’observation 3D Was It There?',
    imageWidth: 714,
    imageHeight: 698,
  },
  {
    name: 'SkyQuest',
    group: 'main',
    tag: 'PWA astronomie',
    meta: 'Projet expérimental',
    description:
      'PWA mobile-first qui recommande des observations selon la position, l’heure, la météo et des calculs astronomiques locaux, puis guide vers les cibles retenues.',
    highlights: [
      'quêtes adaptées au ciel estimé',
      'calculs astronomiques locaux',
      'guidage caméra 2D avec modes dégradés',
      'journal et progression stockés localement',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'astronomy-engine', 'Open-Meteo', 'PWA'],
    links: [
      {
        type: 'site',
        label: 'Voir le site',
        href: 'https://sky-quest-psi.vercel.app',
      },
      {
        type: 'source',
        label: 'Code source',
        href: 'https://github.com/a52cents/SkyQuest',
      },
    ],
    image: 'projects/skyquest-landing.png',
    imageAlt: 'Page d’accueil nocturne de l’application d’astronomie SkyQuest',
    imageWidth: 1440,
    imageHeight: 1000,
  },
  {
    name: 'Okaiana Shop CBD',
    group: 'main',
    tag: 'WordPress e-commerce',
    meta: 'Site e-commerce',
    description:
      'Boutique WordPress dédiée à un catalogue de produits CBD, avec une vitrine éditoriale et un parcours d’achat en ligne adapté aux écrans mobiles.',
    highlights: [
      'catalogue organisé par catégories',
      'fiches produits et panier',
      'parcours d’achat en ligne',
      'interface responsive',
    ],
    stack: ['WordPress', 'WooCommerce', 'E-commerce'],
    links: [
      {
        type: 'site',
        label: 'Voir le site',
        href: 'https://okaianashopcbd.fr',
      },
    ],
    image: 'projects/okaiana-landing.png',
    imageAlt: 'Page d’accueil de la boutique en ligne Okaiana Shop CBD',
    imageWidth: 289,
    imageHeight: 209,
  },
  {
    name: 'SimGame',
    group: 'lab',
    tag: 'Creative Coding',
    meta: 'Lab interactif',
    description:
      'Exploration procédurale qui transforme une seed en carte de sept biomes, puis répartit les ressources selon le relief généré par bruit de Perlin.',
    highlights: [
      'génération procédurale par seed',
      'biomes et ressources dynamiques',
      'navigation avec zoom et déplacement',
      'expérience interactive responsive',
    ],
    stack: ['React', 'Vite', 'p5.js', 'JavaScript', 'Perlin Noise'],
    links: [
      {
        type: 'site',
        label: 'Voir le site',
        href: 'https://a52cents.github.io/SimGame/',
      },
      {
        type: 'source',
        label: 'Code source',
        href: 'https://github.com/a52cents/SimGame',
      },
    ],
    image: 'projects/simgame-landing.webp',
    imageAlt: 'Carte procédurale composée de biomes et de ressources dans SimGame',
    imageWidth: 1600,
    imageHeight: 900,
  },
  {
    name: 'Orbital Lab',
    group: 'lab',
    tag: 'Simulation physique',
    meta: 'Lab interactif',
    description:
      'Simulation gravitationnelle interactive fondée sur un modèle central simplifié pour générer et observer des systèmes planétaires stables ou chaotiques.',
    highlights: [
      'génération de systèmes planétaires',
      'contrôle de la vitesse et de la stabilité',
      'trajectoires orbitales dynamiques',
      'sélection et inspection des planètes',
    ],
    stack: ['JavaScript', 'p5.js', 'Canvas', 'GitHub Pages'],
    links: [
      {
        type: 'site',
        label: 'Voir le site',
        href: 'https://a52cents.github.io/Systeme-Solaire/',
      },
      {
        type: 'source',
        label: 'Code source',
        href: 'https://github.com/a52cents/Systeme-Solaire',
      },
    ],
    image: 'projects/orbital-lab-landing.webp',
    imageAlt: 'Système planétaire et contrôles de simulation dans Orbital Lab',
    imageWidth: 1600,
    imageHeight: 900,
  },
];
