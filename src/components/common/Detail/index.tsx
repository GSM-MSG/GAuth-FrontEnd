import React from 'react';
import * as S from './style';
import * as SVG from '../../../../public/svg';

function Detail({ discord, email }: DetailProps) {
  return (
    <S.DetailWrapper>
      <h1>문의</h1>
      <div>
        <SVG.Discord />
        <p>{discord}</p>
      </div>
      <div>
        <SVG.Mail2 />
        <p>{email}</p>
      </div>
    </S.DetailWrapper>
  );
}

interface DetailProps {
  discord?: string;
  email?: string;
}

Detail.defaultProps = {
  discord: 'happytaeyoon',
  email: 'matsougeum@gmail.com',
};

export default Detail;
