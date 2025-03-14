const Button = ({ text, type, handler }) => {
  const style =
    type === 'danger'
      ? 'bg-rose-600 px-8 py-3 text-white font-semibold text-lg rounded-md'
      : 'bg-purple-600 px-8 py-3 text-white font-semibold text-lg rounded-md';

  return (
    <button className={style} onClick={handler}>
      {text}
    </button>
  );
};
export default Button;
