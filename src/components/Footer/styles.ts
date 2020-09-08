import styled, { css } from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 38px;
  margin-left: 38px;

  height: 277px;
  width: calc(100vw - 85px);

  font-size: 1.6rem;

  border: 2px solid black;
  margin-top: 93px;

  h1 {
    font-weight: normal;
    font-size: 4.2rem;
  }

  .areas {
  }

  .about {
  }

  .newsletter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    input {
      height: 40px;
      margin-top: 29px;
      width: 100%;
    }

    button {
      margin-top: 16px;
      width: 136px;
      padding: 6px 8px;
      background: var(--green);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid black;

      img {
        margin-left: 16px;
      }
    }
  }

  .social {
    display: flex;
    flex-direction: column;

    div {
      display: flex; 
      flex-direction: row;
      align-items: center;
    
      span {
        display: flex; 
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-top: 29px;
        width: 40px;
        height: 40px;
        border: 2px solid black;
        background: var(--green);
      }
      
      span + span {
        margin-left: 16px;
      }
    }
  }
`;

const iconcss = css`
  width: 24px;
  height: 24px;
`
export const FaceIcon = styled(FaFacebookF)`
  ${iconcss}
`
export const TwitterIcon = styled(FaTwitter)`
  ${iconcss}
`
export const InstaIcon = styled(FaInstagram)`
  ${iconcss}
`