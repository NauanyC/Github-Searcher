import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      max-width: 160px;
      max-height: 160px;
      border-radius: 50%;
    }

    div {
      margin-left: 3rem;

      strong {
        font-size: 2.5rem;
        color: #3d3d4d;
      }
      p {
        font-size: 1.5rem;
        color: #737380;
        margin-top: 0.35rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.2rem;

    li {
      & + li {
        margin-left: 5rem;
      }

      strong {
        display: block;
        font-size: 2.2rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 0.35rem;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 2.5rem;

  li {
    background: #fff;
    border-radius: 0.3rem;
    width: 100%;
    padding: 1.5rem;
    list-style: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + li {
      margin-top: 1.3rem;
    }

    a {
      display: block;
      text-decoration: none;
      display: flex;
      align-items: center;

      div {
        margin: 0 1rem;
        flex: 1;

        strong {
          font-size: 1.3rem;
          color: #3d3d4d;
        }

        p {
          font-size: 1.1rem;
          color: #a8a8b3;
          margin-top: 0.25rem;
        }
      }

      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }
  }
`;
