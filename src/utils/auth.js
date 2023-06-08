
export async function signUp(username, password) {
    const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        body: {
            username,
            password,
        }
      });
    
      if (response.status !== 201) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    
      const { token } = response.data;
      localStorage.setItem('token', token);
      return token;
}

export async function login(username, password) {
    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: {
            username,
            password,
        }
      });
    
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    
      const { token } = response.data;
      localStorage.setItem('token', token);
      return token;
}

export function logout() {
    localStorage.removeItem('token');
}

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
}

export async function getLoggedInUser() {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const response = await fetch('http://localhost:3000/api/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}
