

export function getPageCount(total: number, limit: number): number {
  return Math.ceil(total / limit);
}
