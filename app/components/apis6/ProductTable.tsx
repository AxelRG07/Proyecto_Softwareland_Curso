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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

export function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);

  const [page, setPage] = useState(0);

  const sumTotal = (products: Product[]) => {
    return products
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);
  };

  const fetchProducts = async (pageNumber: number) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const startIndex = pageNumber * 5;
      const endIndex = startIndex + 5;
      const newProducts = data.slice(startIndex, endIndex);

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    } catch (error) {
      console.log(error);
    }
  };

  const resetProducts = () => {
    setProducts([]);
    setPage(0);
    fetchProducts(0);
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  const loadMoreProducts = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  };

  return (
    <Table className="w-full">
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead className="text-center">Precio</TableHead>
          <TableHead className="text-center">Categoría</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow className="" key={product.id}>
            <TableCell className="font-medium px-6">{product.id}</TableCell>
            <TableCell className="px-6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              {product.title}
            </TableCell>
            <TableCell
              className="px-6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={product.description}
            >
              {product.description}
            </TableCell>
            <TableCell className="px-6 text-center">{product.price}</TableCell>
            <TableCell className="px-6 text-center">
              {product.category}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-center">{`$ ${sumTotal(products)}`}</TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Button onClick={loadMoreProducts}>Cargar mas productos</Button>
              {products.length > 5 && (
                <Button onClick={resetProducts}>Reiniciar</Button>
              )}
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
