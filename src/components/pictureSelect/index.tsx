import React from 'react'
import { Checkbox, Row, Col } from 'antd'
import styles from './index.module.scss'

type Picture = {
  id: string;
  name: string;
  url: string;
}

interface IProps {
  pictures: Array<Picture>;
  value: Array<string>;
  onChange: (value: Array<string>) => void
}

class PictureSelect extends React.Component<IProps> {
  handleCheck = (id: string) => (e: any) => {
    const { onChange, value } = this.props
    const checked = !value.includes(id)

    if (checked) {
      onChange([...value, id])
    } else {
      onChange(value.filter(v => v !== id))
    }
  }
  checkAll = (e: any) => {
    const { onChange, pictures } = this.props
    const { checked } = e.target

    if (checked) {
      onChange(pictures.map(v => v.id))
    } else {
      onChange([])
    }
  }
  render() {
    const { pictures, value } = this.props
    return <div>
      <Row>
        <Checkbox
          checked={value.length === pictures.length}
          onChange={this.checkAll}
        >已选中{value.length}个文件</Checkbox>
      </Row>
      <Row>
        {pictures.map(item => <Col key={item.id}>
          <Checkbox
            className={styles.checkbox}
            checked={value.includes(item.id)}
            onChange={this.handleCheck(item.id)}
          />
          <img 
            className={styles.image}
            src={item.url} 
            alt={item.name}
            onClick={this.handleCheck(item.id)}/>
        </Col>)}
      </Row>
    </div>
  }
}

export default PictureSelect