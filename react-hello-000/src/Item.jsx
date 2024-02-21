// props : 개수 상관 없이 모든 값을 보냄, props 를 받아서 사용

const Item = (props) => {

    // 객체의 구조분해
    // props 가 받은 여러 변수들을 개별 변수로 분해하라
    const { name, age } = props;
    // const {} 의 값인 props 를 const Item 의 (props) 에 넣을 수 있음

    return (
        <>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <div>
                {name}
                {age}
            </div>
        </>
    )
}
export default Item;