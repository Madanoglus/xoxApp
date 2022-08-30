function Square({ value, onClick }) {
  return (
    <div className="multisquare" onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
