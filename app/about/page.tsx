import Image from "next/image";

import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        asperiores, quia alias ipsum quod quam a, dolorem soluta ad, facilis sed
        quas necessitatibus itaque adipisci doloremque. Quia quis fuga aperiam.
      </p>
      <Image
        src={"/images/charizard.png"}
        width={300}
        height={300}
        alt="Charizard"
      ></Image>
    </div>
  );
}
