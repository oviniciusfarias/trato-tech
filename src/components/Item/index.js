import { formatMoney } from 'utils/formatMoney';
import styles from './Item.module.scss';
import { 
  AiOutlineHeart, 
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { mudarFavorito } from 'store/reducers/itens';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';

const iconeProps = {
  size: 24
};

const quantidadeProps = {
  size: 32,
  color: '#1875e8'
};

const Item = ({ titulo, foto, preco, descricao, favorito, id, carrinho, quantidade }) => {
  const dispath = useDispatch();
  const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id));

  const resolverFavorito = () => {
    dispath(mudarFavorito(id));
  }

  const resolverCarrinho = () => {
    dispath(mudarCarrinho(id));
  }

  const resolverQuantidade = (newQuantity) => {
    if (newQuantity < 0) {
      if (quantidade >= 1) {
        dispath(mudarQuantidade({id, quantidade: newQuantity}));
      }
    } else {
      dispath(mudarQuantidade({id, quantidade: newQuantity}));
    }
  }

  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo}  />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            {formatMoney(preco)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart onClick={resolverFavorito} {...iconeProps} color='#ff0000' className={styles['item-acao']} />
              : <AiOutlineHeart onClick={resolverFavorito} {...iconeProps} color='#041833' className={styles['item-acao']} />
            }
            {carrinho 
              ? (
                <div className={styles.quantidade}>
                  Quantidade:
                  <AiFillMinusCircle 
                    {...quantidadeProps} 
                    onClick={() => resolverQuantidade(-1)} 
                  />

                  <span>{String(quantidade || 0).padStart(2, '0')}</span>

                  <AiFillPlusCircle 
                    {...quantidadeProps} 
                    onClick={() => resolverQuantidade(+1)} 
                  />
                </div>
              )
              : <FaCartPlus 
                {...iconeProps}
                color={estaNoCarrinho ? '#1875e8' : '#041833'}
                className={styles['item-acao']}
                onClick={resolverCarrinho}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;