import React from "react";
import Quotes from "./Components/Quotes";
import styled from "styled-components";

const Container = styled.div`
  width: 1512px;
  height: 982px;
  position: relative;
  background: url("background2.gif") no-repeat center center;
  background-size: cover;
`;

const TextWrapper = styled.div`
  width: 519px;
  height: 115px;
  left: 508px;
  top: 341px;
  position: absolute;
`;

const SubText = styled.div`
  left: 116px;
  top: 49px;
  position: absolute;
  color: rgba(255, 252.88, 252.88, 0.6);
  font-size: 50px;
  font-family: "Jacques Francois";
  font-weight: 400;
  word-wrap: break-word;
`;

const MainText = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  color: black;
  font-size: 50px;
  font-family: "Jacques Francois";
  font-weight: 400;
  word-wrap: break-word;
`;

const InputWrapper = styled.div`
  width: 700px;
  height: 100px;
  left: 406px;
  top: 612px;
  position: absolute;
`;

const InputContainer = styled.div`
  width: 700px;
  height: 100px;
  left: 0;
  top: 0;
  position: absolute;
`;

const InputBackground = styled.div`
  width: 700px;
  height: 100px;
  left: 0;
  top: 0;
  position: absolute;
  background: rgba(217, 217, 217, 0.6);
  border-radius: 20px;
`;

const InputField = styled.div`
  width: 363.48px;
  height: 50.94px;
  left: 214.74px;
  top: 24.53px;
  position: absolute;
  background: white;
  border-radius: 20px;
`;

const InputLabel = styled.div`
  width: 215px;
  height: 31px;
  left: 288px;
  top: 34px;
  position: absolute;
  color: black;
  font-size: 25px;
  font-family: "Jacques Francois";
  font-weight: 400;
  word-wrap: break-word;
`;

const InputTitle = styled.div`
  width: 154px;
  height: 31px;
  left: 33px;
  top: 32px;
  position: absolute;
  color: black;
  font-size: 25px;
  font-family: "Jacques Francois";
  font-weight: 400;
  word-wrap: break-word;
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 48px;
  left: 605px;
  top: 26px;
  position: absolute;
`;

const IconBackground = styled.div`
  width: 64px;
  height: 48px;
  left: 0;
  top: 0;
  position: absolute;
  background: #fffefe;
  border-radius: 20px;
`;

const IconContent = styled.div`
  width: 40px;
  height: 40px;
  left: 12px;
  top: 5px;
  position: absolute;
`;

const IconLine = styled.div`
  width: 40px;
  height: 25px;
  left: 0;
  top: 7.5px;
  position: absolute;
  background: black;
`;

const QuoteText = styled.div`
  left: 526px;
  top: 867px;
  position: absolute;
  text-align: center;
  color: #f5f5f5;
  font-size: 20px;
  font-family: "Jacques Francois";
  font-weight: 400;
  word-wrap: break-word;
`;

const app = () => {
  return (
    <Container>
      <TextWrapper>
        <SubText>Makes Difference</SubText>
        <MainText>ONE DAY,</MainText>
      </TextWrapper>
      <InputWrapper>
        <InputContainer>
          <InputBackground />
          <InputField />
          <InputLabel>닉네임을 입력하세요</InputLabel>
          <InputTitle>Your Name?</InputTitle>
        </InputContainer>
        <IconWrapper>
          <IconBackground />
          <IconContent>
            <IconLine />
          </IconContent>
        </IconWrapper>
      </InputWrapper>
      <QuoteText>
        <Quotes />
      </QuoteText>
    </Container>
  );
};

export default app;
