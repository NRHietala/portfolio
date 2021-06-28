import styled from "styled-components";

export const ContactContainer = styled.section`
  color: ${props => props.theme.subText};
  background: ${props => props.theme.bgColor};

  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 24px;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${`'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${`'col2' 'col1'`};
    align-content: center;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0px 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    height: 310px;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 15px;
  padding: 0px 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 30px;
`;

export const TopLine = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 2.5px;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin: 10px 0px;
  padding: 5px;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 700px;
  max-height: 450px;
`;

///////////////// ContactForm Style Elements /////////////////

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 4px;
  max-width: 450px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 15px;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
  min-width: 320px;

  @media screen and (max-width: 480px) {
    min-width: 200px;
  }
`;

export const FormInputLabel = styled.label`
  color: ${props => props.theme.primary};
  font-size: 20px;
  padding-bottom: 4px;
  width: 250px;
  text-align: center;
`;

export const FormInput = styled.input`
  text-align: center;
  width: 100%;
  max-width: 350px;
  padding: 5px;
  border-radius: 15px;
`;

export const FormMessageInput = styled.textarea`
  width: 100%;
  padding: 5px;
  height: 100px;
  border-radius: 15px;
  resize: none;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Btn = styled.button`
  border-radius: 50px;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.subText};
  }
`;
