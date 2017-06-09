import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const BrandComponent = () => (
    <Grid stackable divided padded columns={1} className="brand">
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">
            <Header.Content>
              Blog
              <Header.Subheader>
                Lorem ipsum dolor sit amet, consectetur.
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);

export default BrandComponent;
