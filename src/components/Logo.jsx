const Logo = ({ className }) => (
  <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current ${className ? className : "text-white"}`}>
    <path d="M43.3531 28.63C41.248 36.7756 34.2216 43.1068 25.3623 43.9152C14.0873 44.9439 4.11316 36.6377 3.0844 25.3627C2.05565 14.0877 10.3619 4.11354 21.6369 3.08479C32.9119 2.05603 42.886 10.3623 43.9148 21.6373C33.0807 25.012 15.82 24.9343 6.5 22.5" strokeWidth="1.90698" />
    <line x1="29.0885" y1="34.0001" x2="29.0885" y2="13" strokeWidth="1.90698" />
    <line y1="-0.953488" x2="21.0001" y2="-0.953488" transform="matrix(-0.00394515 0.999992 -0.999995 -0.00318497 17.083 13.0001)" strokeWidth="1.90698" />
  </svg>
);

export default Logo;
