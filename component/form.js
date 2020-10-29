class LabText extends React.Component{
    render(){
        return(
            <div className="labtext">
                <Label content = {this.props.label}/>
                <TextField
                    name = {this.props.name}
                    placeholder = {this.props.placeholder}
                    onChange = {this.props.onChange}    
                    content = {this.props.content}
                    type = {this.props.type}
                />
            </div>
        )
    }
}

class Label extends React.Component{
    render(){
        return(
            <label>{this.props.content}</label>
        )
    }
}

class TextField extends React.Component{
    render(){
        return(
            <input
                onChange = {(e) => this.props.onChange(e)}
                type = {this.props.type}
                name = {this.props.name}
                placeholder = {this.props.placeholder}
                value = {this.props.content}
                required
                >
            </input>
        )
    }
}