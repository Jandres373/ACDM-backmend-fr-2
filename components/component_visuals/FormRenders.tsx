import React from "react";
import { ControllerRenderProps } from "react-hook-form";

import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Función para renderizar inputs planos
export const renderField = (
  field: ControllerRenderProps,
  label: string,
  placeholder: string,
  type: string = "text"
) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input placeholder={placeholder} {...field} type={type} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

// Función para renderizar campos de selección
export const renderSelect = (
  field: ControllerRenderProps,
  label: string,
  placeholder: string
) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={placeholder} {...field} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="https://plus.unsplash.com/premium_photo-1661775940410-1546f3dbeaa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80">
              Relax
            </SelectItem>
            <SelectItem value="https://images.unsplash.com/photo-1652910159836-f04628b84637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80">
              Man
            </SelectItem>
            <SelectItem value="https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80">
              Woman
            </SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
