import { Container } from '../components/Container';
import styles from './page.module.scss';

const DATA = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    date: '2021-10-10',
    author: 'Author 1',
    isChecked: true,
  },
];

export default async function Index() {
  return (
    <div className={styles.page}>
      <Container data={DATA} />
    </div>
  );
}
