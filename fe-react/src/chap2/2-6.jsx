const App = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div style={{ display: "flex" }}>
      {num.map(
        (n) =>
          n >= 1 &&
          n !== 5 && (
            <div
              key={n}
              style={{
                padding: 10,
                color: n % 2 ? "blue" : "black",
              }}
            >
              {num.map((m) => (
                <div key={`${n}*${m}`}>
                  {n} *{m} = {n * m}
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default App;
