import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function UserCard({ user }: { user: any }) {
  return (
    <Card className="my-8 w-full max-w-sm shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {user.name["firstname"]} {user.name["lastname"]}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2"></div>
            <p>
              <span className="font-semibold">Usuario:</span> {user.username}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Telefono:</span> {user.phone}
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>
          <span className="font-semibold">Direccion:</span>{" "}
          {user.address["city"]} {user.address["street"]}{" "}
          {user.address["number"]} {user.address["zipcode"]}
        </p>
      </CardFooter>
    </Card>
  );
}
