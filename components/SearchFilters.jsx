import { useEffect, useState } from "react";

import {
  Flex,
  Select,
  Box,
  Input,
  Text,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";

import Router from "next/router";
import { mdCancel } from "react-icons/md";
import Image from "next/image";
import { getFilterValues, filterData } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = () => {};

  return (
    <Flex bg="gray.100" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            w="fit-content"
            p="2"
            placeholder={filter.placeholder}
          ></Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
