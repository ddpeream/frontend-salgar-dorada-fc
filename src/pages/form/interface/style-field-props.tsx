export interface StyledTextFieldProps {
  isSelected?: boolean;
  fileName?: string;
  fullWidth?: boolean;
  name?: string;
  style?: React.CSSProperties;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string; 
}
