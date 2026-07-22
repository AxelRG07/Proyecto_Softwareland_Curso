import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { formSchema } from "./RegisterForm";
import RegisterForm from "./RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface EditModalProps {
  index: number;
  data: z.infer<typeof formSchema>;
  updateRegister: (index: number, data: z.infer<typeof formSchema>) => void;
}

export function EditModal({ index, data, updateRegister }: EditModalProps) {
  const [open, setOpen] = useState(false);

  const formIdUnico = `form-edit-perfil-${index}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Realiza cambios en tu perfil aquí. Haz clic en guardar cuando hayas
            terminado.
          </DialogDescription>
        </DialogHeader>

        <RegisterForm
          formId={formIdUnico}
          data={data}
          onSave={(updatedData) => {
            updateRegister(index, updatedData);
            setOpen(false);
          }}
        />

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancelar</Button>} />

          <Button type="submit" form={formIdUnico}>
            Aceptar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
