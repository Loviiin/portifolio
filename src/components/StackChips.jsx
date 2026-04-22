export default function StackChips({ items, className = '' }) {
  return (
    <ul className={`chip-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className="chip-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
