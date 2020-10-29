class ModalContent extends React.Component{
    render(){
        switch(this.props.type){
            case "login":
                return(
                    <Login login={true}/>
                );break;
            case "signin":
                return(
                    <Login login={false}/>
                );break;
            case "highscore":
                return(
                    <HighScore/>
                );break;
            case "score":
                return(
                    <Score/>
                );break;
            case "play":
                return(
                    <Play/>
                );break;
            case "score":
                return(
                    <Score/>
                );break;
            default:
                return(
                    <Login login={true}/>
                );
        }
    }
}

class Modal extends React.Component{
    render(){
        return(
            <div className="modal fade" id={this.props.id} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">{this.props.id}</h2>
                        </div>
                        <div className="modal-body">
                            <ModalContent type={this.props.type}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="close_btn" data-dismiss="modal">Close<div className="bubble"></div></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//this is for login and signup
class Login extends React.Component{
    constructor(props){
        super(props);
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.changeForm=this.changeForm.bind(this);
    }
    state={
        login : true,
        username : "",
        password : "",
        passwordConfirmed : "",
    }
    onChangeHandler = (e) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value});
    }
    changeForm(n){
        this.setState({login : n})
    }
    render(){
        if(this.state.login){
            return(
                <form method="post" action="login.php">
                    <LabText
                        label="Username "
                        name="username"
                        placeholder="Please input your username"
                        type="text"
                        onChange={this.onChangeHandler}
                        content={this.state.username}
                    />
                    <LabText
                        label="Password "
                        name="password"
                        placeholder=""
                        type="password"
                        onChange={this.onChangeHandler}
                        content={this.state.password}
                    />
                    <input type="submit" value="login"></input>
                    <div className="button" onClick = {()=>this.changeForm(false)}>Don't have account?</div>
                </form>
            )
        }else{
            return(
                <form method="post" action="signup.php">
                    <LabText
                        label="Username "
                        name="username"
                        type="text"
                        placeholder="Please input your username"
                        onChange={this.props.onChange}
                        content={this.state.username}
                    />
                    <LabText
                        label="Password "
                        name="password"
                        type="password"
                        placeholder=""
                        onChange={this.props.onChange}
                        content={this.state.password}
                    />
                    <LabText  className="cekpassword"
                        label="Confirm Password "
                        name="passwordconfirm"
                        type="password"
                        placeholder=""
                        onChange={this.props.onChange}
                        content={this.state.passwordConfirmed}
                    />
                    <input type="submit" value="signup"></input>
                    
                    <div className="button" onClick={()=>this.changeForm(true)}>Have exisiting account?</div>
                </form>
            )
        }
    }
}

//this is for playing
class Play extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h3>CLASSIC</h3>
                <a className="mode" href="main.php?level=SD">Elementary<div className="bubble"></div></a>
                <a className="mode" href="main.php?level=SMP">Junior High<div className="bubble"></div></a>
                <a className="mode" href="main.php?level=SMA">Senior High<div className="bubble"></div></a>
                <br/>
                <h3>INSANE</h3>
                <a className="mode-locked" href="main.php?level=nonsense">Nonsense
                    <img src="img\index\lock.png" alt="locked" className="locked"></img>
                </a>
                <a className="mode-locked" href="main.php?level=reality">Reality
                    <img src="img\index\lock.png" alt="locked" className="locked"></img>
                </a>
            </React.Fragment>
        )
    }
}

//this is for highscore
class HighScore extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h3>Classic</h3>
                <h4>SD</h4>
                <p>1. Anita Alni
                <br/>2. F.T. Akbar
                <br/>3. Ka Cia</p>
                <h4>SMP</h4>
                <p>1. Anita Alni
                <br/>2. F.T. Akbar
                <br/>3. Ka Cia</p>
                <h4>SMA</h4>
                <p>1. Anita Alni
                <br/>2. F.T. Akbar
                <br/>3. Ka Cia</p>
                <br/>
                <h3>Insane</h3>
                <h4>Nonsense</h4>
                <p>1. Andy Octavian Latief
                <br/>2. Aleams Barra
                <br/>3. Pak Umar</p>
                <h4>Reality</h4>
                <p>1. Andy Octavian Latief
                <br/>2. Aleams Barra
                <br/>3. Pak Umar</p>
            </React.Fragment>
        )
    }
}

class Score extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h2>Your Score :</h2>
                <h1>1975</h1>
                <h3>Keep up the good work!</h3>
                <hr/>
                <h3>Answered : 16/17</h3>
                <h3>Correct : 13(81.25%)</h3>
                <a className="Button" href="index.php">HOME</a>
            </React.Fragment>
        )
    }
}

