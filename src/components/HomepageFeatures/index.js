import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plug-and-Play Auction Microservice',
    Svg: require('@site/static/img/puzzle.svg').default,
    description: (
      <>
        Designed to drop into your existing system with minimal setup. Self-contained and ready to handle all auction logic out of the box.
      </>
    ),
  },
  {
    title: 'Live Bidding with SignalR',
    Svg: require('@site/static/img/bid.svg').default,
    description: (
      <>
        Real-time communication using SignalR enables responsive, event-driven auction updates.
      </>
    ),
  },
  {
    title: 'Fully Configurable & Extensible',
    Svg: require('@site/static/img/gear.svg').default,
    description: (
      <>
        Customize permissions, schedules, limits, and integrations via configuration files. Easily extend with your own business rules.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
