import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import Button from "./toolbox/Button";

function AdminUpload() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      TODO: add the upload instructions here
      <br />
      <Button label="UPLOAD" type="submit" />
    </div>
  );
}

export default AdminUpload;
