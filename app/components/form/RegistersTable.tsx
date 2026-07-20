import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EditModal } from "./EditModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface RegistersTableProps {
  data: any[];
  deleteRegister: (index: number) => void;
  updateRegister: (index: number, data: any) => void;
}

export function RegistersTable({
  data,
  deleteRegister,
  updateRegister,
}: RegistersTableProps) {
  return (
    <Table>
      <TableCaption>Registros de usuarios</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Apellido</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Edad</TableHead>
          <TableHead>Genero</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((register: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{register.name}</TableCell>
            <TableCell>{register.lastName}</TableCell>
            <TableCell>{register.email}</TableCell>
            <TableCell>{register.age}</TableCell>
            <TableCell>{register.gender ? "Masculino" : "Femenino"}</TableCell>
            <TableCell>{register.role}</TableCell>
            {/*<TableCell>{register.date}</TableCell*/}
            <TableCell className="flex justify-center gap-3">
              <Button
                type="button"
                variant="destructive"
                onClick={() => deleteRegister(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <EditModal
                index={index}
                data={register}
                updateRegister={updateRegister}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
