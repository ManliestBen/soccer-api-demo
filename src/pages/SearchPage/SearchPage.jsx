import React, { Component } from 'react';
import './SearchPage.css';

class SearchPage extends Component {

    state = {
        invalidForm: true,
        formData: {
            query: '',
        },
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.formData);
      };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <div className="SearchPage">
                    <h3>Player Search (Coming Soon?)</h3>
                    <form className="col s12" ref={this.formRef} autocomplete="off" onSubmit={this.handleSubmit} >
                        <div className="row">
                            <div className="input-field col s12">
                            <input type="text" autocomplete="off" required className="active" id="query" value={this.state.query} name="query" onChange={this.handleChange} />
                            <label htmlFor="query">Name</label>
                            </div>
                        </div>    
                        <button
                            type="submit"
                            className="btn green"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">search</i>
                            Search
                        </button>       
                    </form>
                </div>
            </>
        )
    }
}

export default SearchPage;