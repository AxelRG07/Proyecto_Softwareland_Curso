"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { SelectDemo } from "./SelectDemo";
import { CheckboxBasic } from "./CheckBoxBasic";
import FormController from "./FormController";

const getLocalDateString = (date: Date) => {
  if (!date || isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(32, "El nombre debe tener como máximo 32 caracteres."),
  lastName: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres.")
    .max(32, "El apellido debe tener como máximo 32 caracteres."),
  email: z.email(),
  password: z.string(),
  age: z.string(),
  gender: z.boolean(),
  role: z.string(),
  terms: z.boolean(),
  notes: z.string(),
  date: z.date(),
});

export default function FormRegistro() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      gender: true,
      role: "",
      terms: false,
      notes: "",
      date: new Date(),
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-green-400">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bienvenido</CardTitle>
        <CardDescription>
          Por favor complete el formulario de registro.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FormController
              name="name"
              form={form}
              label="Nombre"
              id="form-rhf-demo-title"
              placeholder="John"
              type="text"
              autoComplete="off"
            />

            <FormController
              name="lastName"
              form={form}
              label="Apellido"
              id="form-rhf-demo-description"
              placeholder="Cena"
              type="text"
              autoComplete="off"
            />

            <FormController
              name="email"
              form={form}
              label="Email"
              id="form-rhf-demo-description"
              placeholder="axel@gmail.com"
              type="email"
              autoComplete="off"
            />

            <FormController
              name="password"
              form={form}
              label="Password"
              id="form-rhf-demo-description"
              placeholder="********"
              type="password"
              autoComplete="off"
            />

            <FormController
              name="age"
              form={form}
              label="Edad"
              id="form-rhf-demo-description"
              placeholder="Edad"
              type="number"
              autoComplete="off"
            />

            <Controller
              name="gender"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Genero
                  </FieldLabel>
                  <RadioGroup defaultValue="comfortable" className="w-fit">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={true} id="r1" />
                      <Label htmlFor="r1">Masculino</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={false} id="r2" />
                      <Label htmlFor="r2">Femenino</Label>
                    </div>
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Rol
                  </FieldLabel>
                  <SelectDemo />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="terms"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Opciones
                  </FieldLabel>
                  <CheckboxBasic />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="notes"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Notas
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="Notas"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="date"
              control={form.control}
              render={({ field: { value, ...fieldProps }, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-date">Fecha</FieldLabel>
                  <Input
                    {...fieldProps}
                    value={getLocalDateString(value)}
                    id="form-rhf-demo-date"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    type="date"
                    disabled
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
