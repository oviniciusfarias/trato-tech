import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import styles from './Busca.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Busca = () => {
  const busca = useSelector(state => state.busca);
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.busca}>
      <input 
        className={styles.input} 
        placeholder='O que você procura?' 
        value={busca} 
        onChange={event => dispatch(mudarBusca(event.target.value))}
      />
    </div>
  )
}

export default Busca;