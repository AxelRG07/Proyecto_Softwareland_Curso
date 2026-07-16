import { BluetoothIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function TableModal({ icon }: { icon: IconProp }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant="outline" size="icon">
            <FontAwesomeIcon icon={faExpand} />
          </Button>
        }
      />

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <FontAwesomeIcon className="text-4xl" icon={icon} />
          </AlertDialogMedia>
          <AlertDialogTitle>Ícono de la tarea</AlertDialogTitle>
          <AlertDialogDescription>Cambiar ícono</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
