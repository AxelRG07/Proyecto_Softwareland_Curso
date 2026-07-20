import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDemoProps {
  value?: string;
  onChange: (value: string | null) => void;
}

const items = [
  { label: "Selecciona tu puesto", value: "Sele" },
  { label: "Desarrollador", value: "Desarrollador" },
  { label: "Diseñador", value: "Diseñador" },
  { label: "Manager", value: "Manager" },
];

export function SelectDemo({ value, onChange }: SelectDemoProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={String(item.value)}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
