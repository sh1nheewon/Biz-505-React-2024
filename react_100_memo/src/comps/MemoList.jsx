import '../css/MemoList.css';

const MemoList = () => {
    return (
        <div className="memoList">
            <input className="todate" type="text" />
            <input className="totime" type="text" />
            <input className="btn_new" type="button" value={"새로작성"} />
            
        </div>
    )
}
export default MemoList;