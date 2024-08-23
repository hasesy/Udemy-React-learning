export default function TabButton({ children }) {
  function handleClick() {
    console.log('Hello World!');
  }

  return (
    <li>
      {/* 컴포넌트에서 children 이라는 속성을 전달해주는 게 아님.
        컴포넌트 텍스트 사이에 내용을 의미함 */}
      {/* handleClick()으로 실행하면 안됨. 이름을 사용해야 함 */}
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
