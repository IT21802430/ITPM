import React from "react";
import './LoginComponent.css'

function LoginComponent() {
  return (
    <form class="login-form" action="#" method="post">
      <h2>Login</h2>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginComponent;
