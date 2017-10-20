import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavItem = ({
  children,
  active,
  tab,
  path_to,
  hiddenTablet,
  hiddenMobile,
  ...props
}) => {


  //console.log(path_to);
  let ref_path = path_to === undefined ? '/' : path_to;

  let className = 'nav-item'
  if (active) className += ' is-active'
  if (tab) className += ' is-tab'
  if (hiddenTablet) className += ' is-hidden-tablet'
  if (hiddenMobile) className += ' is-hidden-mobile'

  return <Link to={ref_path} className={className} {...props}>{children} </Link>
}

NavItem.displayName = 'Nav.Item'

NavItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  tab: PropTypes.bool,
  hiddenTablet: PropTypes.bool,
  hiddenMobile: PropTypes.bool
}

export default NavItem
