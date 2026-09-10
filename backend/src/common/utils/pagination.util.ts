export function paginationSolver(page = 1, limit = 10) {
  const normalizedPage = !page || page <= 1 ? 0 : page - 1;
  const normalizedLimit = !limit || limit <= 0 ? 10 : limit;

  return {
    page: normalizedPage,
    limit: normalizedLimit,
    skip: normalizedPage * normalizedLimit,
  };
}

export function paginationGenerator(count = 0, page = 0, limit = 10) {
  return {
    totalCount: count,
    page: page + 1,
    countPerPage: limit,
    pageCount: limit > 0 ? Math.ceil(count / limit) : 0,
  };
}
