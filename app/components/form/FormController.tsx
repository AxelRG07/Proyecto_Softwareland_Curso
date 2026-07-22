import React from "react";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";

interface FormControllerProps {
  name: string;
  form: any;
  label: string;
  id: string;
  placeholder: string;
  type: string;
  autoComplete: string;
}

export default function FormController({
  name,
  form,
  label,
  id,
  placeholder,
  type,
  autoComplete,
}: FormControllerProps) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => {
        const isValid =
          !fieldState.invalid && fieldState.isDirty && fieldState.isTouched;

        return (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <Input
              {...field}
              id={id}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              autoComplete={autoComplete}
              type={type}
              className={`${isValid ? "focus-visible:ring-green-500 border-green-500" : ""}`}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}
