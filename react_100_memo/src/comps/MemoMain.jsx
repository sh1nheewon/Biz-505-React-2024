import MemoInput from "./MemoInput";
import MemoList from "./MemoList";
import "../css/MemoMain.css";

const MemoMain = () => {
    return (
        <div className="memoMain">
            <header className="memoHeader">
                <h1>오늘은 내 생의 가장 젊은 날</h1>
            </header>
            <div className="memoJsx">
                <MemoList />
                <MemoInput />
            </div>
            <footer>
                <address>
                    CopyRight &copy; tlsgmldnjs00@naver.com
                </address>
            </footer>
        </div>
    )
}
export default MemoMain;