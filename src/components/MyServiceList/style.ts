import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ClientListType } from '../../types';

export const Layer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
`;

export const Delete = styled.p`
  font-size: 16px;
  color: #929292;
  cursor: pointer;
`;

export const DeleteContainer = styled.div`
  display: flex;
  gap: 14px;

  p:nth-child(1) {
    color: #f03131;
  }
`;

export const ListWrapper = styled.ul`
  width: 100%;
  margin: 30px 0 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;

  @media (max-width: 1100px) {
    justify-content: space-around;
    gap: 10px 1.2727vw;
  }
`;


export const Modify = styled.div`
  position: absolute;
  opacity: 0;
  font-size: 13px;
  color: #3f9aee;
  right: 8px;
  top: 8px;
  transition: 0.5s;
`;

export const ServiceLink = styled.a`
  color: #929292;
  font-weight: 500;
  font-size: 13px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  :hover {
    color: #5499d9;
  }
`;

export const ListItemLayer = styled.li`
  width: 294px;
  aspect-ratio: auto 1 / 0.49;
  display: flex;
  background: #ffffff;
  border: ${({ check }: { check: ClientListType | undefined }) =>
    check ? '1px solid #5499D9' : '1px solid #e4e4e4'};
  cursor: pointer;
  border-radius: 9px;
  position: relative;
  transition: 0.5s;
  &:hover {
    border: 1px solid #5499d9;
    ${Modify} {
      opacity: 1;
    }
  }
  @media (max-width: 1100px) {
    width: 24vw;
  }
  @media (max-width: 800px) {
    width: 40vw;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CheckContainer = styled.label`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  &:after {
    opacity: 0;
    content: ' ';
    background: url('/png/Check.png');
    width: 15px;
    height: 15px;
    position: absolute;
    right: 5px;
    top: 4px;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
`;

export const DeleteSelect = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${CheckContainer} {
    &:after {
      opacity: 1;
    }
    & span {
      border: 1px solid #5499d9;
    }
  }
`;

export const PreviweWrapper = styled.div`
  width: 100%;
  aspect-ratio: auto 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  i {
    cursor: pointer;

    svg {
      position: absolute;
      top: 14px;
      left: 17px;
    }
  }
`;

export const PreviewImg = styled.div`
  position: relative;
  width: 124px;
  aspect-ratio: auto 1 / 0.355;
  overflow: hidden;
`;

export const ServiceInfoWrapper = styled.div`
  width: 100%;
  aspect-ratio: auto 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServiceTitle = styled.h3`
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const EmptyLisyLayer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 300px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  transition: ease 0.2s;
  box-shadow: inset 0px 2.5px 5px 0px rgba(0, 0, 0, 0.2);
  color: #929292;
  white-space: nowrap;
  cursor: pointer;

  h1 {
    transition: all 0.2s;
    font-size: 30px;
    margin: 0;
  }

  :hover {
    box-shadow: inset 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    color: #111111;

    h1 {
      transform: scale(1.3);
    }
  }

  @media (max-width: 550px) {
    margin-bottom: 60px;
    h1 {
      font-size: 5.4545vw;
    }
  }
`;
