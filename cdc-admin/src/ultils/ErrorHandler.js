import PubSub from 'pubsub-js';

class ErrorHandler {

    showErrors(errors) {
        errors.json().then(codes => {
            codes.errors.forEach(function(error, index) {
                PubSub.publish('validation', error);
            })
        })
    }

}

export default ErrorHandler;