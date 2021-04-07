import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) =>
    class extends Component {
        state = {
            error: null
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => this.setState({ error: null });

        render() {
            this.setUpInterceptorsIfNotSet();
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

        setUpInterceptorsIfNotSet() {
            if (!this.requestInterceptor) {
                this.requestInterceptor = axios.interceptors.request.use(req => {
                    this.setState({ error: null });
                    return req;
                });
            }
            if (!this.responseInterceptor) {
                this.responseInterceptor = axios.interceptors.response.use(res => res, error => this.setState({ error }));
            }
        }
    };

export default withErrorHandler;