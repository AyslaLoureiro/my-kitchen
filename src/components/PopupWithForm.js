import ClosePopupIcon from "../images/closepopupicon.png";
import "../blocks/popup.css";

export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  handleSubmit,
}) {
  if (!isOpen) return null;
  return (
    <div className={`popup ${name} ${isOpen ? "popup__open" : ""}`}>
      <div className="overlay"></div>
      <form
        className={`popup__form-title ${name}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="popup__form-itens">
          <div className="popup__button-close">
            <img src={ClosePopupIcon} alt="icon close" onClick={onClose} />
          </div>
          <h2 className="popup__title"> {title} </h2>
          {children}
        </div>
      </form>
    </div>
  );
}
