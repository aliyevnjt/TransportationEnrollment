import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min';

function AdminSettings() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      AdminSettings
    </div>
  );
}

export default AdminSettings;
