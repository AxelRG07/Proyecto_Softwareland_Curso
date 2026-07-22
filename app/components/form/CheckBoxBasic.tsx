import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

interface CheckBoxBasicProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function CheckboxBasic({
  checked = false,
  onCheckedChange,
}: CheckBoxBasicProps) {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-basic"
          name="terms-checkbox-basic"
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Aceptar terminos y condiciones
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}
