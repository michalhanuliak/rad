'use client';
import { useToDoListAdapter } from '../adapters';
import { Container } from '../components/Container';
import styles from './page.module.scss';

export default function Index() {
  const { tasks, isLoading } = useToDoListAdapter('1');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <Container data={tasks} />
    </div>
  );
}
