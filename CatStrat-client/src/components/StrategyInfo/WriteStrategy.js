import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function WriteStrategy(props) {

    const { name, description, type, setName, setDescription, save, cancel } = props;

    return (
        <>
            <div className="form">
                <div className="summary">
                    <form className="write-name" onSubmit={event => event.preventDefault()} autoComplete="off">
                        <input
                            name="name"
                            type="text"
                            placeholder="Strategy Name"
                            className="name-input"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </form>
                </div>
                <section className="footer">
                    <form className="write-description" onSubmit={event => event.preventDefault()} autoComplete="off">
                        <textarea
                            cols="30" 
                            rows="10"
                            name="name"
                            type="text"
                            placeholder="Strategy Description"
                            className="description-input"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}>

                        </textarea>
                        {/* <input
                            name="name"
                            type="text"
                            placeholder="Strategy Description"
                            className="description-input"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        /> */}
                    </form>
                    <div className="buttons">
                        <div className="strategy-type">{type}</div>
                        <div>
                            <div>
                                <Button className="edit" variant="primary" onClick={() => save(name, description)}>Save</Button>
                                <Button className="edit" variant="danger" onClick={cancel}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}