const personalInformation = "1. 수집목적 : 회원가입, 상담, 서비스 신청 등\n\n2. 수집하는 개인정보 항목\n- 필수항목 : 성명, 아이디, 비밀번호, 휴대폰번호, 이메일\n- 선택항목 : 없음\n\n3. 보유기간 : 회원 탈퇴시\n\n4. 개인정보주체자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 동의를 거부할 경우 원활한 서비스 이용이 불가함을 알려드립니다.";

personalInformation.replace(/\n/g, '<br/>');

export default personalInformation;