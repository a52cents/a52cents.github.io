export const projects = [
  {
    name: 'Kadr',
    tag: 'SaaS Platform',
    meta: 'Projet principal',
    description:
      'Plateforme SaaS de review vidéo collaborative pour créateurs et monteurs. Fonctionnalités : gestion de projets, upload vidéo, workspace de review, commentaires timecodés, annotations, versions et espaces collaborateurs.',
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase', 'Cloudflare R2'],
    links: [{ label: 'Voir le site', href: 'https://kadr.space' }],
    featured: true,
    visual: 'kadr',
  },
  {
    name: 'SkyQuest',
    tag: 'PWA Astro',
    meta: 'Projet expérimental',
    description:
      'Application PWA d’astronomie qui propose des quêtes d’observation selon la position, l’heure, la météo et les conditions du ciel.',
    stack: ['Next.js', 'React', 'TypeScript', 'astronomy-engine', 'Tailwind'],
    links: [{ label: 'Voir le site', href: 'https://sky-quest-psi.vercel.app' }],
    visual: 'skyquest',
  },
  {
    name: 'BissapMaker',
    tag: 'Firebase',
    meta: 'Projet personnel',
    description: 'Interface CRUD avec gestion de données Firebase.',
    stack: ['Firebase', 'CRUD', 'Interface web'],
    links: [{ label: 'Voir le site', href: 'a52cents.github.io/BissapMaker' }],
    visual: 'bissapmaker',
  },
];
