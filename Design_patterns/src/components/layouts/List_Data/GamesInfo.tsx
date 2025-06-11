interface GamesInfoProps {
  gameName: string;
  gameRating: number;
  gameGenre: string;
  gameLanguages: string[];
}

const GamesInfo = ({
  gameName,
  gameRating,
  gameGenre,
  gameLanguages,
}: GamesInfoProps) => {
  return (
    <div style={{ padding: "1rem", backgroundColor: "lightgreen" }}>
      <h2>{gameName}</h2>
      <p>Rating: {gameRating}/10</p>
      <p>Genre: {gameGenre}</p>
      <ul>
        <ul>
          Languages:
          {gameLanguages.map((l: string, index: number) => (
            <li key={index}>{l}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default GamesInfo;
