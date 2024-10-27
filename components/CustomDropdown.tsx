import { DropdownMenu, Button, Flex, Box } from "@radix-ui/themes";
import { selectContainerStyle, selectItem } from "../styles/ProductPageStyles";
import { dropdownOptions } from "../pages/ProductPage";

interface CustomDropdownProps {
	productId: string;
	selectedOption: string;
	onOptionChange: (value: string, productId: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
	productId,
	selectedOption,
	onOptionChange,
}) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button variant="soft" className={selectContainerStyle}>
					{selectedOption || "Select"}
					<DropdownMenu.TriggerIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{dropdownOptions.map((option) => (
					<DropdownMenu.Item
						key={option.value}
						onClick={() => onOptionChange(option.value, productId)}
						className={selectItem}
					>
						{option.label} ({option.value})
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default CustomDropdown;
