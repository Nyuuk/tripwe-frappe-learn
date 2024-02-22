import { SimpleGrid } from "@chakra-ui/react";
import { CardHome } from "../components/CardHome";
import { useFrappeGetDoc, useFrappeGetDocList } from "frappe-react-sdk";

export const Home = () => {
  const { data, isLoading, error } = useFrappeGetDocList("packages");
  console.log(data);

  return (
    <div className="flex justify-center items-center">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <CardHome />
      </SimpleGrid>
    </div>
  );
};
