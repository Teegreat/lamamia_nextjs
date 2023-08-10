import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Button from "../../components/Button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nisi
            expedita? Animi cumque modi ipsum ratione fugiat, dolorem porro
            doloribus beatae culpa adipisci eius rem,
            <br />
            <br />
            aliquam consectetur nam doloremque eos sunt. Non dolore sint
            consequuntur illum sunt, ab eveniet amet pariatur harum itaque
            libero reiciendis! Quisquam reprehenderit explicabo repellendus
            autem.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nemo
            neque eveniet culpa nostrum at vel necessitatibus voluptatem itaque
            magni.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handly Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
