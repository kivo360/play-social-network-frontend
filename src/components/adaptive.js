// import { React } from 'react';
import { Col, Row } from 'antd';
import React, { PureComponent } from 'react';




class AdaptiveContainer extends PureComponent {
  render(){
    return (
      <div style={{paddingTop:"2rem", paddingDown:"2rem"}}>
        <Row gutter={24}>
            <Col xs={1} sm={4} md={2} lg={4} xl={3}></Col>
            <Col 
              xs={22} sm={16} md={20} lg={16} xl={18}
              style={{padding:"0 1rem"}}
            >
              {this.props.children}
            </Col>
            <Col xs={1} sm={4} md={2} lg={4} xl={3}></Col>
        </Row>
    </div>
    )
  }
}


export class AdaptiveHalfCol extends PureComponent {
  render(){
    return (
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        {this.props.children}
      </Col>
    )
  }
}

export class Adaptive8 extends PureComponent {
  render(){
    return (
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        {this.props.children}
      </Col>
    )
  }
}

export class Adaptive16 extends PureComponent {
  render(){
    return (
      <Col xs={24} sm={24} md={12} lg={16} xl={16}>
        {this.props.children}
      </Col>
    )
  }
}



export class AdaptiveCardGridContainer extends PureComponent {
  render(){
    return (
      <div style={{padding:"2rem"}} >
        <Row gutter={16}>
            <Col xs={1} sm={2} md={4} lg={6} xl={6}></Col>
            <Col 
              xs={24} sm={20} md={16} lg={12} xl={12}
              style={{padding:"0 1rem"}}
            >
              {this.props.children}
            </Col>
            <Col xs={1} sm={2} md={4} lg={6} xl={6}></Col>
        </Row>
    </div>
    )
  }
}

// const mapStateToProps = state => ({
//   ...state
//  })

//  const mapDispatchToProps = dispatch => ({
//   complexAction: () => dispatch(complexAction)
//  })
 
//   const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(AdaptiveContainer)
//   const RouteApp = withRouter(ConnectApp)
 
 export default AdaptiveContainer;