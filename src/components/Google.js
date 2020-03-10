import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    // responseFacebook = response => {
    //     console.log(response);
    //     // console.log('Kamal')
    //     if(response.status !== 'unknown')
    //     this.setState({
    //         auth: true,
    //         name: response.name,
    //         picture: response.picture.data.url
    //     });
        
    // }

    // componentClicked = () => {
    //     console.log('Facebook btn clicked');
    // }

    responseGoogle = (response) => {
        console.log('Samad');
        console.log(response);
    }

    render(){
        let googleData;

        this.state.auth ?
        googleData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                </div>
            ) : 
            googleData = (<GoogleLogin
                clientId="350252060392-c5ijboco8fqs9u9gemub82u39urr7sif.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle} />);

        return (
            <>
                {googleData}
            </>
        );
    }
}