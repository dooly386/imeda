import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI-Native Architecture',
    description: (
      <>
        Local AI inference assists schematic capture,
        component selection, and PCB routing optimization.
      </>
    ),
  },
  {
    title: 'Offline LLM Integration',
    description: (
      <>
        Fully offline capable. Designed for secure
        engineering environments without cloud dependency.
      </>
    ),
  },
  {
    title: 'High-Performance EDA Engine',
    description: (
      <>
        Real-time rendering and optimized geometry engine
        built for next-generation PCB workflows.
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
