/**
 * Normalise le texte en supprimant les accents et en convertissant en minuscules
 * Utilisé pour la recherche insensible à la casse et aux accents
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
