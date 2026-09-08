const apiConfig = (customHeaders = {}, nextConfig = {}) => ({
  headers: {
    'Content-Type': 'application/json',
    ...customHeaders
  },
  nextConfig: {
    ...nextConfig
  }
});

export const request = async (url, config) => {
  try {
    const { headers, nextConfig } = apiConfig(
      config.headers,
      config.nextConfig
    );

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const requestUrl = /^https?:\/\//i.test(url) ? url : `${baseUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;

    const response = await fetch(requestUrl, {
      ...nextConfig,
      method: config.method,
      headers,
      body: config.body,
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text) return null;

    return JSON.parse(text);

  } catch (error) {
    console.warn(`Fetch ${config.method} Error:`, error);
    throw error;
  }
};


export const get = (url, params = {}, headers, nextConfig) => {
  const queryString = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&');
  return request(`${url}?${queryString}`, {
    method: 'GET',
    headers,
    nextConfig
  });
};

export const post = (url, data = {}, headers, nextConfig) => {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
    nextConfig
  });
};

export const put = (url, data = {}, headers, nextConfig) => {
  return request(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers,
    nextConfig
  });
};

export const patch = (url, data = {}, headers, nextConfig) => {
  return request(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers,
    nextConfig
  });
};
