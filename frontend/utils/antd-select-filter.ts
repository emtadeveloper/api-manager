export const filterBySearchLabel = (
  input: string,
  option?: { label?: React.ReactNode },
) =>
  (option?.label ?? "").toString().toLowerCase().includes(input.toLowerCase());
