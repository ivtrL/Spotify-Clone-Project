import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '../css/ProfileNav.css'
import React, { useState } from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'

const Profile = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  return (
    <div className="profile-nav">
      <div className="profile-nav-container">
        <Stack className="buttons" spacing={5} direction='row'>
          <a href="#" className="nav-before">
            <Tooltip title='Voltar'>
            <NavigateBeforeIcon/>
            </Tooltip>
          </a>
          <a href="" className="nav-next">
          <Tooltip title='Avançar'>
            <NavigateNextIcon/>
            </Tooltip>
          </a>
        </Stack>
        <div>
        <Tooltip title="Conta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <div className='profile'>
              <Avatar className='profile-icon' sx={{ width: 24, height: 24 }} />
              <span>vtrL</span>
            </div>
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 6,
          sx: {
            color: 'white',
            bgcolor: '#282828',
            width: '195px',
            height: '210px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#282828',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <span className='popup-text'>Conta</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <span className='popup-text'>Perfil</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <span className='popup-text'>Sessão Particular</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <span className='popup-text'>Configurações</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
        <span className='popup-text'>Sair</span>
        </MenuItem>
      </Menu>
        </div>
      </div>
    </div>
  )
}

export default Profile