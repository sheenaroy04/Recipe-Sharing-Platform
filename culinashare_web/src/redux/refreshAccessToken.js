const backendUrl = process.env.REACT_APP_BASE_API_URL;

export async function refreshAccessToken() {
    // Example implementation
    try {
      const response = await fetch(`${backendUrl}/customers/token/refresh/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh: localStorage.getItem('refresh_token') })
      });
  
      if (!response.ok) {
        console.error('Failed to refresh token:', response.status);
        return false;
      }
  
      const responseData = await response.json();
      localStorage.setItem('access_token', responseData.access);
      localStorage.setItem('refresh_token', responseData.refresh);
      return true;
    } catch (error) {
      console.error('Error refreshing access token:', error);
      return false;
    }
  }