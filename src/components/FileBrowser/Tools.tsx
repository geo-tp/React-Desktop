import { SearchBar } from "../SearchBar";
import { PathStyle, ToolsStyle } from "./style";

export const Tools = (props: { onSearchChange: Function }) => {
  return (
    <ToolsStyle>
      <i className="fa fa-angle-left"></i>
      <i className="fa fa-angle-right"></i>
      <PathStyle>
        <i className="fa fa-hdd"></i>
        <span>/home</span>
      </PathStyle>
      <SearchBar onChange={props.onSearchChange} onFocus={() => {}} />
    </ToolsStyle>
  );
};
