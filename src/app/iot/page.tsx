'use client'
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';



type UnitConversion = {
  
};


  
const data: UnitConversion[] = [
    {
        timestamp: '2019-05-03T18:18:13.683Z',
        poin4: 123500,
        point1: 123,
        poin2: 123500,
        poin3: 123500
      },
      {
        timestamp: '2019-06-03T18:15:00.683Z',
        poin2: 123500,
        poin1: 123500,
        poin3: 123500
      }
];

const columnHelper = createColumnHelper<UnitConversion>();
const mykey = [ 'timestamp', 'poin4', 'point1', 'poin2', 'poin3', 'poin1' ]

const columns = mykey.map(key => columnHelper.accessor(key as any, {
    cell: (info) => info.getValue(),
    header: key.charAt(0).toUpperCase() + key.slice(1)
  }));
  


export default function IotPage() {
    return(
    <ChakraProvider>
    <DataTable columns={columns} data={data} />
    </ChakraProvider>)  

}