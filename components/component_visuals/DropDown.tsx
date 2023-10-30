"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Form, FormField } from "../ui/form";

import { Button } from "../ui/button";
import useUserForm from "@/hooks/form.hooks";
import { renderField } from "./FormRenders";
import { renderSelect } from "./FormRenders";
import { FieldValues } from "react-hook-form";
import { User } from "@/types/interfaces";

interface DropDownProps {
  user: User,
  onUpdate: (data: any, id: number) => void
}
const DropDown : React.FC<DropDownProps> = ({ user,onUpdate } ) =>  {
  // Creamos un formulario utilizando react-hook-form y el esquema de validación
  const form = useUserForm();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full h-full">
        Edit
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top">
        <DropdownMenuLabel>Edit user\'s information</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data)=>onUpdate(data, user.id))}
            className="space-y-8 w-96"
          >
            <FormField
              control={form.control}
              name="first_name"
              defaultValue={user.first_name}
              render={({ field }: FieldValues) =>
                renderField(field, "Nombre", "Nombre")
              }
            />
            <FormField
              control={form.control}
              name="last_name"
              defaultValue={user.last_name}
              render={({ field }: FieldValues) =>
                renderField(field, "Apellido", "Apellido")
              }
            />
            <FormField
              control={form.control}
              name="email"
              defaultValue={user.email}
              render={({ field }: FieldValues) =>
                renderField(
                  field,
                  "Correo Electrónico",
                  "Correo Electrónico",
                  "email"
                )
              }
            />
            <FormField
              control={form.control}
              name="password"
              defaultValue={user.password}
              render={({ field }: FieldValues) =>
                renderField(field, "Contraseña", "Contraseña", "password")
              }
            />
            <FormField
              control={form.control}
              name="birthday"
              defaultValue={user.birthday}
              render={({ field }: FieldValues) =>
                renderField(
                  field,
                  "Fecha de Nacimiento",
                  "Fecha de Nacimiento",
                  "date"
                )
              }
            />
            <FormField
              control={form.control}
              name="image_url"
              defaultValue={user.image_url}
              render={({ field }: FieldValues) =>
                renderSelect(field, "URL de la Imagen", "Seleccionar imagen")
              }
            />
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
