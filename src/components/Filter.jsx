export default function Filter({ setFilterBy, filterBy, onReset }) {
  return (
    <div className="filter">
      <select
        className="selection"
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value)}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
      <button className="btn-reset" onClick={onReset}>
        Clear List
      </button>
    </div>
  );
}
