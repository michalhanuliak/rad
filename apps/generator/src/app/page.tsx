'use client';
import { useState } from 'react';
import styles from './page.module.scss';

import { Flex, Input, Layout } from '@rad/ui';

enum UiType {
  ATOMS = 'atoms',
  MOLECULES = 'molecules',
  ORGANISMS = 'organisms',
  TEMPLATES = 'templates',
}

type DesignBlocks = Record<UiType, string[]>;

export default function Index() {
  const [blocks, setBlocks] = useState<DesignBlocks>({
    atoms: [],
    molecules: [],
    organisms: [],
    templates: [],
  });

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setBlocks((prev) => ({ ...prev, [name]: value.split(' ') }));
  };

  const makeSingular = (string: string) => string.slice(undefined, -1);

  const createScript = (type: UiType, name: string) =>
    `pnpm run ui:gen:${makeSingular(String(type))} ${name}`;

  const uiGenerator = (type: UiType) =>
    blocks?.[type]?.reduce((prev, atom) => {
      prev += `${createScript(type, atom)} \n`;
      return prev;
    }, '');

  return (
    <Layout className={styles.layout}>
      <Layout.Content className={styles.content}>
        <Flex gap="1rem">
          <Input.TextArea
            rows={4}
            placeholder="Atoms"
            name={UiType.ATOMS}
            onChange={handleChange}
          />
          <Input.TextArea
            rows={4}
            placeholder="Molecules"
            name={UiType.MOLECULES}
            onChange={handleChange}
          />
          <Input.TextArea
            rows={4}
            placeholder="Organisms"
            name={UiType.ORGANISMS}
            onChange={handleChange}
          />
          <Input.TextArea
            rows={4}
            placeholder="Templates"
            name={UiType.TEMPLATES}
            onChange={handleChange}
          />
        </Flex>
      </Layout.Content>

      <Layout.Content className={styles.content}>
        <Flex gap="1rem" vertical>
          {blocks.atoms.length > 0 && (
            <pre className={styles.output}>{uiGenerator(UiType.ATOMS)}</pre>
          )}
          {blocks.molecules.length > 0 && (
            <pre className={styles.output}>{uiGenerator(UiType.MOLECULES)}</pre>
          )}
          {blocks.organisms.length > 0 && (
            <pre className={styles.output}>{uiGenerator(UiType.ORGANISMS)}</pre>
          )}
          {blocks.templates.length > 0 && (
            <pre className={styles.output}>{uiGenerator(UiType.TEMPLATES)}</pre>
          )}
        </Flex>
      </Layout.Content>
    </Layout>
  );
}
