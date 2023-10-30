"use client";

import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import useUserForm from "@/hooks/form.hooks";
import { renderField } from "./FormRenders";
import { renderSelect } from "./FormRenders";
import { onSubmit } from "@/components/component_functions/crud_control";

export function UserForm() {
  const form = useUserForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-96 mx-auto shadow-lg p-5"
      >
        <p className="text-center font-bold">Create new user</p>
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }: FieldValues) =>
            renderField(field, "First name", "First name")
          }
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }: FieldValues) =>
            renderField(field, "Last name", "Last name")
          }
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }: FieldValues) =>
            renderField(field, "Email", "Email", "email")
          }
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }: FieldValues) =>
            renderField(field, "Password", "password", "password")
          }
        />
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }: FieldValues) =>
            renderField(field, "Birthday", "birthday", "date")
          }
        />
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }: FieldValues) =>
            renderSelect(field, "Image URL", "image_url")
          }
        />
        <div className="flex justify-center">
          <Button type="submit" className="w-full md:w-auto">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
