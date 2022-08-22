import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { MoveBookContext, SectionContext} from '../../context';

function DropDownButton({ index }) {

    const moveBook = useContext(MoveBookContext);
    const sectionNumber = useContext(SectionContext);

    return (
        <Dropdown>
            <Dropdown.Toggle style={{ borderRadius: "50%", position: 'absolute', top: -20, left: "90%" }} variant="success" id="dropdown-basic" />

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => moveBook(index, sectionNumber, 0)}>Currently Reading</Dropdown.Item>
                <Dropdown.Item  onClick={() => moveBook(index, sectionNumber, 1)}>Want to Read</Dropdown.Item>
                <Dropdown.Item  onClick={() => moveBook(index, sectionNumber, 2)}>Read</Dropdown.Item>
                <Dropdown.Item  onClick={() => moveBook(index, sectionNumber)}>None</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownButton;