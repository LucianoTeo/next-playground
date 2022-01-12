interface ModalConfirmProps {
  addToWishList: () => void
  onClose: () => void
}

function ModalConfirm({ addToWishList, onClose }: ModalConfirmProps) {
  return (
    <div>
      <span>Deseja adicionar esse item aos favoritos?</span>
      <button type="button" onClick={addToWishList}>
        Sim
      </button>
      <button type="button" onClick={onClose}>
        Nāo
      </button>
    </div>
  )
}

export default ModalConfirm
