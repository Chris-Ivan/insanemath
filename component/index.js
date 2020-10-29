class App extends React.Component{
    constructor(props){
        super(props);
        this.changeModal = this.changeModal.bind(this);
    }
    state={
        user : user,
        modal : 'login',
    }
    changeModal(n){
        this.setState({modal : n}, ()=> this.activateModal(n));
    }
    activateModal(n){
        $("#"+n).modal();
    }
    render(){
        if(this.state.user=="anonymous"){
            return(
                <React.Fragment>
                    <div className="header">
                        <img src="img\index\logo.png" alt="Insane Math" className="logo"></img>
                    </div>
                    <div className="account">
                        <div class="profile-picture"><img src="img\index\default-user.jpg" alt="profile" className="user-default"></img></div>
                        <div className="profile">
                        <h5>Welcome back, <br></br>{this.state.user}</h5></div>
                        <div className="button" onClick={()=>this.changeModal("login")}>
                            Login
                            
                        </div>
                    </div>
                    <div className="options">
                        <div className="play button" onClick={()=>this.changeModal("play")}>
                            PLAY
                            <div className = "bubble"></div>
                        </div>
                        <div className="highscore button" onClick={()=>this.changeModal("highscore")}>
                            HIGHSCORE
                            <div className = "bubble"></div>
                        </div>
                    </div>
                    <Modal id={this.state.modal} header={this.state.header} type={this.state.modal}/>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <img src="Logo.jpg" alt="main_logo"></img>
                    <div className="header">
                        <h1>Welcome back, {this.state.user}</h1>
                    </div>
                    <div className="account">
                        <input type="submit" className="button" name="logout">Logout</input>
                    </div>
                    <div className="options">
                        <div className="play">
                        </div>
                        <div className="highscore">
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));