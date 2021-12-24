import "./style.css";

type FilterProps = {
  filters: string[];
};
function Filter({ filters }: FilterProps) {
  return (
    <div className="filter-container">
      <div className="filter-header">Show me places for:</div>
      <div className="filter-options-container">
        {filters.map((filter) => (
          <span key={`filter-${filter}`} className="filter-options">
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Filter;
