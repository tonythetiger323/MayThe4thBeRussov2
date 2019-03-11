import * as React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import NavbarLink from '../NavbarLink'
import PopupState, {
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/index';

const NavbarLinkMenu: React.SFC = () => {
  return (
    <PopupState variant='popover' popupId='NavbarLink-popup-menu'>
      {(popupState: any) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>Their Story</Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <NavbarLink to='/theirstory'> Their Story</NavbarLink>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <NavbarLink to='/herstory'>Her Story</NavbarLink>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <NavbarLink to='/hisstory'>His Story</NavbarLink>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default NavbarLinkMenu;
