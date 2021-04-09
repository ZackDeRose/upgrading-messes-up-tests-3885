import React from 'react';

import './another-lib-after-migrating.css';

/* eslint-disable-next-line */
export interface AnotherLibAfterMigratingProps {}

export const AnotherLibAfterMigrating = (
  props: AnotherLibAfterMigratingProps
) => {
  return (
    <div>
      <h1>Welcome to another-lib-after-migrating!</h1>
    </div>
  );
};

export default AnotherLibAfterMigrating;
