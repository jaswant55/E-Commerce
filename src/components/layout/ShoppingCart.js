import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap';

const ShoppingCart = () => {
  return (
    <div>
        {['bottom'].map((placement) => (
    <OverlayTrigger
      trigger="hover"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned`}>
          <Popover.Header as="h3">{`Popover`}</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary">Popover on hey</Button>
    </OverlayTrigger>
  ))}
    </div>
  )
}

export default ShoppingCart;