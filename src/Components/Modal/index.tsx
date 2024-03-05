import './index.css'
interface ModalProps{
    onClose: () => void    
    children:React.ReactNode

}
 const Modal: React.FC<ModalProps>=({onClose,children})=>{
        return (
            <>
                <div className="modal-background" onClick={onClose}></div>
                <div className="modal-content">
                        {children}
                        <button className='close' onClick={onClose}> Close</button>
                </div>
            </>
        )
 }
export default Modal