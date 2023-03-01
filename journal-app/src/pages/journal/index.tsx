import supabase  from '../../lib/supabaseClient';
import { useSession } from '@supabase/auth-helpers-react';

export async function getStaticProps() {

  const { data: entries, error } = await supabase.from('entries').select('*');

  if (error) {
    console.log(error);
  }

  return {
    props: {
      entries,
    }
  }
}

function Journal({ entries }) {
  const session  = useSession()
  console.log(session)
  console.log(entries)

  return (
    <>
      <div>
        <h1>Hello</h1>
        <p>{JSON.stringify(entries, null, 2)}</p>
        <p>{session?.user?.id}</p>
      </div>
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
