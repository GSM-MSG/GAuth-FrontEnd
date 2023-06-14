import CreateTitle from '../../../../common/CreateTitle';
import { SubmitWrapper } from '../../../../SignIn/style';
import * as S from './style';
import * as SVG from '../../../../../../public/svg';
import { Form } from '../../style';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { ModalType } from '../../../../../Atom/Atoms';
import {
  ROLE_GRADUATE,
  ROLE_STUDENT,
  ROLE_TEACHER,
} from '../../../../../lib/UserRole';

export default function SelectGrade() {
  const setModalType = useSetRecoilState(ModalType);
  const [userGrade, setUserGrade] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userGrade) return toast.error('권한을 선택해주세요');
    setModalType(userGrade);
  };

  return (
    <>
      <CreateTitle
        title={'사용자 등록'}
        logo={true}
        subTitle={'승인하실 유저에 권한을 지정해주세요.'}
      />
      <Form onSubmit={onSubmit}>
        <S.Wrapper>
          <S.SelectBox>
            <S.Input
              type="radio"
              id={ROLE_STUDENT}
              name={'grade'}
              checked={userGrade === ROLE_STUDENT}
              readOnly
              onClick={() => setUserGrade(ROLE_STUDENT)}
            />
            <S.Label htmlFor={ROLE_STUDENT}>
              <SVG.StudentIcon />
              <p>재학생</p>
              <span>
                자신이 등록한 서비스만
                <br /> 관리 가능
              </span>
            </S.Label>
          </S.SelectBox>
          <S.SelectBox>
            <S.Input
              type="radio"
              id={ROLE_GRADUATE}
              name={'grade'}
              checked={userGrade === ROLE_GRADUATE}
              readOnly
              onClick={() => setUserGrade(ROLE_GRADUATE)}
            />
            <S.Label htmlFor={ROLE_GRADUATE}>
              <SVG.GraduateIcon />
              <p>졸업생</p>
              <span>
                자신이 등록한 서비스만
                <br /> 관리 가능
              </span>
            </S.Label>
          </S.SelectBox>
          <S.SelectBox>
            <S.Input
              type="radio"
              id={ROLE_TEACHER}
              name={'grade'}
              checked={userGrade === ROLE_TEACHER}
              readOnly
              onClick={() => setUserGrade(ROLE_TEACHER)}
            />
            <S.Label htmlFor={ROLE_TEACHER}>
              <SVG.TeacherIcon />
              <p>선생님</p>
              <span>
                서비스 관리 및 유저
                <br /> 관리 가능
              </span>
            </S.Label>
          </S.SelectBox>
        </S.Wrapper>
        <SubmitWrapper>
          <button type="submit">다음</button>
        </SubmitWrapper>
      </Form>
    </>
  );
}
