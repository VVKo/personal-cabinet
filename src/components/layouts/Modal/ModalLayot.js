
import {Button, Modal} from "react-daisyui";
import {useStateContext} from "../../../contexts/ContextProvider";

const ModalLayot = () => {
    const {state, setShowModal } = useStateContext();
    const {showModal, dataForModal} = state

    const handleCloseModal = () => setShowModal(false);

    const SetBody = () => {
        return (
            dataForModal.body.func !== '' &&
            dataForModal.body.func({
                ...dataForModal.body.data,
            })
        );
    }
    return (
        <Modal  className="w-11/12 max-w-5xl" open={showModal}>
            <Button
                size="sm"
                shape="circle"
                className="absolute right-2 top-2"
                onClick={handleCloseModal}
            >
                ✕
            </Button>
            <Modal.Header className="font-bold">
                {dataForModal.title}
            </Modal.Header>

            <Modal.Body>
                <SetBody />
            </Modal.Body>

            <Modal.Actions>
                <Button onClick={handleCloseModal}>Вийти</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalLayot;
