import getUa from './utils/getUa';
import Pc from './view/pc';
import Mobile from './view/mobile';

function App() {
  const ua = getUa();
  if (ua === 'mobile') {
    return (
      <Mobile />
    )
  }
  return (
    <Pc />
  )
}

export default App;
