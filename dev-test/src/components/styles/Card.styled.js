import styled from "styled-components";

export const CardStyled = styled.div`
    margin-top: 81px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0px auto;
    margin-top: 50px;
    margin-bottom: 81px;
`;
export const Button = styled.button`
    background: #f5f5f5;
    border-radius: 3px;
    border: none;
    font-size: 16px;
    line-height: 19px;
    color: #0b868b;
    padding: 13px 81px;
    width: 85%;
    position: absolute;
    bottom: 25px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
`;
export const ContentBlock = styled.div`
    width: 33.3%;
    height: 388px;
    background: #ffffff;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    padding: 27px;
    position: relative;
    flex: 300px;
    margin: 20px;
`;
export const Input = styled.input`
    display: block;
    width: calc(100% - 27px);
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;
export const Form = styled.form`
    margin-bottom: 15px;
`;
export const Lable = styled.label`
    margin-top: 15px;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
`;
