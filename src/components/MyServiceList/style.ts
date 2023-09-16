import styled from '@emotion/styled';
import { ClientListType } from '../../types';

export const Layer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2vw;
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
  overflow: hidden;

  &:hover {
    border: 1px solid #5499d9;
    ${Modify} {
      opacity: 1;
    }
    svg {
      display: none;
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

export const ServiceImgWrapper = styled.div`
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

export const ServiceImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DefalutImg = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: auto 1 / 0.5;
`;

export const ServiceInfoWrapper = styled.div`
  width: 100%;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServiceTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  gap: 4px;

  svg {
    width: 20px;
    height: 20px;
  }

  path {
    fill: #3f9aee;
  }
`;

export const ServiceTitle = styled.h3`
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  color: #000000;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const EmptyLisyLayer = styled.div`
  margin: 1vw 0 2vw 0;
  width: 100%;
  height: 380px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  transition: ease 0.2s;
  color: #000;
  white-space: nowrap;
  cursor: pointer;

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: #929292;
  }

  :hover {
    border: 1px solid #3f9aee;

    p {
      color: #3f9aee;
    }
  }

  @media (max-width: 550px) {
    margin-bottom: 60px;
    h1 {
      font-size: 5.4545vw;
    }
  }
`;
