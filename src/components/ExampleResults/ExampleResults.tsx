import * as React from 'react';
import { connect } from 'react-redux';

import { Details } from '../../types/Details';
import { AppState } from '../../store/configureStore';
import ExampleResult from './ExampleResult';
import { NoResultsWrapper, NoResults } from './ExampleResultsStyle';

interface ExampleResultsProps {
  details: Details[];
}

class ExampleResults extends React.Component<ExampleResultsProps> {
  render(): {} {
    const { details } = this.props;

    return (
      <React.Fragment>
        <NoResultsWrapper>
          <NoResults>
            {details.length === 0 && 'No Results available'}
          </NoResults>
        </NoResultsWrapper>
        {...details.map(item => <ExampleResult key={item.id} {...item} />)}
      </React.Fragment>
    );
  }
}

const mapState = (state: AppState): ExampleResultsProps => ({
  details: state.data.list || []
});

export default connect(
  mapState,
  null
)(ExampleResults);
