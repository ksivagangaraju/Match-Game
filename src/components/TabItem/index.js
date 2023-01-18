import './index.css'

const TabItem = props => {
  const {tabItem, isChecked, onClickTab} = props
  const {tabId, displayText} = tabItem
  const tabStyle = isChecked ? 'tab' : ''
  const clickTab = () => {
    onClickTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-button ${tabStyle}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
