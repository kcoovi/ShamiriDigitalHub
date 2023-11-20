// Materials.js

import React from 'react';
import './materials.css';
const Materials = () => {
  return (
    <div className="form-container">
      <div className="form-title">Materials</div>

      <div className="form-section">
        <div className="section-content">
          <div className="section-title">Study Design</div>
          <a href="Resources\Study Design.docx" className="download-icon" download></a>
        </div>
      </div>

      <div className="form-section">
        <div className="section-content">
          <div className="section-title">Consent Form</div>
          <a href="Resources\Consent Form.docx" className="download-icon" download></a>
        </div>
      </div>

      <div className="form-section">
        <div className="section-content">
          <div className="section-title">Fellows' List</div>
          <a href="Resources\Fellows' List.docx" className="download-icon" download></a>
        </div>
      </div>

      <div className="form-section">
        <div className="section-content">
          <div className="section-title">School MOU</div>
          <a href="Resources\School MOU.docx" className="download-icon" download></a>
        </div>
      </div>

      <div className="form-section">
        <div className="section-content">
          <div className="section-title">Fellow Attendance</div>
          <a href="Resources\Fellow Attendance.docx" className="download-icon" download></a>
        </div>
      </div>
    </div>
  );
};

export default Materials;

