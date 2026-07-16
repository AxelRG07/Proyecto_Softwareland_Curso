import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faDumbbell,
  faMobileScreen,
  faUserCheck,
  faFutbol,
  faBasketball,
  faTableTennisPaddleBall,
  faFileSignature,
  faHouseUser,
  faDog,
  faServer,
  faPenRuler,
  faDatabase,
  faCode,
  faNetworkWired,
  faCartShopping,
  faMapLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../data/registros.json";
import { TableModal } from "./TableModal";

export function TableDemo() {
  const mapaIconos: { [key: string]: any } = {
    faPaw,
    faDumbbell,
    faMobileScreen,
    faUserCheck,
    faFutbol,
    faBasketball,
    faTableTennisPaddleBall,
    faFileSignature,
    faHouseUser,
    faDog,
    faReact,
    faGithub,
    faServer,
    faPenRuler,
    faDatabase,
    faCode,
    faNetworkWired,
    faCartShopping,
    faMapLocationDot,
    faUsers,
  };

  return (
    <Table>
      <TableCaption>Table DEMO softwareland.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Number</TableHead>
          <TableHead className="text-center">Task</TableHead>
          <TableHead className="text-center">Description</TableHead>
          <TableHead className="text-center">Icon</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((task, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-center">{task.titulo}</TableCell>
            <TableCell className="text-center">{task.descripcion}</TableCell>
            <TableCell className="text-center">
              {<FontAwesomeIcon icon={mapaIconos[task.icono]} />}
            </TableCell>
            <TableCell className="text-center">
              <TableModal icon={mapaIconos[task.icono]} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
