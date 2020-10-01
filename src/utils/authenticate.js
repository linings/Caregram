const authenticate = async (url, body, onSuccess, onFailure, setLoading) => {
  const { username, password, rePassword } = body;

  if (rePassword) {
    if (password !== rePassword) {
      console.log(`Passwords do not match!`);
      alert(`Passwords do not match!`);
      return;
    }
    if (password.length < 6) {
      console.log(`Password must be more than 6 digits!`);
      alert(`Password must be more than 6 digits!`);
      return;
    }
  }

  const promise = rePassword
    ? await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    : await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          login: username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

  const response = await promise.json();
  document.cookie = `x-auth-token=${response.ownerId}`;

  if (response.email) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('profilePicture', response.profilePicture);
    onSuccess({
      username: response.email,
      password,
      id: response.objectId,
      loggedIn: true,
    });
  } else {
    onFailure();
  }
  if (setLoading) {
    setLoading(false);
  }
};
export default authenticate;
