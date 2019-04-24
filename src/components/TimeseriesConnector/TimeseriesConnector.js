import React from 'react';
import { TenantSelector } from "@cognite/gearbox";
import { ReactAuthProvider } from "@cognite/react-auth";
import TimeseriesContainer from '../../containers/TimeseriesContainer/TimeseriesContainer'
import styled from 'styled-components';
import 'antd/dist/antd.css';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TenantSelectorContainer = styled.div`
  max-width: 600px;
  min-width: 400px;
`;

class TimeseriesConnector extends React.Component {
  state = {
    tenant: null
  };

  handleTenantSelect = tenant => {
    this.setState({
      tenant
    });
  }

  render() {

    return (
      <PageContainer>
        {this.state.tenant ? (
          <ReactAuthProvider
            project={this.state.tenant}
            redirectUrl={window.location.href}
            errorRedirectUrl={window.location.href}
            enableTokenCaching
          >
            <TimeseriesContainer />
          </ReactAuthProvider>
        ) : (
            <TenantSelectorContainer>
              <TenantSelector
                onTenantSelected={this.handleTenantSelect}
                initialTenant='itera-dev'
                title='TimeseriesConnector'
              />
            </TenantSelectorContainer>
          )}
      </PageContainer>
    );
  }
}

export default TimeseriesConnector;