const Filter = () => (
  <div className="pet-filter-container">
    <div className="filter-container">
      <label htmlFor="Favorite">Favorite</label>
      <select name="Favorite" id="Favorite" className="form-select">
        <option value="Any">Any</option>
        <option value="Favorite">Favorite</option>
        <option value="Not Favorite">Not Favorite</option>
      </select>
    </div>

    <div className="filter-container">
      <label htmlFor="Gender">Gender</label>
      <select name="Gender" id="Gender" className="form-select">
        <option value="Any">Any</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </div>
  </div>
);

export default Filter;
