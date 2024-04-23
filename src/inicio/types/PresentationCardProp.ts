type SideImg = 'left' | 'right';
type BgColor = 'W' | "B"

type PresentationCardProp = {
  title: string;
  description: string;
  imgBlack: string,
  imgWhite: string,
  sideImg: SideImg;
  bgColor: BgColor;
};

export default PresentationCardProp