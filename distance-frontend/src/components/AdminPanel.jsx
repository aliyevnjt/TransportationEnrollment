import React, { useState } from 'react';
import 'materialize-css';
import AdminSearch from './AdminSearch';
import AdminSettings from './AdminSettings';
import AdminUpload from './AdminUpload';

function AdminPanel() {
  const [admPanel, setAdmPanel] = useState(<AdminSearch />);

  const list = ['Search', 'Settings', 'Upload'];
  const updateAdmPanel = (e) => {
    let comp;
    if (e) {
      const element = e.target.id;
      switch (element) {
        case 'Search':
          comp = <AdminSearch />;
          break;
        case 'Settings':
          comp = <AdminSettings />;
          break;
        case 'Upload':
          comp = <AdminUpload />;
          break;
        default:
          comp = <AdminSearch />;
      }
    }
    return setAdmPanel(comp);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s2">
          <div className="row left-align">
            <ul>
              {
              list.map((item) => (
                <li key={item} className="flow-text">
                  <span id={item} onClick={updateAdmPanel}>{item}</span>
                </li>
              ))
            }
            </ul>
          </div>
        </div>
        { admPanel }
      </div>
    </div>
  );
}

export default AdminPanel;
