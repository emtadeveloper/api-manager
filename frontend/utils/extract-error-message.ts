export function extractErrorMessage(
  result: unknown,
  fallback = "خطایی رخ داد",
): string {
  if (!result || typeof result !== "object") return fallback;

  const r = result as Record<string, unknown>;

  if (typeof r.error === "string" && r.error) return r.error;

  if (Array.isArray(r.errors)) {
    const messages = r.errors
      .map((e) =>
        typeof e === "string" ? e : (e as { message?: string })?.message,
      )
      .filter(Boolean);

    if (messages.length) return messages.join(" - ");
  }

  if (typeof r.message === "string" && r.message) return r.message;

  return fallback;
}
