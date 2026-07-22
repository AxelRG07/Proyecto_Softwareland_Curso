"use client";
import { Button } from "@/components/ui/button";
import { UserCard } from "./UserCard";
import { useState } from "react";

export default function ({ id }: { id: number }) {
  const [user, setUser] = useState(null);
  //Peticion con fetch clasico(promesas)
  {
    /*const fetchUser = () => {
        fetch(`https://fakestoreapi.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUsuario(data))
        .catch(error => console.log(error))
    }*/
  }

  //Peticion con fetch usando async await
  const fetchUser = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      const user = await response.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button variant="secondary" onClick={fetchUser}>
        Consultar usuario
      </Button>
      {user && <UserCard user={user} />}
    </div>
  );
}
