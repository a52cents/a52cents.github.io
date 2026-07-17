export function getProjectPrimaryLink(project) {
  if (!Array.isArray(project?.links)) {
    return null;
  }

  return project.links.find((link) => link.type === 'site') ?? project.links[0] ?? null;
}
