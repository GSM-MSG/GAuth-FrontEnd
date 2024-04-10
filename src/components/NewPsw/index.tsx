import { Layout, Wrapper } from '../common/Auth/style';
import ChangePasswordCommon from '../common/Auth/ChangePasswordCommon';

export default function NewPswPage() {
  return (
    <Layout>
      <Wrapper>
         <ChangePasswordCommon
         title="비밀번호 변경"
         newPassword={true}
         submitBtn="완료"
         bottomPhrase="비밀번호 찾기"
         changeModal="/newpsw"
       />
      </Wrapper>
    </Layout>
  );
}
