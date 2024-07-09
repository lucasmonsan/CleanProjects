import { FC, FormEvent, useState } from "react";
import { account } from "../api/appwrite"; // Importe o cliente do AppWrite aqui
import { Main } from "../components/Containers";

interface LoginProps {}

export const Login: FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await account.createEmailPasswordSession(email, password);
      console.log("Login successful!", response);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => await account.deleteSessions();

  return (
    <Main>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </Main>
  );
};
