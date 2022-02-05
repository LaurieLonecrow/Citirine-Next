import Link from "next/link";
import {  } from './ModalNavStyles'

const Modal = ({onClick}) => {
   
  return (
   <div>
        <ul>
          <li onClick={onClick} data-cy="nav-link"><Link href='/'>Meet Citrine</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/services'>Services</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/policies'>Policies</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/links'>Affiliate Links</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/faq'>FAQ</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/pricing'>Pricing</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/appointments'>Appointments</Link></li>
          <li onClick={onClick} data-cy="nav-link"><Link href='/products'>Products</Link></li>
        </ul>
  </div>
  )
};

export default Modal;


