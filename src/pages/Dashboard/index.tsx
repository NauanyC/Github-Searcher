import React, { useState, FormEvent, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Title, Form, Repositories, Error } from "./styles";
import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
/* eslint-disable camelcase */

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC /* <DashboardProps> */ = () => {
  const [repoQuery, setRepoQuery] = useState("");
  const [inputError, setInputError] = useState("");

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories",
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAppRepositories(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repoQuery) {
      setInputError("Digite autor/nome do repositóro");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${repoQuery}`);
      setRepositories([...repositories, response.data]);
      setRepoQuery("");
      setInputError("");
    } catch (error) {
      setInputError("Erro na busca por esse repositóro");
    }
  }

  return (
    <div className="Dashboard">
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAppRepositories} hasError={!!inputError}>
        <input
          placeholder="Digite o nome do repositório"
          value={repoQuery}
          onChange={(e) => setRepoQuery(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError.length > 0 && <Error> {inputError}</Error>}
      <Repositories>
        <ul>
          {repositories.map((repository) => (
            <li key={repository.full_name}>
              <Link to={`/repositories/${repository.full_name}`}>
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />
                <div>
                  <strong>{repository.full_name}</strong>
                  <p>{repository.description}</p>
                </div>
                <FiChevronRight size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </Repositories>
    </div>
  );
};

export default Dashboard;
