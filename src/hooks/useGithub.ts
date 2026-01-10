import { useState } from "react";
import axios from "axios";
import type { GithubUser, UserRepo } from "../types";

export const useGithub = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [userRepo, setUserRepo] = useState<UserRepo[] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const searchUser = async (username: string) => {
    setIsLoading(true);
    setError(null);
    setUser(null);
    setUserRepo(null);

    try {
      const responseUser = await axios.get<GithubUser>(
        `https://api.github.com/users/${username}`
      );
      const responseUserRepo = await axios.get<UserRepo[]>(
        `https://api.github.com/users/${username}/repos`
      );

      setUser(responseUser.data);
      setUserRepo(responseUserRepo.data);
    } catch (err: any) {
      setError("Không tìm thấy User này hoặc lỗi mạng!");
    } finally {
      setIsLoading(false);
    }
  };

  return { user, userRepo, isLoading, error, searchUser };
};
