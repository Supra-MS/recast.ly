let Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(event) => props.searchSubmit(event.target.value)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

// this.handleSubmit = _.debounce(this.handleSubmit, 500);

