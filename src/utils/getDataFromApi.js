
export const getDataFromApi = async (prompt) => {
  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer YOUR_API_KEY', // Replace securely
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar-pro',
        messages: [{ role: 'user', content: prompt }],
        response_format: 'json',
      }),
    });

    if (!response.ok) throw new Error('HTTP error: ' + response.status);
    return await response.json();
  } catch (err) {
    console.error('API error:', err.message);
    return { error: err.message };
  }
};
