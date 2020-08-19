
import React from 'react';
import styled from 'styled-components';
import { device } from '../css/device';
import { color } from "../css/color";

const TitleDiv = styled.div`
    font-weight:bold;
    background-color:${color.lightGray};
    width:100%;
    & span{
        color:${color.lightGray};
        padding-left: 1rem;
      }
    @media ${device.laptop} {      
      width:30%;
    }
`
interface OwnProps {
    isLast: boolean;
    title: string;
    isMandatory: boolean;
}
const FormTitle: React.SFC<OwnProps> = ({ isLast,title,isMandatory })=> {
    return (
        isMandatory ? (
            isLast ?
                <TitleDiv className="last">{title}<span>必須</span></TitleDiv> :
                <TitleDiv>{title}<span>必須</span></TitleDiv>) :
            (isLast ?
                <TitleDiv className="last">{title}</TitleDiv> : <TitleDiv>{title}</TitleDiv>) 
  );
}

export default FormTitle;

