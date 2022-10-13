import logo from '../img/logo.png';

export default function Header() {
  return (
    <nav className='header'>
      <img src={logo} alt='globe logo' className='header-logo' />
      <h3 className='header-title'>my travel journal.</h3>
    </nav>
  );
}
