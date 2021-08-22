import getUa from '../../utils/getUa';
import PcDetail from '../../view/pc/detail';
import MobileDetail from '../../view/mobile/detail';

function Detail() {
  const ua = getUa();
  if (ua === 'mobile') {
    return (
	  <MobileDetail />
    )
  }
  return (
	<PcDetail />
  )
}

export default Detail;
