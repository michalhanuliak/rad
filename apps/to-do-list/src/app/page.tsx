'use client';
import { useGetToDoLists } from '@rad/infrastructure';
import { Container } from '../components/Container';
import styles from './page.module.scss';

export default function Index() {
  const { data, isLoading } = useGetToDoLists();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <Container data={data} />
    </div>
  );
}
