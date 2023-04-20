import { ShortCutStyle } from "./style";

export const ShortCut = (props: { name: string; src: string; alt: string }) => {
  return (
    <ShortCutStyle>
      <img src={props.src} alt={props.alt} />
      <span>{props.name}</span>
      <i className="fa fa-angle-right"></i>
    </ShortCutStyle>
  );
};
