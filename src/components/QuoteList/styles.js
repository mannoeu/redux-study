import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));

  grid-gap: 20px;
  justify-content: center;

  font-family: sans-serif;
`;

export const Card = styled.div`
  width: 100%;
  max-height: 240px;
  height: 100%;
  overflow: hidden;
  position: relative;

  background: #302563;
  padding: 20px;
  border-radius: 5px;

  h3 {
    color: #ffffff;
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    line-height: 20px;
    font-size: 14px;
    color: #dbdbdb;
    text-align: justify;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto 20px;

  background: #302563;
  padding: 20px;
  border-radius: 5px;
  color: #fff;

  fieldset {
    border: none;
    legend {
      font-size: 28px;
      margin-bottom: 20px;
      font-family: sans-serif;
      font-weight: bold;
    }
  }
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  label {
    font-family: sans-serif;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    background: #493f75;
    border: 1px solid #493f75;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    outline: none;

    ::placeholder {
      color: #dbdbdb;
    }

    &:focus {
      box-shadow: 0px 0px 5px rgba(73, 63, 117, 0.6);
    }
  }
`;

export const Button = styled.button`
  margin-top: 25px;
  width: 100%;
  background: #493f75;
  border: 1px solid #493f75;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  outline: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: #3e3175;
    border: 1px solid #3e3175;
  }
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  background: #1c163a;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: grid;
  place-items: center;
  transition: background 0.2s ease-out;

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: #fff;
    transform-origin: center;
    transform: rotate(-45deg);
    transition: transform 0.2s ease-out;
  }
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: #fff;
    transform-origin: center;
    transform: rotate(45deg);
    transition: transform 0.2s ease-out;
  }

  &:hover:after {
    transform: rotate(180deg);
  }
  &:hover:before {
    transform: rotate(180deg);
  }
  &:hover {
    background: #f9425c;
  }
`;
