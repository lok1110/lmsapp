import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';
// 1. Add the queries as an import
import * as queries from '@/graphql/queries';
import Link from 'next/link';
import config from '@/amplifyconfiguration.json';

import * as React from "react";



const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

// async function createTodo(formData: FormData) {
//   'use server';
//   console.log(formData)
//   const { data } = await cookiesClient.graphql({
//     query: mutations.createTodo,
//     variables: {
//       input: {
//         pointName: formData.get('pointName')?.toString() ?? '',
//         timestamp: formData.get('timestamp')?.toString() ?? '',
//         siteName: formData.get('siteName')?.toString() ?? '',
//         value: Number(formData.get('value')) ?? 0
//       }
//     }
//   });

//   console.log('Created Todo: ', data?.createTodo);

//   revalidatePath('/');
// }


export default async function Home() {
  // 2. Fetch additional todos
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listTodos
  });

  const todos = data.listTodos.items;

  let grouped: { [key: string]: number }[] = Object.values(todos.reduce((result:any, currentValue:any) => {
    let timestamp = currentValue['timestamp'];
    if (!result[timestamp]) {
      result[timestamp] = {timestamp: timestamp};
    }
    result[timestamp][currentValue['pointName']] = currentValue['value'];
    return result;
  }, {}));

 console.log(grouped)
 const groupedKey = Object.keys(Object.assign({}, ...grouped));
 console.log(groupedKey);
  return (
    
    <div
    style={{
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'center',
      marginTop: '100px'
    }}
  >
    {/* ... other code ... */}
    <Link href="/iot">iot</Link>
    {/* Display todos */}
   
  </div>
  );
  
}
