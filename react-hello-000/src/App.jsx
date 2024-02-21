import Box from "./Box";
import "./App.css"
import View from "./View";
import Item from "./Item";
// 함수방식으로 App 이라는 컴포넌드 시작(생성), 함수의 이름은 파일의 이름과 동일

// {} (중괄호) 가 있으면 return 도 있어야함. 없으면 return 도 필요없음
// tag 가 2개 이상이면 부모 tag 로 묶어주어야 함. + return 뒤에 () 로 묶어주기
// 자체(self) closing : 태그 사이에 값이 없으면 셀프클로징
// React(JSX) 에서는 tag(컴포넌트)에 클래스를 지정할 때 "className" 이라는 키워드를 사용한다. 
// return 문 안에서는 주석 X 
// <box> <h1>광주광역시</h1> </box> 에서 h1 tag 까지 문자열로 본다.
const App = () => {
    return (
        <div className="AppMain">
            <h1>반갑습니다</h1>
            <h1>우리나라만세</h1>
            <Box>대한민국</Box>
            <Box>우리나라</Box>
            <Box>
                <h1>광주광역시</h1>
            </Box>
            <View name="홍길동" age="33" />
            <View name="이몽룡" age="20" />
            <Item name="성춘향" age="16" />
        </div>
    );
};
export default App;
