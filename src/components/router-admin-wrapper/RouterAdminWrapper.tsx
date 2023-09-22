import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
type Props = {
    children: ReactNode
  }
const RouterAdminWrapper = ({children}: Props) => {
  const [showChild, setShowChild] = useState<boolean>(true);
  const location = useLocation().pathname;

  useEffect(() => {
    if(location.includes('/admin')) setShowChild(false);
    else setShowChild(true);
  },[location])

  return (
    <div>
        {showChild ? children : null}
    </div>
  )
}

export default RouterAdminWrapper