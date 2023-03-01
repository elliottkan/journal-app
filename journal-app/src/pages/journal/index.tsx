import { supabase } from './../../lib/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';

function Journal({ entries }) {
  const user = useUser()
  console.log(user)

  return (
    <>
      <h1>email = {user.email} and id ={user.id}</h1>
      {/* <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul> */}
    </>
  );
}

// export async function getServerSideProps() {
//   let { data } = await supabase.from('entries').select()
//   console.log(data)

//   return {
//     props: {
//      entries: data
//     },
//   }
// }

export default Journal;
