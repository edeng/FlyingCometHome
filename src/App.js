import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { YouTube, Instagram, Twitter } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4365',
    },
    background: {
      default: '#f4f4f4',
    },
  },
  typography: {
    fontFamily: '"Exo 2", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none', // This prevents all-caps text in buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
});

const games = [
  { title: 'Cosmic Clash', description: 'An intergalactic battle royale', image: '/api/placeholder/345/200', link: '#' },
  { title: 'Neon Speedster', description: 'Futuristic racing at its finest', image: '/api/placeholder/345/200', link: '#' },
  { title: 'Pixel Pioneers', description: 'Retro-style adventure with a modern twist', image: '/api/placeholder/345/200', link: '#' },
];

const founders = [
  { name: 'Sarah Johnson', role: 'Creative Director', bio: 'With over a decade of experience in game design, Sarah brings creativity and innovation to every project.' },
  { name: 'Michael Chen', role: 'Technical Lead', bio: 'A programming prodigy, Michael ensures our games push the boundaries of what\'s technically possible.' },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home');
      const games = document.getElementById('games');
      const about = document.getElementById('about');
      const scrollPosition = window.scrollY;

      if (scrollPosition < games.offsetTop - 100) {
        setActiveSection('home');
      } else if (scrollPosition < about.offsetTop - 100) {
        setActiveSection('games');
      } else {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Flying Comet Games
      </Typography>
      <List>
        {['Home', 'Games', 'About Us'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
            >
              <Box component="img" src={`${process.env.PUBLIC_URL}/media/flying-comet-logo.png`} alt="Logo" sx={{ mr: 1, height: 40 }} />
              Flying Comet Games
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box>
                {['home', 'games', 'about'].map((section) => (
                  <Button
                    key={section}
                    color="inherit"
                    href={`#${section}`}
                    sx={{
                      mx: 1,
                      borderBottom: activeSection === section ? '2px solid' : 'none',
                      borderRadius: 0,
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <main>
        <Box
          id="home"
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            mt: 8,
            background: 'linear-gradient(45deg, #FF4365 30%, #FF9A8B 90%)',
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 4 }}
            >
              Welcome to Flying Comet Games
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4 }}>
              Crafting innovative gaming experiences that push the boundaries of interactive entertainment.
            </Typography>
            <Button variant="contained" color="secondary" size="large" href="#games">
              Explore Our Games
            </Button>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg" id="games">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
            Our Latest Releases
          </Typography>
          <Grid container spacing={4}>
            {games.map((game) => (
              <Grid item key={game.title} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={game.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {game.title}
                    </Typography>
                    <Typography>{game.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" endIcon={<ChevronRightIcon />}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box sx={{ bgcolor: 'background.paper', py: 8 }} id="about">
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
              About Us
            </Typography>
            <Grid container spacing={4}>
              {founders.map((founder) => (
                <Grid item key={founder.name} xs={12} md={6}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {founder.name}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1" color="text.secondary">
                        {founder.role}
                      </Typography>
                      <Typography>{founder.bio}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Typography paragraph>
                At Flying Comet Games, we're more than just game developers – we're dreamers, innovators, and passionate gamers ourselves. Our mission is to create captivating digital worlds that not only entertain but also inspire and connect people across the globe.
              </Typography>
              <Typography>
                Founded on the principles of creativity, technical excellence, and player-first design, we strive to push the boundaries of what's possible in interactive entertainment. Join us on our journey to shape the future of gaming!
              </Typography>
            </Box>
          </Container>
        </Box>
      </main>
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Flying Comet Games
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Connect with us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
            <IconButton aria-label="TikTok" color="inherit" component="a" href="#">
              <Twitter />
            </IconButton>
            <IconButton aria-label="YouTube" color="inherit" component="a" href="#">
              <YouTube />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href="#">
              <Instagram />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
              Flying Comet Games
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All rights reserved.'}
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}