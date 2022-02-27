import './StrategyInfo.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button';

export default function Confirm({ onDelete, cancel }) {


    return (
        <>
            <div className="form delete">
                <div className="summary delete-message">
                    Are you sure you would like to delete?
                </div>
                <section className="footer">
                    <div className="buttons">
                        <div>
                            <Button className="edit" variant="danger" onClick={onDelete} >Yes</Button>
                            <Button className="edit" variant="warning" onClick={cancel} >No</Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}