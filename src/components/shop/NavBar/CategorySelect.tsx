import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { useParams, useRouter } from "next/navigation";

// Define the shape of an option
type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "0", label: "Casual" },
  { value: "1", label: "Formal" },
  { value: "2", label: "Party" },
  { value: "3", label: "Gym" },
];

const CategorySelect: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(
    options[0]
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams<{ id?: string }>();

  const router = useRouter();

  const handleChange = (option: SingleValue<Option>) => {
    if (option) {
      setSelectedCategory(option);
      setIsLoading(true);
      setIsDisabled(true);
      router.push(`/category/${option.value}`);
    }
  };

  // Sync selected option from the URL param if present
  useEffect(() => {
    const routeId = params?.id;
    if (routeId) {
      const matched = options.find((opt) => opt.value === String(routeId));
      if (matched) {
        setSelectedCategory(matched);
      }
    }
  }, [params?.id]);

  return (
    <Select<Option, false>
      instanceId="category-select"
      className="basic-single"
      classNamePrefix="select"
      value={selectedCategory}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={false}
      isSearchable={true}
      name="category"
      options={options}
      onChange={handleChange}
      styles={{
        control: (base) => ({
          ...base,
          border: "none",
          boxShadow: "none",
          margin: 0,
          padding: 0,
        }),
        option: (base, state) => ({
          ...base,
          cursor: "pointer",
          backgroundColor: state.isFocused ? "#f0f0f0" : "white",
          color: "black",
        }),
      }}
    />
  );
};

export default CategorySelect;
