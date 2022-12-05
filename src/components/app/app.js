import {Component} from "react";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Bohdan', salary: 10000, increase: false, liked: false, id: 1},
                {name: 'Dasha', salary: 10000, increase: true, liked: false, id: 2},
                {name: 'Anya', salary: 20000, increase: false, liked: false, id: 3}
            ],
            maxId: 4,
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter((item) => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            liked: false,
            id: this.state.maxId
        }
        this.setState(({data, maxId}) => ({
            data: [...data, newItem],
            maxId: maxId + 1
        }))
    }

    onToggleParam = (id, param) => {
        this.setState(({data}) => ({
            data: data.map(item => item.id === id ? {...item, [param]: !item[param]} : item)
        }))
    }

    searchEmp = (items, term) => {
        if (items.length === 0) {
            return items
        }

        return items.filter(item => item.name.includes(term))
    }

    onSearch = (term) => {
        this.setState({term})
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'increase':
                return items.filter(item => item.increase)
            case 'salary':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const employees = data.length
        const award = data.filter(item => item.increase).length
        const visibleData = this.searchEmp(data, term)
        const filteredData = this.filterEmp(visibleData, filter)

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    award={award}
                />

                <div className="search-panel">
                    <SearchPanel onSearch={this.onSearch}/>
                    <AppFilter filter={filter} onFilter={this.onFilter}/>
                </div>

                <EmployeesList
                    data={filteredData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleParam}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;
