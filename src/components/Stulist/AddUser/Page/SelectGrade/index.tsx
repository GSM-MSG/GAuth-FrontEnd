import CreateTitle from '../../../../common/CreateTitle';
import { SubmitWrapper } from '../../../../NewSignIn/style';
import * as S from './style';
import * as SVG from '../../../../../../public/svg';
import { Form } from '../../style';
import { useSetRecoilState } from 'recoil';
import { ModalPage } from '../../../../../Atom/Atoms';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function SelectGrade() {
  const setModalPage = useSetRecoilState(ModalPage);
  const [userGrade, setUserGrade] = useState('');

  const student = 'student';
  const teacher = 'teacher';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userGrade) return toast.error('권한을 선택해주세요');
    setModalPage(userGrade === student ? 1 : 2);
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
              id={student}
              name={'grade'}
              checked={userGrade === student}
              readOnly
              onClick={() => setUserGrade(student)}
            />
            <S.Label htmlFor={student}>
              <SVG.StudentIcon />
              <p>학생</p>
            </S.Label>
            <p>
              자신이 등록한 서비스만
              <br /> 관리 가능
            </p>
          </S.SelectBox>
          <S.SelectBox>
            <S.Input
              type="radio"
              id={teacher}
              name={'grade'}
              checked={userGrade === teacher}
              readOnly
              onClick={() => setUserGrade(teacher)}
            />
            <S.Label htmlFor={teacher}>
              <SVG.TeacherIcon />
              <p>선생님</p>
            </S.Label>
            <p>
              서비스 관리 및 유저
              <br /> 관리 가능
            </p>
          </S.SelectBox>
        </S.Wrapper>
        <SubmitWrapper>
          <button type="submit">다음</button>
        </SubmitWrapper>
      </Form>
    </>
  );
}
