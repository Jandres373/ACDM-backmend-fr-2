"use client";

import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DropDown from "@/components/component_visuals/DropDown";

//functions imports
import { handleDelete } from "@/components/component_functions/crud_control";
import { onUpdate } from "../component_functions/crud_control";
import { useEffect } from "react";
import { User } from "@/types/interfaces";
import Image from "next/image";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;
interface UserCardProps extends CardProps {
  key: number;
  name: string;
  image_url: string;
  user: User;
}

export function UserCard({ className, ...props }: UserCardProps) {
  useEffect(() => {
    // empty effect for re-rendering
  }, [props.user]);

  return (
    <Card className={cn("hover:bg-red-50 ", className)} {...props}>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>User registered in the database.</CardDescription>
        <div className="w-full flex justify-center">
          <figure className="rounded-lg overflow-hidden">
            <Image src={props.image_url} alt="" width={300} height={200} />
          </figure>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between gap-5">
                  <h5 className="font-bold">Last name:</h5>{" "}
                  <p>{props.user.last_name}</p>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <h5 className="font-bold">Email:</h5>{" "}
                  <p>{props.user.email}</p>
                </div>
                <div className="flex items-center justify-between gap-5">
                  <h5 className="font-bold">Birthday:</h5>{" "}
                  <p>{props.user.birthday}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={() => handleDelete(props.user.id)}
        >
          <CheckIcon className="mr-2 h-4 w-4" /> Delete
        </Button>
        {/* activador del menu de editar*/}
        <Button className="w-full p-0 m-0" variant={"outline"}>
          <DropDown user={props.user} onUpdate={onUpdate} />
        </Button>
      </CardFooter>
    </Card>
  );
}
