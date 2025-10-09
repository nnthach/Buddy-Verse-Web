import SubscriptionPlan from '~/pages/Admin/components/Body/content/FeatureAndPlan/SubscriptionPlan/SubscriptionPlan';
import styles from './FeatureAndPlan.module.scss';
import Feature from '~/pages/Admin/components/Body/content/FeatureAndPlan/Feature/Feature';

function FeatureAndPlan() {
  return (
    <div className={styles.wrap}>
      <SubscriptionPlan />
      <Feature />
    </div>
  );
}

export default FeatureAndPlan;
