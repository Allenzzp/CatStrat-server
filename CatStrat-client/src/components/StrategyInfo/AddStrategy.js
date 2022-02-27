import './StrategyInfo.scss';
import Button from 'react-bootstrap/Button';


export default function AddStrategy(props) {

    return (
        <div >
            <details className="custom" onClick={props.onClick}>
                <summary className="add-strat">
                    <img
                        className="add"
                        src="add2.png"
                        alt="Add"
                    />
                </summary>
                <section className="footer">
                    Add Strategy
                </section>
            </details>
        </div>
    );
}