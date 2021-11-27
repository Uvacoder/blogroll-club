export function Footer() {
  return (
    <footer>
      <h5>
        {" "}
        Created by{" "}
        <a href={process.env.TWITTER} target="_blank" rel="noopener noreferrer">
          @searchableguy
        </a>{" "}
        <span
          style={{
            textDecoration: "line-through",
          }}
        >
          with {"<3"}
        </span>
      </h5>
    </footer>
  );
}
