import { Container, Button } from './styles';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleThemeMode = ({ theme, toggleTheme }) => {
    
    const isDark = theme === 'dark';

    return (
      <Container>
      <Button darkTheme={isDark} onClick={toggleTheme}>
          <p><FaSun /></p> {/*Icon Light theme*/}
          <p><FaMoon /></p> {/*Icon Dark theme*/}
      </Button>
      </Container>
    );
  };

  export {ToggleThemeMode};