import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', content: 'Все сотрудники'},
        {name: 'increase', content: 'На повышение'},
        {name: 'salary', content: 'З/П больше 1000$'},
    ]

    const {filter, onFilter} = props

    const buttons = buttonsData.map(({name, content}) => {
        const active = filter === name
        const activeClass = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                key={name}
                type="button"
                className={`btn ${activeClass}`}
                onClick={() => onFilter(name)}
            >
                {content}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
