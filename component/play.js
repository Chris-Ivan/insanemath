class Clock extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="clock">{this.props.value}</div>
            </React.Fragment>
        )
    }
}

class Set extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="soal">
                    <h2>Soal {parseInt(this.props.nomor) + 1}</h2>
                    {this.props.soal}
                </div>
                <div className="options">A. {this.props.options[0]}</div>
                <div className="options">B. {this.props.options[1]}</div>
                <div className="options">C. {this.props.options[2]}</div>
                <div className="options">D. {this.props.options[3]}</div>
            </React.Fragment>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.skip = this.skip.bind(this);
    }
    state={
        name : user,
        timer : 2,
        counter : 0,
        startup : 1,
        soal : "",
        options : ["A","B","C","D"],
        jawaban : [],
    }
    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState({
                timer : parseInt(this.state.timer) - 1,
                startup : parseInt(this.state.startup) - 1
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    skip(){
        let ans = this.state.jawaban;
        ans.push("X");
        this.setState({
            counter : parseInt(this.state.counter) + 1,
            jawab : ans,
        })
    }
    render(){
        if(parseInt(this.state.startup)>0){
            return(
                <React.Fragment>
                    <div className="transition">
                        <img src="img\index\logo.png" alt="Insane Math" className="logo-transisi"></img>
                        <h3>GET READY</h3>
                        {this.state.startup}
                    </div>
                </React.Fragment>
            )
        }else{
            if(this.state.timer>0){
                return(
                    <React.Fragment>
                        <div className="account">
                            Ciayo {this.state.name}
                        </div>
                        <Clock value={this.state.timer}/>
                        <Set nomor={this.state.counter} soal={this.state.soal} options={this.state.options}/>
                        <div className="skip" onClick={()=>this.skip()}>SKIP</div>
                    </React.Fragment>
                )
            }else{
                $("#score").modal()
                return(
                    <React.Fragment>
                        <div className="account">
                            Ciayo {this.state.name}
                        </div>
                        <Clock value={this.state.timer}/>
                        <Set nomor={this.state.counter} soal={this.state.soal} options={this.state.options}/>
                        <div className="skip" onClick={()=>this.skip()}>SKIP</div>
                        <Modal id="score" type="score"/>
                    </React.Fragment>
                )
            }
        }
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));