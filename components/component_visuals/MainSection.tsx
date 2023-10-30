"use client";

import React, { useEffect, useState } from "react";
import { UserCard } from "@/components/component_visuals/UserCard";
import OptionsBar from "@/components/component_visuals/OptionsBar";
import { apiConnection } from "@/api_connection/api_crud";
import { User } from "@/types/interfaces";
import { UserForm } from "@/components/component_visuals/UserForm";
import { AxiosResponse } from "axios";

const MainSection = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const connectWithApi = async function () {
      const response: AxiosResponse<User[]> = await apiConnection.get("/users");
      setUsers(response.data);
    };
    connectWithApi();
  }, [users]);

  return (
    <div className="w-full">
      <OptionsBar />
      <div className="flex mt-5">
        <div className="w-5/6 flex items-center">
          <h1 className="text-8xl font-bold text-center">
            
            <p>Visual user\'s database</p>
          </h1>
        </div>
        <div className="w-3/6">
          <UserForm />
        </div>
      </div>
      <div className="h-96 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center"> Users in db </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
        {users &&
          users?.map((user: User) => (
            <UserCard
              key={user.id}
              name={user.first_name}
              image_url={user.image_url}
              user={user}
            />
          ))}
      </div>
    </div>
  );
};

export default MainSection;
