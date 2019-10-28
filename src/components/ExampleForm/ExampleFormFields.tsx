import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { getAllDetails } from '../../actions/getActions';
import { AppActions } from '../../types/actions';
import { Form, Header, Fields, Input, Button } from './ExampleFormStyle';

interface ExampleFormFieldsProps {
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

interface ExampleFormFieldsState {
  searchValue: string;
}

interface KeyboardEvent {
  key: string;
}

type Props = ExampleFormFieldsProps & LinkDispatchProps;

class ExampleFormFields extends React.Component<Props, ExampleFormFieldsState> {
  state = {
    searchValue: ''
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void =>
    this.setState({ searchValue: e.currentTarget.value });

  onClick = (): void => this.props.getDetails(this.state.searchValue);

  //  TODO: find out why page refreshes on <Enter>
  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;
    key === 'Enter' ? this.props.getDetails(this.state.searchValue) : null;
  };

  render(): {} {
    return (
      <React.Fragment>
        <Form>
          <Header>Which music genre are you searching for?</Header>
          <Fields>
            <Input
              type="text"
              name="search"
              className="search-input"
              autoFocus={true}
              onChange={this.onChange}
              // onKeyUp={this.onKeyUp}
            />
            <Button
              type="button"
              className="button-submit"
              onClick={this.onClick}
            >
              Search
            </Button>
          </Fields>
        </Form>
      </React.Fragment>
    );
  }
}

interface LinkDispatchProps {
  getDetails: (query: string) => void;
}

const mapDispatch = (
  dispatch: ThunkDispatch<unknown, unknown, AppActions>
): LinkDispatchProps => ({
  getDetails: bindActionCreators(getAllDetails, dispatch)
});

export default connect(
  null,
  mapDispatch
)(ExampleFormFields);
