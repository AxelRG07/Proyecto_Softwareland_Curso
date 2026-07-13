import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Sonner() {
  return (
    <Button
      variant="secondary"
      className="w-32 cursor-pointer"
      onClick={() =>
        toast("El evento ha sido registrado", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          position: "top-center",
          className: "!bg-blue-500 !text-white !border-blue-700",
        })
      }
    >
      Mostrar Toast
    </Button>
  );
}
