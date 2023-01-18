import './index.css'

const ImageItem = props => {
  const {imageItem, onClickMatching} = props
  const {id, thumbnailUrl} = imageItem
  const clickMatching = () => {
    onClickMatching(id)
  }
  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={clickMatching}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
