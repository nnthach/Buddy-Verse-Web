import styles from './AboutUs.module.scss';
import leafImg from '~/assets/images/leaf.webp';
import chatImg from '~/assets/images/chat.webp';
import safeImg from '~/assets/images/safe.webp';
import connectImg from '~/assets/images/connect.webp';
import { forwardRef } from 'react';

const AboutUs = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.container}>
        <h5>About Buddy Verse</h5>
        <p className={styles.tagline}>Discover the story and vision behind BuddyVerse.</p>
        <p className={styles['about-text']}>
          BuddyVerse is a new social platform designed to bring people closer together through empathy, support, and
          meaningful companionship. In today’s fast-paced digital world, many individuals experience loneliness and
          isolation despite being more “connected” than ever. BuddyVerse aims to change that by creating a safe and
          welcoming space where people can form authentic relationships, share experiences, and find encouragement from
          others who truly understand.
          <br />
          <br />
          Unlike traditional social networks that focus mainly on entertainment or surface-level interactions,
          BuddyVerse emphasizes emotional well-being and genuine communication. Our mission is to empower users to build
          stronger friendships, discover like-minded communities, and feel supported through every stage of life.
          <br />
          <br />
          Whether it’s through one-on-one conversations, group activities, or shared journeys of self-growth, BuddyVerse
          is more than just a platform—it’s a movement toward kindness, belonging, and human connection.
        </p>

        <div className={styles.content}>
          <div className={styles['content-box']}>
            <img src={connectImg} />
            <p className={styles['content-box-text']}>
              Find compatible friends based on interests, personality, and connection needs.
            </p>
          </div>
          <div className={styles['content-box']}>
            <img src={chatImg} />
            <p className={styles['content-box-text']}>Chat and share stories freely and comfortably.</p>
          </div>
          <div className={styles['content-box']}>
            <img src={leafImg} />
            <p className={styles['content-box-text']}>
              Build lasting bonds through interactive activities and mutual support.
            </p>
          </div>
          <div className={styles['content-box']}>
            <img src={safeImg} />
            <p className={styles['content-box-text']}>
              Stay safe and secure with smart moderation and reporting systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
