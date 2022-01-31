import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rosario:wght@300&display=swap');

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Rosario;
    background: #EFEFEF;
}

code {
    font-family: Rosario;
}
h2{
    margin:0px;
}
button:hover{
    border: 1px solid #0B868B;
    box-sizing: border-box;
    border-radius: 3px;
}

  .card-image {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover; 
  }
  .card-image-desc {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover; 
  }
  .card-title {
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 30px;
    padding-left: 25px;
    padding-right: 35px;
    line-height: 1.25;
    font-size: 1.25rem;
    word-break: break-all;
  }
  
  .card-desc {
    font-size: 16px;
    padding-left: 25px;
    padding-right: 35px;
    margin-bottom: 30px;
    line-height: 1.2;
  }
  .btn{
    background: #f5f5f5;
    border-radius: 3px;
    border: none;
    font-size: 16px;
    line-height: 19px;
    color: #0b868b;
    padding: 13px 81px;
    bottom: 25px;
    box-sizing: border-box;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
}
`

export default GlobalStyles;