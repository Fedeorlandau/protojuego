import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard/Dashboard';
import ChangeManagement from 'components/ChangeManagement/ChangeManagement';

export default class ChangeManagementContainer extends Component {
  render() {
    return (
      <Dashboard>
        <ChangeManagement />
      </Dashboard>
    );
  }
}