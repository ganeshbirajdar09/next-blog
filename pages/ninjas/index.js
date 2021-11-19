import styles from "../../styles/ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return {
    props: { members: data },
  };
};

const Ninjas = ({ members }) => {
  return (
    <>
      <h1>All Blogs</h1>
      {members &&
        members.map((mem) => (
          <Link href={`/ninjas/${mem.id}`} key={mem.id}>
            <a className={styles.single}>
              <h3>{mem.name}</h3>
              <span>{mem.email}</span>
              <h4>{mem.address.geo.lng}</h4>
            </a>
          </Link>
        ))}
    </>
  );
};

export default Ninjas;
