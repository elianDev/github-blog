import { useForm } from "react-hook-form";
import { PostType } from "../..";
import { InputContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchPostsSchema = z.object({
  query: z.string(),
});

type SearchPostsInput = z.infer<typeof searchPostsSchema>;

interface InputProps {
  publications: PostType[];
  getPosts: (query?: string) => void;
}

const Input = ({ publications, getPosts }: InputProps) => {
  const { register, handleSubmit } = useForm<SearchPostsInput>({
    resolver: zodResolver(searchPostsSchema),
  });

  function handleSearchPosts(data: SearchPostsInput) {
    getPosts(data.query);
  }

  return (
    <InputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <strong>Publicações</strong>
        <span>{publications.length} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </InputContainer>
  );
};

export default Input;
