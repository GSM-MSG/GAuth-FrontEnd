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
  gap: 0.875rem;

  p:nth-child(1) {
    color: #f03131;
  }
`;

export const ListWrapper = styled.ul`
  width: 100%;
  margin: 1.875rem 0 3.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem 0.875rem;

  @media (max-width: 1100px) {
    justify-content: space-around;
    gap: 0.625rem 1.2727vw;
  }
`;

export const Modify = styled.div`
  position: absolute;
  opacity: 0;
  font-size: 13px;
  color: #3f9aee;
  right: 0.5rem;
  top: 0.5rem;
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
    check ? '0.0625rem solid #5499D9' : '0.0625rem solid #e4e4e4'};
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
  top: 0.3125rem;
  right: 0.3125rem;
  cursor: pointer;
  &:after {
    opacity: 0;
    content: ' ';
    background: url('/png/Check.png');
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.0625rem solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
`;

export const DeleteSelect = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 0.0625rem;
  overflow: hidden;
  white-space: nowrap;
  width: 0.0625rem;

  &:checked + ${CheckContainer} {
    &:after {
      opacity: 1;
    }
    & span {
      border: 0.0625rem solid #5499d9;
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
      top: 0.875rem;
      left: 1.0625rem;
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
  padding: 0 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServiceTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  gap: 0.25rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  path {
    fill: #3f9aee;
  }
`;

export const ServiceTitle = styled.h3`
  width: 100%;
  font-size: 14px;
  line-height: 1rem;
  margin-top: 0.25rem;
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
  height: 23.75rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #e4e4e4;
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
    border: 0.0625rem solid #3f9aee;

    p {
      color: #3f9aee;
    }
  }

  @media (max-width: 550px) {
    margin-bottom: 3.75rem;
    h1 {
      font-size: 5.4545vw;
    }
  }
`;
