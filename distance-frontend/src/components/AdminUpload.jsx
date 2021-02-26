import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min';

function AdminUpload() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      AdminUpload
    </div>
  );
}

export default AdminUpload;
