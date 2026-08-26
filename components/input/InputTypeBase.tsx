import AmountInput from "./components/AmountInput";
import InputCheckbox from "./components/InputCheckbox";
import TextField from "./components/TextField";
import TextInput from "./components/TextInput";
import MultiSelectFilterTable from "./components/MultiSelectFilterTable";
import SelectBox from "./components/SelectBox";

type InputType =
  | "text"
  | "password"
  | "langText"
  | "number"
  | "amount"
  | "date"
  | "select"
  | "multiSelect"
  | "checkbox";

type InputVariant = "outlined" | "borderless" | "filled" | "underlined";

interface InputTypeBaseProps {
  value?: unknown;
  onChange?: (val: unknown) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  type?: InputType;
  error?: string;
  disabled?: boolean;
  className?: string;
  variant?: InputVariant;
  length?: number;
  acceptedFormats?: string;
  maxSize?: number;
  onFileSelect?: (file: File) => void;
  options?: string[];
  search?: string;
  onSearchChange?: (val: string) => void;
  isOpen?: boolean;
  onToggle?: () => void;
  checked?: boolean;
  title?: string;
  onBlur?: () => void;
}

const InputTypeBase: React.FC<InputTypeBaseProps> = (props) => {
  const {
    value,
    onChange = () => {},
    placeholder,
    label,
    required,
    type,
    error,
    disabled,
    className = "",
    variant,
    length,
    options = [],
    search = "",
    onSearchChange = () => {},
    isOpen = false,
    onToggle = () => {},
    checked,
    title,
    onBlur,
  } = props;

  const inputComponents: Record<InputType, React.ReactNode> = {
    text: (
      <TextInput
        value={value as string}
        onChange={(val: string) => onChange(val)}
        placeholder={placeholder}
        label={label}
        required={required}
        error={error}
        disabled={disabled}
        className={className}
        variant={variant}
      />
    ),
    // ➕ اضافه شد
    password: (
      <TextInput
        type="password"
        value={value as string}
        onChange={(val: string) => onChange(val)}
        placeholder={placeholder}
        label={label}
        required={required}
        error={error}
        disabled={disabled}
        className={className}
        variant={variant}
      />
    ),
    langText: (
      <TextField
        value={value as string}
        onChange={(val: string) => onChange(val)}
        placeholder={placeholder}
        label={label}
        required={required}
        error={error}
        disabled={disabled}
        className={className}
        rows={length}
      />
    ),
    number: (
      <TextInput
        type="tel"
        value={value as string}
        onChange={(val: string) => onChange(val)}
        placeholder={placeholder}
        label={label}
        required={required}
        error={error}
        disabled={disabled}
        className={className}
        variant={variant}
      />
    ),
    amount: (
      <AmountInput
        value={value as number}
        onChange={(val: number) => onChange(val)}
        placeholder={placeholder}
        label={label}
        required={required}
        error={error}
        disabled={disabled}
        className={className}
      />
    ),
    date: (
      <TextField
        type="date"
        value={value as string}
        onChange={(val: string) => onChange(val)}
        placeholder={placeholder}
        label={label}
        required={required}
        error={error}
        disabled={disabled}
        className={className}
      />
    ),
    select: (
      <SelectBox
        label={label}
        value={value as string | null}
        placeholder={placeholder}
        options={options}
        search={search}
        onSearchChange={onSearchChange}
        onSelect={(val: string | null) => onChange(val)}
        isOpen={isOpen}
        onToggle={onToggle}
        className={className}
        error={error}
        required={required}
      />
    ),
    multiSelect: (
      <MultiSelectFilterTable
        required={required}
        error={error}
        label={label}
        options={options}
        selectedValues={Array.isArray(value) ? value : []}
        onChange={(val: string[]) => onChange(val)}
        className={className}
      />
    ),
    checkbox: (
      <InputCheckbox
        title={title}
        checked={typeof checked === "boolean" ? checked : false}
        onChange={(checkedVal: boolean) => onChange(checkedVal)}
        onBlur={onBlur}
        label={label}
      />
    ),
  };

  const renderComponent = () => {
    if (!type) {
      return <div className="text-red-500">نوع ورودی مشخص نشده است</div>;
    }
    if (!(type in inputComponents)) {
      return <div className="text-red-500">نوع ورودی پشتیبانی نمی‌شود: {type}</div>;
    }
    return inputComponents[type];
  };

  return <div className="w-full">{renderComponent()}</div>;
};

export default InputTypeBase;
