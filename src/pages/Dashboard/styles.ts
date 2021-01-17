import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  margin-top: 3rem;
  line-height: 3.5rem;
  max-width: 30rem;
`;

export const Form = styled.form<FormProps>`
  margin-top: 3.2rem;
  max-width: 44rem;
  display: flex;

  input {
    flex: 1;
    height: 4.5rem;
    padding: 0 1.5rem;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 0.3rem 0 0 0.3rem;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 14rem;
    height: 4.5rem;
    background: #04d361;
    border-radius: 0rem 0.3rem 0.3rem 0rem;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 2.5rem;
  max-width: 44rem;

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

      img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }

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

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 1rem;
`;
