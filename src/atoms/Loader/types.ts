import { CircularProgressPropsColorOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types'

export interface LoaderProps {
	fullscreen?: boolean;
	size?: number | string;
	thickness?: number;
	color?: OverridableStringUnion<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit', CircularProgressPropsColorOverrides>;
}