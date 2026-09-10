export function isBoolean(value: unknown) {
  return ["false", false, "true", true].includes(value as never);
}

export function toBoolean(value: unknown) {
  return [true, "true"].includes(value as never)
    ? true
    : [false, "false"].includes(value as never)
      ? false
      : value;
}
