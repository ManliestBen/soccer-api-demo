import React, { Component } from 'react';
import { getDreamLineup, saveDreamLineup } from '../../services/api-search';

class DreamLineup extends Component {
    state = {
        formData: {
            goalkeeper: '',
            leftFullback: '',
            leftCenterFullback: '',
            rightCenterFullback: '',
            rightFullback: '',
            leftMidfielder: '',
            leftCenterMidfielder: '',
            rightCenterMidfielder: '',
            rightMidfielder: '',
            leftCenterForward: '',
            rightCenterForward: '',
        }
    }

    async componentDidMount() {
        const lineup = await getDreamLineup();
        this.setState({formData: lineup[0]})
    }

    handleSaveLineup = async formData => {
        await saveDreamLineup(formData)
        .then(()=>alert('changes saved'))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.handleSaveLineup(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <input name="goalkeeper" placeholder="Goalkeeper" type="text" value={this.state.formData.goalkeeper} onChange={this.handleChange} />
                <input name="leftFullback" placeholder="Left Fullback" type="text" value={this.state.formData.leftFullback} onChange={this.handleChange} />
                <input name="leftCenterFullback" placeholder="Left Center Fullback" type="text" value={this.state.formData.leftCenterFullback} onChange={this.handleChange} />
                <input name="rightCenterFullback" placeholder="Right Center Fullback" type="text" value={this.state.formData.rightCenterFullback} onChange={this.handleChange} />
                <input name="rightFullback" placeholder="Right Fullback" type="text" value={this.state.formData.rightFullback} onChange={this.handleChange} />
                <input name="leftMidfielder" placeholder="Left Midfielder" type="text" value={this.state.formData.leftMidfielder} onChange={this.handleChange} />
                <input name="leftCenterMidfielder" placeholder="Left Center Midfielder" type="text" value={this.state.formData.leftCenterMidfielder} onChange={this.handleChange} />
                <input name="rightCenterMidfielder" placeholder="Right Center Midfielder" type="text" value={this.state.formData.rightCenterMidfielder} onChange={this.handleChange} />
                <input name="rightMidfielder" placeholder="Right Midfielder" type="text" value={this.state.formData.rightMidfielder} onChange={this.handleChange} />
                <input name="leftCenterForward" placeholder="Left Center Forward" type="text" value={this.state.formData.leftCenterForward} onChange={this.handleChange} />
                <input name="rightCenterForward" placeholder="Right Center Forward" type="text" value={this.state.formData.rightCenterForward} onChange={this.handleChange} />
                <button type="submit">Save Changes</button>
                </form>
            </>
        )
    }
}

export default DreamLineup;