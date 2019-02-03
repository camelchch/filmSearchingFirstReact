import React , { Component }from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import ImageResults from '../image-result/ImageResults';

class Search extends Component {
    state = {
        searchText: '',
        apiUrl: 'http://api.tvmaze.com/search/shows?q=',
        images:[],
    };

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val},() => {
            if (val === ''){
                this.setState({images:[]});
            } else {
                axios.get(`${this.state.apiUrl}${this.state.searchText}`
                    )
                    .then(res => this.setState({ images: res.data }))
                    .catch(err => console.log(err));
            }
        });
    };

    onAmountChange = (e, index, value) => this.setState({amout:value});
    render() {
        return (
            <div>
                <TextField
                    name = "searchText"
                    value={this.state.searchText}
                    onChange = {this.onTextChange}
                    floatingLabelText="Search For Films"
                    fullWidth={true}
                    textareaStyle={{alignItems:'center'}}
                />
            <br/>

            {this.state.images.length > 0? (<ImageResults images={this.state.images} choosen={false}/>) : null}

            </div>
        )
    }
}

export default Search;
