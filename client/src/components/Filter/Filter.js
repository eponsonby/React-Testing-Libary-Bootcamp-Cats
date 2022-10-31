import "./Filter";

const Filter = ({ filters, setFilters }) => (
  <div className="pet-filter-container">
    <div className="filter-container">
      <label htmlFor="Favorite">Favorite</label>
      <select
        name="Favorite"
        id="Favorite"
        className="form-select"
        onChange={(e) => {
          setFilters({
            ...filters,
            favorite: e.target.value,
          });
        }}
      >
        <option value="Any">Any</option>
        <option value="Favorite">Favorite</option>
        <option value="Not Favorite">Not Favorite</option>
      </select>
    </div>

    <div className="filter-container">
      <label htmlFor="Gender">Gender</label>
      <select
        name="Gender"
        id="Gender"
        className="form-select"
        onChange={(e) => {
          setFilters({
            ...filters,
            gender: e.target.value,
          });
        }}
      >
        <option value="Any">Any</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
  </div>
);

export default Filter;
