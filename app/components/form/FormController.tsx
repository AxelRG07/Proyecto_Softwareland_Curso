import React from "react";
import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldSet,
  FieldLabel,
  FieldSeparator,
  FieldError,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";

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
