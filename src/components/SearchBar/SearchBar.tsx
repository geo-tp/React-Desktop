import { SearchBarStyle } from "./style";

export const SearchBar = (props: { onFocus: Function; onChange: Function }) => {
  return (
    <SearchBarStyle>
      <label htmlFor="menu-search-bar">General Search</label>
      <i className="fa fa-search"></i>
      <input
        onChange={(e) => props.onChange(e)}
        onFocus={() => props.onFocus()}
        type="text"
        name="menu-serch-bar"
        id="menu-search-bar"
      />
    </SearchBarStyle>
  );
};
