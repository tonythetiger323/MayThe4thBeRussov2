import * as React from 'react'
import { Link } from 'react-router-dom'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { History } from 'history'

// https://material-ui.com/guides/typescript/#usage-of-component-property
// creating a specialized button component that has the props of
// react-router-dom link passed to it

interface NavbarLinkProps extends ButtonProps {
  readonly to: History.LocationDescriptor;
  readonly children: any;
}

const NavbarLink: React.SFC<NavbarLinkProps> = props => {
  const renderLink: React.SFC<any> = itemProps => (
    <Link to={props.to} {...itemProps} />
  );

  return (
    <Button component={renderLink} {...props}>
      {props.children}
    </Button>
  );
};
export default NavbarLink;
