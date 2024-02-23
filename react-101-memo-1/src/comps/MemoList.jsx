import MemoItem from "./MemoItem";
const MemoList = (memoList) => {

    const viewList = memoList.map((item) => (
        <memoItem item={item} key={item.seq} />
    ));
    return
    <>{viewList}</>
};
export default MemoList;