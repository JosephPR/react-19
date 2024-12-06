export default function PropsButton({ count, onClick, buttonColor }) {
  return (
    <button onClick={onClick} className={buttonColor}>
      Clicked {count} times
    </button>
  );
}