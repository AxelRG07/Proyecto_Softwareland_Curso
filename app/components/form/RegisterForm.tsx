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
import { RegistersTable } from "./RegistersTable";
import { useState } from "react";

const getLocalDateString = (date: Date) => {
  if (!date || isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(32, "El nombre debe tener como máximo 32 caracteres.")
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "El nombre debe contener solo letras"),
  lastName: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres.")
    .max(32, "El apellido debe tener como máximo 32 caracteres.")
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      "El apellido debe contener solo letras",
    ),
  email: z.email("email inválido - ejemplo: axel@gmail.com"),
  password: z.string(),
  age: z.string().regex(/^[1-9][0-9]?$/, "Edad invalida"),
  gender: z.boolean({
    message: "Por favor seleccione un genero",
  }),
  role: z.string().min(1, "Por favor seleccione un rol"),
  terms: z.boolean().refine((value) => value === true, {
    message: "Por favor acepte los terminos y condiciones",
  }),
  notes: z.string(),
  date: z.date(),
});

export default function RegisterForm({
  data,
  onSave,
  formId = "form-rhf-demo",
}: {
  data?: z.infer<typeof formSchema>;
  onSave?: (data: z.infer<typeof formSchema>) => void;
  formId?: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    shouldUnregister: false,
    defaultValues: {
      name: data?.name || "",
      lastName: data?.lastName || "",
      email: data?.email || "",
      password: data?.password || "",
      age: data?.age || "",
      gender: data?.gender || true,
      role: data?.role || "",
      terms: data?.terms || false,
      notes: data?.notes || "",
      date: data?.date || new Date(),
    },
  });

  const [registros, setRegistros] = useState<z.infer<typeof formSchema>[]>([]);

  const isEditing = !!data;

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (isEditing && onSave) {
      onSave(data);
      console.log(data);
    } else {
      setRegistros([...registros, data]);
      console.log(data);
      toast("Registro exitoso", {
        position: "top-center",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
      form.reset();
    }
  }

  const deleteRegister = (index: number) => {
    const newRegistros = registros.filter((_, i) => i !== index);
    setRegistros(newRegistros);
  };

  const updateRegister = (index: number, data: any) => {
    const newRegistros = registros.map((registro, i) =>
      i === index ? data : registro,
    );
    setRegistros(newRegistros);
  };

  return (
    <main>
      <Card className="w-full sm:max-w-md">
        {!isEditing && (
          <CardHeader>
            <CardTitle>Bienvenido</CardTitle>
            <CardDescription>
              Por favor complete el formulario de registro.
            </CardDescription>
          </CardHeader>
        )}
        <CardContent>
          <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
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

              {!isEditing && (
                <FormController
                  name="email"
                  form={form}
                  label="Email"
                  id="form-rhf-demo-description"
                  placeholder="axel@gmail.com"
                  type="email"
                  autoComplete="off"
                />
              )}

              <FormController
                name="password"
                form={form}
                label="Password"
                id="form-rhf-demo-description"
                placeholder="********"
                type="password"
                autoComplete="off"
              />

              {!isEditing && (
                <FormController
                  name="age"
                  form={form}
                  label="Edad"
                  id="form-rhf-demo-description"
                  placeholder="Edad"
                  type="number"
                  autoComplete="off"
                />
              )}

              {!isEditing && (
                <Controller
                  name="gender"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-description">
                        Genero
                      </FieldLabel>
                      <RadioGroup
                        value={
                          field.value !== undefined
                            ? String(field.value)
                            : undefined
                        }
                        onValueChange={(val) => {
                          field.onChange(val === "true");
                          console.log(field.value);
                        }}
                        className="w-fit"
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="true" id="r1" />
                          <Label htmlFor="r1">Masculino</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="false" id="r2" />
                          <Label htmlFor="r2">Femenino</Label>
                        </div>
                      </RadioGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              )}

              <Controller
                name="role"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-description">
                      Rol
                    </FieldLabel>
                    <SelectDemo value={field.value} onChange={field.onChange} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {!isEditing && (
                <Controller
                  name="terms"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-description">
                        Opciones
                      </FieldLabel>
                      <CheckboxBasic
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              )}

              {!isEditing && (
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
              )}
              {isEditing && (
                <Controller
                  name="date"
                  control={form.control}
                  render={({ field: { value, ...fieldProps }, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-date">
                        Fecha
                      </FieldLabel>
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
              )}
            </FieldGroup>
          </form>
        </CardContent>
        {!isEditing && (
          <CardFooter>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reiniciar
              </Button>
              <Button type="submit" form="form-rhf-demo">
                Subir
              </Button>
            </Field>
          </CardFooter>
        )}
      </Card>
      {!isEditing && (
        <RegistersTable
          data={registros}
          deleteRegister={deleteRegister}
          updateRegister={updateRegister}
        />
      )}
    </main>
  );
}
