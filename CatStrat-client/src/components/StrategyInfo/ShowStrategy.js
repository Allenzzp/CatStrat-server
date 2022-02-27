import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function ShowStrategy({ name, description, type, onEdit, onDelete }) {


    return (
        <>
            <details className={type === 'Custom' ? "custom" : "default"}>
                <summary className="summary">
                    <div style={{ paddingTop: '7px' }}>{name}</div>
                    <div><KeyboardArrowDownIcon style={{ width: '30px', height: '30px' }} /></div>

                </summary>
                <section className="footer">
                    <div className="description">{description}</div>
                    <div className="buttons">
                        <div className="strategy-type">{type}</div>
                        {type === 'Custom' &&
                            <div>
                                <Button className="edit" variant="warning" onClick={onEdit}>Edit</Button>
                                <Button className="edit" variant="danger" onClick={onDelete}>Delete</Button>
                            </div>
                        }
                    </div>
                </section>

            </details>


            {/* <details className="info" open>
                    <summary> End-of-day trading</summary>
                    <p>The end-of-day trading strategy involves trading near the close of markets. End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close. </p>
                </details>

                <details className="alert">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details> */}
        </>

    );
}