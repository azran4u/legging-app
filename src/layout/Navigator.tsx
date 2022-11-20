import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import theme from '../shared/theme';
import textMessages from '../shared/TextMessages';
import TextMessages from '../shared/TextMessages';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const categories = [
  {
    id: 'Operations',
    children: [
      {
        id: textMessages.cart,
        icon: <ShoppingCartIcon />,
        active: true,
        visible: true,
      },
      { id: textMessages.settings, icon: <SettingsIcon />, visible: true },
      { id: textMessages.admin, icon: <SettingsIcon />, visible: false },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: theme.palette.primary.contrastText,
  '&:hover, &:focus': {
    bgcolor: theme.palette.primary.light,
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  return (
    <Drawer dir="rtl" variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}
        >
          {TextMessages.appName}
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            {children.map(({ id: childId, icon, active, visible }) => {
              const displayItem = visible ? 'block' : 'none';
              return (
                <ListItem
                  disablePadding
                  key={childId}
                  sx={{ display: { xl: displayItem, xs: displayItem } }}
                >
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
