import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  databases,
  storage,
  bucketId,
  projectId,
  databaseId,
  collectionId,
} from "../api/appwrite";
import { ID } from "appwrite"; // Importe o ID do AppWrite corretamente

interface PostFormProps {}

export const PostForm: FC<PostFormProps> = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState<string>("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
    setUploadProgress(0); // Resetar o progresso ao selecionar um novo arquivo
  };

  const addAuthor = () => {
    if (author && !authors.includes(author)) {
      setAuthors([...authors, author]);
      setAuthor("");
    }
  };

  const removeAuthor = (authorToRemove: string) => {
    setAuthors(authors.filter((auth) => auth !== authorToRemove));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!bucketId || !projectId || !databaseId || !collectionId) {
        throw new Error("Missing required environment variables");
      }

      let imageUrl = "";

      if (image) {
        const response = await storage.createFile(bucketId, ID.unique(), image);

        // Verifique se o ID do arquivo foi recebido corretamente
        if (!response.$id) {
          throw new Error("File ID not received from AppWrite.");
        }

        imageUrl = `https://cloud.appwrite.io/v1/storage/files/${response.$id}/view?project=${projectId}`;
      }

      // Criar o post com a URL da imagem (após o upload)
      const response = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        {
          title,
          content,
          authors, // Enviar o array de autores
          imageUrl,
          created_at: new Date().toISOString(),
        }
      );

      console.log("Post created:", response);

      setTitle("");
      setContent("");
      setAuthors([]);
      setImage(null);
      setUploadProgress(0);
      setError(null);
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "50rem",
      }}
    >
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <div>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="button" onClick={addAuthor}>
          Add Author
        </button>
      </div>
      <ul>
        {authors.map((auth) => (
          <li key={auth}>
            {auth} <button onClick={() => removeAuthor(auth)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="file" onChange={handleImageChange} />
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      <button type="submit">Create Post</button>
    </form>
  );
};
