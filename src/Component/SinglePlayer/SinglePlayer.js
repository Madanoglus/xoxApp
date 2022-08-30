import Board from "./Board";
import Square from "./SingleSquare";




function SinglePlayer() {
  
  return (
    <div>
      <main>
        <Board>
          <Square />
          <Square />
          <Square />

          <Square />
          <Square />
          <Square />

          <Square />
          <Square />
          <Square />
        </Board>
      </main>
    </div>
  );
}
export default SinglePlayer;
