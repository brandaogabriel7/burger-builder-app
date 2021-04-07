import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) =>
    class extends Component {
        state = {
            error: null
        };

        errorConfirmedHandler = () => this.setState({ error: null });

        render() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => this.setState({ error }));
            return (
                <Fragment>
                    <Modal
                        show={!!this.state.error}
                        modalClosed={this.errorConfirmedHandler} >
                        {!!this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    };

export default withErrorHandler;