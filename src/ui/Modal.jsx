import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="mx-24 rounded-md p-4 shadow-md backdrop:bg-stone-900/90 md:mx-24"
    >
      {children}
      <form method="dialog" className="mt-4 text-right hover:font-semibold">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export default Modal;
