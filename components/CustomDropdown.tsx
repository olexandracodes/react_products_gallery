import { DropdownMenu, Button } from "@radix-ui/themes";
import { selectContainerStyle, colors } from "../styles/ProductPageStyles";
import { css } from "@emotion/css"; 
import { dropdownOptions } from "../pages/ProductPage";

interface CustomDropdownProps {
	productId: string;
	selectedOption: string;
	onOptionChange: (value: string, productId: string) => void;
}

const dropdownMenuStyle = css`
	background-color: ${colors.background};
	border-radius: 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	max-width: 250px;
	overflow: hidden;
	margin-top: 5px;
	transition: opacity 0.3s ease, transform 0.3s ease;
	z-index: 1;
`;

const dropdownItemStyle = css`
	padding: 10px 20px;
	color: ${colors.primary};
	font-size: 14px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.3s ease;
	
	&:hover {
		background-color: ${colors.hoverBackground};
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(1px);
	}
`;

const dropdownTriggerButtonStyle = css`
	padding: 10px 20px;
	background-color: ${colors.secondary};
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color 0.3s, transform 0.3s;

	&:hover {
		background-color: ${colors.buttonHover};
		transform: translateY(-2px);
	}

	&:active {
		background-color: ${colors.buttonHover};
		transform: translateY(1px);
	}

	&:focus {
		outline: none;
	}
`;

const CustomDropdown: React.FC<CustomDropdownProps> = ({
	productId,
	selectedOption,
	onOptionChange,
}) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button 
					variant="soft" 
					className={`${selectContainerStyle} ${dropdownTriggerButtonStyle}`}>
					{selectedOption || "Select"}
					<DropdownMenu.TriggerIcon />
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content className={dropdownMenuStyle}>
				{dropdownOptions.map((option) => (
					<DropdownMenu.Item
						key={option.value}
						onClick={() => onOptionChange(option.value, productId)}
						className={dropdownItemStyle}
					>
						{option.label} ({option.value})
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default CustomDropdown;
