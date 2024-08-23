export default function TabButton({ children }) {
  return (
    <li>
      {/* 컴포넌트에서 children 이라는 속성을 전달해주는 게 아님.
        컴포넌트 텍스트 사이에 내용을 의미함 */}
      <button>{children}</button>
    </li>
  );
}
