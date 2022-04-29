import React from 'react';

class PostRequestErrorHandling extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null,
            errorMessage: null
        };
    }

    componentDidMount() {
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://youtube-dl-utils-api.herokuapp.com/get_youtube_video_link_with_captions?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTn6-PIqc4UM&lang=en', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log(data);
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
    }

    render() {
        const { errorMessage } = this.state;
        console.log(errorMessage)
        return (
            <div className="card text-center m-3">
                
            </div>
        );
    }
}

export { PostRequestErrorHandling }; 