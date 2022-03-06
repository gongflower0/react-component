import { useState } from 'react'

import style from './style.less'

function Item(props){
  const [visiable, setVisiable] = useState(true)
  const { currentPath, setCurrentPath, path } = props

  const nodeName = path.length ? 'Node' : 'Root'

  return (
    <li
      className={`${style.item} ${visiable ? style.show : style.hide}`}
      onClick={(event) => {
        event.stopPropagation()
        setVisiable(!visiable)
      }}
    >
      <span
        onMouseEnter={() => {
          setCurrentPath([...path])
        }}
        onMouseLeave={() => {
          setCurrentPath([])
        }}
        style={{
          color: currentPath.join().indexOf(path.join()) === 0 && currentPath.length !== 0 ? 'red' : ''
        }}
      >{`${nodeName}${path.join('-')}`}</span>
      {props.children}
    </li>
  )
}


export default function TreeList({treeRoot}){
  const [currentPath, setCurrentPath] = useState([])
  const renderItem = (node, path = []) => {
    if(node.children){
      return (
        <Item path={[...path]} currentPath={currentPath} setCurrentPath={setCurrentPath}>
          <ul className={style.list}>
            {node.children.map((item, index) => {
              path.push(index + 1)
              const ret = renderItem(item, path)
              path.pop()
              return ret
            })}
          </ul>
        </Item>
      )
    }else {
      return <Item path={[...path]} currentPath={currentPath} setCurrentPath={setCurrentPath} />
    }
  }

  return (
    <div className={style.container}>
      {renderItem(treeRoot)}
    </div>
  )
}
