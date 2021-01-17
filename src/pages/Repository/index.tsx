import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Header, RepositoryInfo, Issues } from "./styles";
import logoImage from "../../assets/logo.svg";
import api from "../../services/api";

/* eslint-disable camelcase */
interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repositoryRes, issuesRes] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(repositoryRes.data);
      setIssues(issuesRes.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <div className="Repository">
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={22} />
          Voltar
        </Link>
      </Header>
      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              alt={repository.owner.login}
              src={repository.owner.avatar_url}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
          <ul />
        </RepositoryInfo>
      ) : (
        <div>
          <p>Carregando...</p>
        </div>
      )}
      <Issues>
        <ul>
          {issues.map((issue) => (
            <li key={issue.id}>
              <a href={issue.html_url}>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>
                <FiChevronRight size={20} />
              </a>
            </li>
          ))}
        </ul>
      </Issues>
    </div>
  );
};

export default Repository;
