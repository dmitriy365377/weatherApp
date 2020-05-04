const defaultUrl = "https://7b3u2.sse.codesandbox.io/"

export const graphql = async (query, variables, url = defaultUrl) => {
  const body = JSON.stringify({ query, variables });
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };

  try {
    const resp = await fetch(url, options);
    return resp.json();
  } catch (error) {
    return { error }
  }
};