import { AddServiceForm } from "../../../public/svg"
import * as S from "./style"

export default function AddServicePage() {
    return (
        <S.Positioner>
            <S.Layer>
                <S.Form>
                    <S.FormTitle>
                        <h1>서비스를 등록해볼까요?</h1>
                        <h3>서비스 등록도, 학생정보 수집도 쉽게!</h3>
                    </S.FormTitle>
                    <S.InputContainer>
                        <input placeholder="서비스명을 입력해주세요" />
                        <input placeholder="리다이렉트 URL을 입력해주세요" />
                        <input placeholder="사이트 URL을 입력해주세요" />
                    </S.InputContainer>
                    <S.Submit>등록</S.Submit>
                </S.Form>
                <S.ImgBox>
                    <AddServiceForm />
                </S.ImgBox>
            </S.Layer>
        </S.Positioner>
    )
}