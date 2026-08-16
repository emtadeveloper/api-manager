export function getChangedFieldPaths(
    changedValues: Record<string, unknown>,
    prefix: string[] = [],
  ): string[][] {
    let paths: string[][] = [];

    for (const key in changedValues) {
      const value = changedValues[key];
      const path = [...prefix, key];

      const isPlainObject =
        typeof value === "object" && value !== null && !Array.isArray(value);

      if (isPlainObject) {
        paths = paths.concat(
          getChangedFieldPaths(value as Record<string, unknown>, path),
        );
      } else {
        paths.push(path);
      }
    }

    return paths;
  }