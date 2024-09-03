// 따로 구조 분해(title같은 거) 하지 않은 것들은 ...props에 다 모이게 됨
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
