import '../css/MemoInput.css'

const MemoInput = () => {
    return (
        <div className="memoInput">
            <input placeholder="제목을 입력하세요" />
            <input placeholder="내용을 입력하세요" />
            <input type="file" />
            <input type="button" value={"추가"} />
        </div>
    )
}
export default MemoInput;