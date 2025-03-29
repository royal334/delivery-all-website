'use client';

import Select, { OptionProps, StylesConfig } from 'react-select';
import { Icons } from '@/components/Icons'; // Import icons

// Define select options with icons
const options = [
  { value: 'document', label: 'Document', icon: <Icons.trackingbox /> },
  { value: 'parcel', label: 'Parcel', icon: <Icons.location /> },
];

// Custom selected value component (show icon + label)
const customSingleValue = ({
  data,
}: {
  data: { value: string; label: string; icon: JSX.Element };
}) => (
  <div className="flex items-center gap-2">
    {data.icon} {/* Display icon */}
    {data.label} {/* Display label */}
  </div>
);

// Custom dropdown option component (icon + label)
const customOption = (
  props: OptionProps<{ value: string; label: string; icon: JSX.Element }>
) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
    >
      {data.icon}
      {data.label}
    </div>
  );
};

// Define a type for your option shape
type OptionType = {
  value: string;
  label: string;
  icon: JSX.Element;
};

// Create a styles config to override default react-select styles
const customStyles: StylesConfig<OptionType, false> = {
  // Main control container (the outer container of the select)
  control: (base) => ({
    ...base,
    border: '1px solid #D1D5DB', // Keep the border
    boxShadow: 'none', // Remove focus outline
    minHeight: '35px', // Control overall height
    padding: '13px 5px', // Remove default internal padding
    display: 'flex',
    alignItems: 'center', // Center contents vertically
  }),
  // Container holding the selected value (icon and text)
  valueContainer: (base) => ({
    ...base,
    padding: '0px 8px', // Minimal horizontal padding
    display: 'flex',
    alignItems: 'center', // Ensure vertical centering
    margin: 0,
  }),
  // Style for the actual selected value (icon+label)
  singleValue: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    lineHeight: 'normal', // Remove extra line height
  }),
  // Style for the placeholder text (when nothing is selected)
  placeholder: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    lineHeight: 'normal', // Remove extra line height
  }),
  // Remove the blinking caret by setting it to transparent on the input element
  input: (base) => ({
    ...base,
    caretColor: 'transparent',
    margin: 0,
    padding: 0,
  }),
  // The dropdown menu container
  menu: (base) => ({
    ...base,
    backgroundColor: '#fff', // Dropdown background color
    color: '#000', // Text color
  }),
  // Individual option styling in the dropdown menu
  option: (base) => ({
    ...base,
    padding: '4px 8px', // Adjust padding for options
  }),
  // The dropdown arrow container
  dropdownIndicator: (base) => ({
    ...base,
    padding: '0 8px', // Minimal horizontal padding
  }),
  // Remove the little vertical separator between the value and the dropdown arrow
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
};

export default function CustomSelect() {
  return (
    <Select
      options={options} // Set options
      defaultValue={options[0]} // Set first option as default placeholder
      components={{ SingleValue: customSingleValue, Option: customOption }} // Use custom components
      className="w-full" // Make select full width
      styles={customStyles} // Apply our custom styles
    />
  );
}
