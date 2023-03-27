export interface IArrowButton {
  backgroundColor: string;
  disabled?: boolean;
  buttonSize?: number;
  iconSize?: number;
  onClick?: () => void;
  color: string;
  rotate?: number;
}

export interface IButtonStyles {
  size: number;
  backgroundColor: string;
  rotate?: number;
}
