import "./style.css";

export function GetInTouch() {
  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-link">
        <a
          href="http://www.linkedin.com/in/billyyuan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
      </div>
      <div className="get-in-touch-link">
        <a
          href="https://github.com/billy-yuan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}
