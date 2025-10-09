import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open-source',
    description: (
      <>
        RPG Creator is fully open-source, meaning that you can see and edit,
        the <a href="https://github.com/Ward727a/RPGCreator">engine source code</a>, and yes, even this <a href="https://github.com/Ward727a/rpgcreator-web">website is open-source</a>!
      </>
    ),
  },
  {
    title: 'Free',
    description: (
      <>
        RPG Creator is totally free, and will always be.<br/>
        No extension, update, or tool developped by us will be locked behind a paywall.
      </>
    ),
  },
  {
    title: 'Modular',
    description: (
      <>
        RPG Creator is developped to be modular, so if you want to add your own,
        source code, you can without having to rebuild the entire engine!
      </>
    ),
  },
];
/*
 * For now I removed the image for feature section, as we don't have any picture to set inside
 *
 * code:
 *
 *  <div className="text--center">
 *    <Svg className={styles.featureSvg} role="img" />
 *  </div>
 *
 */
function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <Heading as="h2">What define RPG Creator</Heading>
        </div>
        <hr/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
