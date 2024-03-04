import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

import * as queries from '@/graphql/queries';

import config from '@/amplifyconfiguration.json';




const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});


export default async function fetchData() {
  // 2. Fetch additional todos
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listTodos
  });

  const todos = data.listTodos.items;


  return (
    todos
  );
  
}
