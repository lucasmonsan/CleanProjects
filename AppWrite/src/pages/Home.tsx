import { FC } from "react";
import { PostForm } from "../components/PostForm";
interface HomeProps {}

export const Home: FC<HomeProps> = (props) => {
  return (
    <main>
      <h1>Novo Post</h1>
      <PostForm />
    </main>
  );
};
