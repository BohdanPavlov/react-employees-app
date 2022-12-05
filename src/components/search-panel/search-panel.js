import {Component} from "react";

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value

        this.setState({term})

        this.props.onSearch(term)
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   onChange={this.onUpdateSearch}
                   value={this.state.search}
            />
        )
    }
}

export default SearchPanel;
