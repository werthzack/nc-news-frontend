export function getPaginationPages(currentPage, totalPages) {
  const pages = [];

  // Always show first page
  pages.push(1);

  // Show left ellipsis
  if (currentPage > 3) {
    pages.push("...");
  }

  // Middle pages (current -1, current, current +1)
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 1 && i < totalPages) {
      pages.push(i);
    }
  }

  // Show right ellipsis
  if (currentPage < totalPages - 2) {
    pages.push("...");
  }

  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}
