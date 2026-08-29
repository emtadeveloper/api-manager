export interface ActionFailure {
  success: false;
  error?: string;
  errors?: unknown;
}

export function extractErrorMessage(result: ActionFailure, fallback = "خطایی رخ داد"): string {
  if (result.error) return result.error;

  if (Array.isArray(result.errors)) {
    const messages = result.errors
      .map((issue) => (issue && typeof issue === "object" && "message" in issue ? String(issue.message) : null))
      .filter(Boolean);

    if (messages.length > 0) return messages.join("، ");
  }

  if (typeof result.errors === "string") return result.errors;

  return fallback;
}
