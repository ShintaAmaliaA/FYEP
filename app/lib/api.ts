export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  const url = `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

  const res = await fetch(url, {
    ...options,
    cache: options?.cache || "no-store",
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch ${endpoint}, status: ${res.status}`;

    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorMessage;
    } catch {}
    
    throw new Error(errorMessage);
  }

  return res.json();
}
