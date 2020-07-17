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
        },
        players: []
    }

    async componentDidMount() {
        const lineup = await getDreamLineup();
        if (lineup[0]) {this.setState({formData: lineup[0]});}
        
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
        const goalkeeperSelect =[<option key="select1" value="Please Select">Please Select</option>];
        const defenderSelect = [<option key="select2" value="Please Select">Please Select</option>];
        const forwardSelect = [<option key="select3" value="Please Select">Please Select</option>];
        const midfielderSelect = [<option key="select4" value="Please Select">Please Select</option>];
        this.props.players.forEach((player) => {
            if (player.player.type === 'goalkeeper') {goalkeeperSelect.push(<option key={player.player.name} value={player.player.name}>{player.player.name}</option>)}
            if (player.player.type === 'defender') {defenderSelect.push(<option key={player.player.name} value={player.player.name}>{player.player.name}</option>)}
            if (player.player.type === 'forward') {forwardSelect.push(<option key={player.player.name} value={player.player.name}>{player.player.name}</option>)}
            if (player.player.type === 'midfielder') {midfielderSelect.push(<option key={player.player.name} value={player.player.name}>{player.player.name}</option>)}
        })
        

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="goalkeeper">Goalkeeper</label>
                <select name="goalkeeper" id='goalkeeper'onChange={this.handleChange} placeholder="Goalkeeper" value={this.state.formData.goalkeeper} className="browser-default">
                    {goalkeeperSelect}
                </select>
                <label htmlFor="leftFullback">Left Fullback</label>
                <select name="leftFullback" id='leftFullback'onChange={this.handleChange} placeholder="Left Fullback" value={this.state.formData.leftFullback} className="browser-default">
                    {defenderSelect}
                </select>
                <label htmlFor="leftCenterFullback">Left Center Fullback</label>
                <select name="leftCenterFullback" id='leftCenterFullback'onChange={this.handleChange} placeholder="Left Center Fullback" value={this.state.formData.leftCenterFullback} className="browser-default">
                    {defenderSelect}
                </select>
                <label htmlFor="rightCenterFullback">Right Center Fullback</label>
                <select name="rightCenterFullback" id='rightCenterFullback'onChange={this.handleChange} placeholder="Right Center Fullback" value={this.state.formData.rightCenterFullback} className="browser-default">
                    {defenderSelect}
                </select>
                <label htmlFor="rightFullback">Right Fullback</label>
                <select name="rightFullback" id='rightFullback'onChange={this.handleChange} placeholder="Right Fullback" value={this.state.formData.rightFullback} className="browser-default">
                    {defenderSelect}
                </select>
                <label htmlFor="leftMidfielder">Left Midfielder</label>
                <select name="leftMidfielder" id='leftMidfielder'onChange={this.handleChange} placeholder="Left Midfielder" value={this.state.formData.leftMidfielder} className="browser-default">
                    {midfielderSelect}
                </select>
                <label htmlFor="leftCenterMidfielder">Left Center Midfielder</label>
                <select name="leftCenterMidfielder" id='leftCenterMidfielder'onChange={this.handleChange} placeholder="Left Center Midfielder" value={this.state.formData.leftCenterMidfielder} className="browser-default">
                    {midfielderSelect}
                </select>
                <label htmlFor="rightCenterMidfielder">Right Center Midfielder</label>
                <select name="rightCenterMidfielder" id='rightCenterMidfielder'onChange={this.handleChange} placeholder="Right Center Midfielder" value={this.state.formData.rightCenterMidfielder} className="browser-default">
                    {midfielderSelect}
                </select>
                <label htmlFor="rightMidfielder">Right Midfielder</label>
                <select name="rightMidfielder" id='rightMidfielder'onChange={this.handleChange} placeholder="Right Midfielder" value={this.state.formData.rightMidfielder} className="browser-default">
                    {midfielderSelect}
                </select>
                <label htmlFor="leftCenterForward">Left Center Forward</label>
                <select name="leftCenterForward" id='leftCenterForward'onChange={this.handleChange} placeholder="Left Center Forward" value={this.state.formData.leftCenterForward} className="browser-default">
                    {forwardSelect}
                </select>
                <label htmlFor="rightCenterForward">Right Center Forward</label>
                <select name="rightCenterForward" id='rightCenterForward'onChange={this.handleChange} placeholder="Right Center Forward" value={this.state.formData.rightCenterForward} className="browser-default">
                    {forwardSelect}
                </select>
                <button type="submit">Save Changes</button>
                </form>
            </>
        )
    }
}

export default DreamLineup;